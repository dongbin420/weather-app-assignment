import FavoriteHeader from '@/widgets/headers/favorite/ui/FavoriteHeader';
import type { PropsWithChildren } from 'react';

function FavoriteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh bg-linear-to-b from-sky-100 via-slate-50 to-white text-slate-800">
      <FavoriteHeader />
      <main>{children}</main>
    </div>
  );
}

export default FavoriteLayout;
