import type { PlaceSearchResult } from '@/features/search/model/types';
import FavoriteStarButton from '../../../features/favorite/ui/FavoriteStarButton';
import { useFavoritesStore } from '@/features/favorite/model/store';

interface Props {
  item: PlaceSearchResult;
  onSelect: (item: PlaceSearchResult) => void;
}

function SearchDropDownItem({ item, onSelect }: Props) {
  const baseLabel = item.label;
  const alias = useFavoritesStore((s) => s.aliasesById?.[item.id]);
  const hasAlias = Boolean(alias?.trim());

  return (
    <li
      onClick={() => onSelect(item)}
      className={[
        'flex items-center justify-between gap-2',
        'cursor-pointer px-4 py-2 text-white/80',
        'hover:bg-white/15',
      ].join(' ')}
    >
      <div className="min-w-0">
        {hasAlias ? (
          <>
            <div className="truncate text-sm font-semibold text-white">{alias}</div>
            <div className="truncate text-xs font-medium text-white/60">{baseLabel}</div>
          </>
        ) : (
          <div className="truncate text-sm font-medium text-white/85">{baseLabel}</div>
        )}
      </div>
      <FavoriteStarButton placeId={item.id} />
    </li>
  );
}

export default SearchDropDownItem;
