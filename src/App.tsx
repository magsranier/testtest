const App = () => {
  const btnClicked = () => {
    const tgApp = window?.Telegram?.WebApp;
    tgApp.openLink("google.com");

    alert("TEST");
  };

  return (
    <div>
      <button onClick={btnClicked}>TEST 2</button>
    </div>
  );
};

export default App;
