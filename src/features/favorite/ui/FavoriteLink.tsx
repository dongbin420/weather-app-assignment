import { Link } from 'react-router';
import { Star } from 'lucide-react';
import { useFavoritesStore } from '@/features/favorite/model/store';

function FavoriteLink() {
  const count = useFavoritesStore((s) => s.favoriteIds.length);

  return (
    <Link
      to="/favorite"
      className="
        relative inline-flex flex-col items-center justify-center
        gap-1
        px-2 py-1
        rounded-xl
        hover:bg-white/10
        transition
        active:scale-95
        select-none
      "
    >
      <Star className="h-8 w-8 text-white fill-white" />
      <span className="text-[11px] font-medium text-white/90 leading-none">즐겨찾기</span>
      {count > 0 && (
        <span
          className="
            absolute right-0 -top-1.5
            h-5 min-w-5
            rounded-full
            bg-yellow-400
            text-[13px] font-bold text-white
            flex justify-center
          "
        >
          {count}
        </span>
      )}
    </Link>
  );
}

export default FavoriteLink;
