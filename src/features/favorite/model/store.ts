import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FavoritesState } from './types';
import { LIMIT } from '@/shared/constants/constants';
import { ALIAS_MAX_LENGTH } from '@/shared/constants/constants';

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteIds: [],
      aliasesById: {},

      // 즐겨찾기
      toggle: (id) => {
        const ids = get().favoriteIds;

        if (ids.includes(id)) {
          set({ favoriteIds: ids.filter((x) => x !== id) });
          return { ok: true, mode: 'removed' };
        }

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

      // 별칭
      setAlias: (id, alias) => {
        const next = alias.trim();
        if (!next) return;
        if (next.length > ALIAS_MAX_LENGTH) return;

        set((state) => ({
          aliasesById: {
            ...state.aliasesById,
            [id]: next,
          },
        }));
      },

      clearAlias: (id) => {
        set((state) => {
          const nextAliases = { ...state.aliasesById };
          delete nextAliases[id];
          return { aliasesById: nextAliases };
        });
      },

      getAlias: (id) => get().aliasesById[id],
    }),
    {
      name: 'weatherapp:favorites:v1',
      version: 2,
    },
  ),
);
