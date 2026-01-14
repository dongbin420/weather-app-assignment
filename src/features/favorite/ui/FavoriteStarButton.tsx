import { Star } from 'lucide-react';
import { useFavoritesStore } from '@/features/favorite/model/store';
import { useFavoriteToggleMessage } from '../lib/useFavoriteToggleMessage';

interface Props {
  placeId: string;
}

function FavoriteStarButton({ placeId }: Props) {
  const isFav = useFavoritesStore((s) => s.favoriteIds.includes(placeId));
  const { toggleFavorite } = useFavoriteToggleMessage();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(placeId);
      }}
      className="shrink-0 rounded-full p-1 hover:bg-white/10 cursor-pointer"
    >
      <Star size={20} className={isFav ? 'text-yellow-300' : 'text-white/60'} fill={isFav ? 'currentColor' : 'none'} />
    </button>
  );
}

export default FavoriteStarButton;
