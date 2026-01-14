import { useToastStore } from '@/features/toast/model/toastStore';
import { useFavoritesStore } from '../model/store';

export const useFavoriteToggleMessage = () => {
  const showToast = useToastStore((s) => s.show);
  const toggle = useFavoritesStore((s) => s.toggle);

  const toggleFavorite = (id: string) => {
    const res = toggle(id);

    if (!res.ok && res.reason === 'limit') {
      showToast('즐겨찾기는 최대 6개까지 추가할 수 있어요.', 1500);
    }
  };

  return { toggleFavorite };
};
