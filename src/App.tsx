const App = () => {
  const btnClicked = () => {
    if (window?.Telegram === null) return;
    const tgApp = window?.Telegram?.WebApp;
    tgApp.openLink("google.com");
  };

  return (
    <div>
      <button onClick={btnClicked}>TEST</button>
    </div>
  );
};

export default App;
