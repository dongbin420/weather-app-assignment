import { Link } from 'react-router';

function FavoriteHeader() {
  return (
    <header className="w-full">
      <div className="mx-auto my-0 max-w-360 px-8 py-10 flex items-center">
        <Link to="/" className="text-lg font-semibold tracking-tight hover:opacity-80">
          weather-app
        </Link>
        {/* 검색창 자리 */}
      </div>
    </header>
  );
}

export default FavoriteHeader;
