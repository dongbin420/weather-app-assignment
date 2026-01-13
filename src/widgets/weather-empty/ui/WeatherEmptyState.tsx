interface WeatherEmptyStateProps {
  message?: string;
}

const DEFAULT_MESSAGE = '해당 장소의 정보가 제공되지 않습니다.';

function WeatherEmptyState({ message = DEFAULT_MESSAGE }: WeatherEmptyStateProps) {
  return (
    <div className="mx-auto w-full max-w-275 px-6 pb-16 pt-6 md:px-10">
      <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-center text-base font-medium text-white/90 backdrop-blur-xs md:p-10">
        {message}
      </div>
    </div>
  );
}

export default WeatherEmptyState;
