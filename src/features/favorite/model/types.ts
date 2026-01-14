export type FavoriteId = string;

export type ToggleResult = { ok: true; mode: 'added' | 'removed' } | { ok: false; reason: 'limit' };

export interface FavoritesState {
  favoriteIds: FavoriteId[];
  toggle: (id: FavoriteId) => ToggleResult;
  remove: (id: FavoriteId) => void;
  isFavorite: (id: FavoriteId) => boolean;
  count: () => number;
}
