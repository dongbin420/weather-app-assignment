import FavoriteLayout from '@/widgets/layouts/favorite/ui/FavoriteLayout';
import { useFavoritesStore } from '@/features/favorite/model/store';
import FavoriteCard from '@/features/favorite/ui/FavoriteCard';
import { formattedUserTime } from '@/shared/lib/time/formatUserTime';

export function FavoritePage() {
  const ids = useFavoritesStore((s) => s.favoriteIds);

  return (
    <FavoriteLayout>
      <div className="mx-auto max-w-200 px-8 py-6">
        <h1 className="text-lg font-semibold text-white">즐겨찾기</h1>
        <div className="mt-2 rounded-2xl border border-white/10 bg-black/12 backdrop-blur-xs p-6 pt-4 text-sm text-white/90">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/6" />
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-300/80 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span>현재 시각 {formattedUserTime}</span>
          </div>
          {ids.length === 0 ? (
            '즐겨찾기에 추가된 장소가 없습니다.'
          ) : (
            <ul className="grid gap-4">
              {ids.map((id) => (
                <li key={id}>
                  <FavoriteCard placeId={id} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </FavoriteLayout>
  );
}
