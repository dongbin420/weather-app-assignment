import { Link } from 'react-router';
import Search from '@/widgets/search/ui/Search';

function WeatherHeader() {
  return (
    <header className="w-full">
      <div className="mx-auto my-0 max-w-360 px-8 py-10 flex items-center justify-between max-sm:flex-col max-sm:gap-4">
        <Link to="/" className="text-lg font-semibold tracking-tight hover:opacity-80">
          weather-app
        </Link>
        <Search />
        {/* 즐겨찾기 버튼 자리*/}
        <div></div>
      </div>
    </header>
  );
}

export default WeatherHeader;
