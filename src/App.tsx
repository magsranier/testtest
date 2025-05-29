import "./index.css";

const App = () => {
  const btnClicked = () => {
    // const tgApp = window?.Telegram?.WebApp;
    // if (tgApp) {
    // Add { tryBrowser: true } to the openLink options
    // tgApp.openLink("intent://github.com/#Intent;scheme=https;end");
    // } else {
    // Fallback for when Telegram Web App SDK is not available
    // window.open("https://github.com/", "_blank");

    setTimeout(() => {
      window.location.href = `intent://github.com#Intent;scheme=https;end`;
    }, 500);
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
