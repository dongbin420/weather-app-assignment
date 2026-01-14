import type { PlaceSearchResult } from '@/features/search/model/types';
import FavoriteStarButton from '../../../features/favorite/ui/FavoriteStarButton';

interface Props {
  item: PlaceSearchResult;
  onSelect: (item: PlaceSearchResult) => void;
}

function SearchDropDownItem({ item, onSelect }: Props) {
  return (
    <li
      onClick={() => onSelect(item)}
      className={[
        'flex items-center justify-between gap-2',
        'cursor-pointer px-4 py-2 text-sm text-white/80',
        'hover:bg-white/15',
      ].join(' ')}
    >
      <span className="truncate">{item.label}</span>
      <FavoriteStarButton placeId={item.id} />
    </li>
  );
}

export default SearchDropDownItem;
