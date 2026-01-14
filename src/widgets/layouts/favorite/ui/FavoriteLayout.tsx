import FavoriteHeader from '@/widgets/headers/favorite/ui/FavoriteHeader';
import type { PropsWithChildren } from 'react';
import Toast from '@/features/toast/ui/Toast';
import { themeBackground } from '../../weather/lib/themeBackground';

function FavoriteLayout({ children }: PropsWithChildren) {
  const bgUrl = themeBackground['winter'];

  return (
    <div className="min-h-dvh bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgUrl})` }}>
      <FavoriteHeader />
      <main>{children}</main>
      <Toast />
    </div>
  );
}

export default FavoriteLayout;
