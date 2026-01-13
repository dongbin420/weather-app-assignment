import type { PlaceSearchResult } from '@/features/search/model/types';

interface SearchDropDownProps {
  results: PlaceSearchResult[];
  onSelect: (label: string) => void;
}

function SearchDropDown({ results, onSelect }: SearchDropDownProps) {
  return (
    <ul
      className={[
        'absolute z-50 w-full',
        'rounded-b-2xl border border-t-0 border-white/45',
        'bg-white/5 backdrop-blur',
        'overflow-hidden',
      ].join(' ')}
    >
      {results.map((item) => (
        <li
          key={item.id}
          onClick={() => onSelect(item.label)}
          className={['cursor-pointer px-4 py-2 text-sm text-white/80', 'hover:bg-white/15'].join(' ')}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}

export default SearchDropDown;
