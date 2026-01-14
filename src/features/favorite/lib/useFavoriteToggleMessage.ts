import { useToastStore } from '@/features/toast/model/toastStore';
import { useFavoritesStore } from '../model/store';

export const useFavoriteToggleMessage = () => {
  const showToast = useToastStore((s) => s.show);
  const toggle = useFavoritesStore((s) => s.toggle);

  const toggleFavorite = (id: string) => {
    const res = toggle(id);

    if (!res.ok) {
      if (res.reason === 'limit') showToast('즐겨찾기는 최대 6개까지 추가할 수 있습니다.', 1500);
      return;
    }

    if (res.mode === 'added') showToast('즐겨찾기에 추가했습니다.', 1200);
    if (res.mode === 'removed') showToast('즐겨찾기에서 삭제했습니다.', 1200);
  };

  return { toggleFavorite };
};
