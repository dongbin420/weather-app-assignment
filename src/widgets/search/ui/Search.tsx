import { useRef, useState } from 'react';
import { searchPlacesFromList } from '@/features/search/lib/searchPlacesFromList';
import SearchDropDown from './SearchDropDown';
import korea_districts from '@/features/search/data/korea_districts.json';
import { useClickOutside } from '@/shared/lib/clickOut/useClickOutside';

interface SearchProps {
  isFav?: boolean;
}

function Search({ isFav }: SearchProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const results = searchPlacesFromList(korea_districts, query);
  const isDropdownVisible = open && results.length > 0;

  const handleSelect = (label: string) => {
    setQuery(label);
    setOpen(false);
  };

  // 바깥 클릭시 닫기
  useClickOutside(wrapperRef, () => {
    setOpen(false);
  });

  return (
    <div ref={wrapperRef} className={`relative w-full max-w-md max-md:max-w-xs ${isFav ? 'mx-auto' : ''}`}>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="지역 검색"
        className={[
          'w-full px-4 py-2 text-sm text-white/90 placeholder:text-white/40',
          'border border-white/45 backdrop-blur bg-white/5',
          'focus:outline-none',
          isDropdownVisible ? 'rounded-t-2xl border-b-white/10' : 'rounded-full',
        ].join(' ')}
      />

      {open && results.length > 0 && <SearchDropDown results={results} onSelect={handleSelect} />}
    </div>
  );
}

export default Search;
