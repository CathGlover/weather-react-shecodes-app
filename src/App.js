import "./App.css";
import WeatherSearch from "./WeatherSearch";
import "./WeatherSearch.css";

export default function App() {
  return (
    <div className="App">
      <WeatherSearch />
      <p className="Footer">
        Open source code by Catherine Glover, available on{" "}
        <a
          href="https://github.com/CathGlover/weather-react-shecodes-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github.
        </a>
      </p>
    </div>
  );
}
