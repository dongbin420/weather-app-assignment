import './styles/App.css';
import { useOneCallQuery } from '../entities/weather/model/useOneCallQuery';
import { mapToWeatherUiModel } from '../entities/weather/model/mappers';
import { useMemo } from 'react';
import { useCurrentCoords } from '../shared/lib/geolocation/useCurrentCoords';

function App() {
  const { status, coords, message, request, isLoading, isDenied, isError } = useCurrentCoords();
  console.log(status, message);
  if (isLoading) return <div>{message ?? '현재 위치 확인 중...'}</div>;

  if (isDenied) {
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>{message}</p>
        <button onClick={request}>다시 시도</button>
      </div>
    );
  }

  if (status === 'success' && coords) {
    return (
      <div>
        <div>lat: {coords.lat}</div>
        <div>lon: {coords.lon}</div>
      </div>
    );
  }

  // const placeLabel = '서울(테스트)';
  // const hourlyCount = 24;

  // const {
  //   data: raw,
  //   isLoading,
  //   error,
  // } = useOneCallQuery({
  //   lat: 37.5665,
  //   lon: 126.978,
  // });

  // const weatherUi = useMemo(() => {
  //   if (!raw) return undefined;
  //   return mapToWeatherUiModel(placeLabel, raw, hourlyCount);
  // }, [raw, placeLabel, hourlyCount]);

  // if (isLoading) return <div>loading...</div>;
  // if (error) return <div>error: {(error as Error).message}</div>;
  // if (!weatherUi) return null;

  return (
    <>hi</>
    // <div>
    //   <h1>{weatherUi.placeLabel}</h1>
    //   <div>현재: {weatherUi.currentTemp}°</div>
    //   <div>
    //     최저/최고: {weatherUi.todayMin}° / {weatherUi.todayMax}°
    //   </div>
    //   <ul>
    //     {weatherUi.hourly.map((h) => (
    //       <li key={h.dt}>
    //         {h.dt}: {h.temp}°
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default App;
