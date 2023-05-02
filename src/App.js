import "./App.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <WeatherSearch />
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
