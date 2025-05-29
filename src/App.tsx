import "./index.css";

const App = () => {
  const btnClicked = () => {
    const tgApp = window?.Telegram?.WebApp;
    tgApp.openLink("https://github.com/");

    alert("TEST");
  };

  return (
    <div>
      <button onClick={btnClicked}>GITHUB LINK</button>
    </div>
  );
};

export default App;
