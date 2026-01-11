import './styles/App.css';
import { useOneCallQuery } from '../entities/weather/model/useOneCallQuery';

function App() {
  // const { data, isLoading, error } = useOneCallQuery({
  //   lat: 37.5665,
  //   lon: 126.978,
  //   placeLabel: '서울(테스트)',
  //   hourlyCount: 24,
  // });

  // if (isLoading) return <div>loading...</div>;
  // if (error) return <div>error: {(error as Error).message}</div>;
  // if (!data) return null;

  return (
    <>hello</>
    // <div>
    //   <h1>{data.placeLabel}</h1>
    //   <div>현재: {data.currentTemp}°</div>
    //   <div>
    //     최저/최고: {data.todayMin}° / {data.todayMax}°
    //   </div>
    //   <ul>
    //     {data.hourly.map((h) => (
    //       <li key={h.dt}>
    //         {h.dt}: {h.temp}°
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default App;
