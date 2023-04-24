import "./App.css";
import WeatherSearchEngine from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearchEngine />
      <p>
        Opensource code by Catherine Glover, available on{" "}
        <a href="https://github.com/CathGlover/weather-react-shecodes-app">
          Github
        </a>{" "}
        hosted on{" "}
        <a href="https://main--clever-paletas-3c5a88.netlify.app/">Netlify</a>
      </p>
    </div>
  );
}
