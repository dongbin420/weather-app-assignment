import FavoriteHeader from '@/widgets/headers/favorite/ui/FavoriteHeader';
import type { PropsWithChildren } from 'react';
import Toast from '@/features/toast/ui/Toast';

function FavoriteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh bg-linear-to-b from-sky-100 via-slate-50 to-white text-slate-800">
      <FavoriteHeader />
      <main>{children}</main>
      <Toast />
    </div>
  );
}

export default FavoriteLayout;
