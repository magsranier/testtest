import "./index.css";

const App = () => {
  const btnClicked = () => {
    // const tgApp = window?.Telegram?.WebApp;
    // if (tgApp) {
    // Add { tryBrowser: true } to the openLink options
    // tgApp.openLink("https://github.com/", { tryBrowser: true });
    // } else {
    // Fallback for when Telegram Web App SDK is not available
    // window.open("https://github.com/", "_blank");

    window.location.href = `intent://github.com/#Intent;scheme=https;end`;
    // }
    alert("TEST");
  };

  return (
    <div>
      <button onClick={btnClicked}>GITHUB LINK</button>
    </div>
  );
};

export default App;
