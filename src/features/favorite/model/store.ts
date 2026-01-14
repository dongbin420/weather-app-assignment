import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FavoritesState } from './types';
import { LIMIT } from '@/shared/constants/constants';

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteIds: [],

      toggle: (id) => {
        const ids = get().favoriteIds;

        // remove
        if (ids.includes(id)) {
          set({ favoriteIds: ids.filter((x) => x !== id) });
          return { ok: true, mode: 'removed' };
        }

        // add (6개 제한 체크 포함)
        if (ids.length >= LIMIT) {
          return { ok: false, reason: 'limit' };
        }

        set({ favoriteIds: [...ids, id] });
        return { ok: true, mode: 'added' };
      },

      remove: (id) => {
        const ids = get().favoriteIds;
        set({ favoriteIds: ids.filter((x) => x !== id) });
      },

      isFavorite: (id) => get().favoriteIds.includes(id),

      count: () => get().favoriteIds.length,
    }),
    {
      name: 'weatherapp:favorites:v1', // localStorage key
      version: 1,
    },
  ),
);
