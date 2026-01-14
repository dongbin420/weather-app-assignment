import type { PlaceSearchResult } from '@/features/search/model/types';
import SearchDropDownItem from './SearchDropDownItem';

interface SearchDropDownProps {
  results: PlaceSearchResult[];
  onSelect: (item: PlaceSearchResult) => void;
}

function SearchDropDown({ results, onSelect }: SearchDropDownProps) {
  return (
    <div
      className={[
        'absolute z-50 w-full overflow-hidden',
        'rounded-b-2xl border border-t-0 border-white/45',
        'bg-black/20 backdrop-blur',
      ].join(' ')}
    >
      <ul>
        {results.map((item) => (
          <SearchDropDownItem key={item.id} item={item} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
}

export default SearchDropDown;
