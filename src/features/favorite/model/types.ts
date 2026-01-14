export type FavoriteId = string;
export type FavoriteAlias = string;

export type ToggleResult = { ok: true; mode: 'added' | 'removed' } | { ok: false; reason: 'limit' };

export interface FavoritesState {
  favoriteIds: FavoriteId[];
  aliasesById: {
    [id: FavoriteId]: FavoriteAlias;
  };

  toggle: (id: FavoriteId) => ToggleResult;
  remove: (id: FavoriteId) => void;
  isFavorite: (id: FavoriteId) => boolean;
  count: () => number;

  setAlias: (id: FavoriteId, alias: FavoriteAlias) => void;
  clearAlias: (id: FavoriteId) => void;
  getAlias: (id: FavoriteId) => FavoriteAlias | undefined;
}
