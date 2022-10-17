import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";


// 1. 앱이 실행되자마자 현재 위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태
// 3. 5개의 버튼이 있다 (현재위치 1, 다른도시 4)
// 4. 버튼을 누를때마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치의 기반의 날씨가 나온다
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const [loading, setLoading] = useState(false);

  const cities=['paris','new york','tokyo','seoul'];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat, lon) => {

    let url = ``;
   setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };


  const getWeatherByCity = async() => {
    let url = ``
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }


  useEffect(()=>{
    if (city==""){
    getCurrentLocation();
    } else {
    getWeatherByCity();
    }

  }, [city])

  return (
    <div>
      {loading ?
      ( 
      <div className='container'>
      <ClipLoader color='#f88c6b' loading={loading} size={150} /> 
      </div>
      ):(
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} selectedCity={city}/>
      </div>
      )}
    </div>
  );
}

export default App;
