// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          url={[
            "https://www.youtube.com/watch?v=zO_6No_X7jQ&pp=ygUTcHVibGljaWRhZGUgdm9kYWNvbQ%3D%3D",
            "https://www.youtube.com/watch?v=Wp5x1bzykNQ&pp=ygUQcHVibGljaWRhZGUgbWNlbA%3D%3D",
            "https://passarosexoticos.net/patos/",
          ]}
        /> */}
        <img
          className="react-player"
          width="100%"
          height="100%"
          src="https://passarosexoticos.net/wp-content/uploads/2020/08/Patos-scaled.jpg"
        />
        <p>I'm on TV MAMA!!!</p>
      </header>
    </div>
  );
}

export default App;
