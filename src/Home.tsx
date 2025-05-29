import "./index.css";

const Home = () => {
  const btnClicked = () => {
    const tgApp = window?.Telegram?.WebApp;
    const platform = tgApp.platform;

    if (platform.toLowerCase() === "android") {
      tgApp.openLink(
        `https://b2fd-96-0-144-237.ngrok-free.app/telegram/webhook/casino_plus/newTab?redirect_url=` +
          encodeURIComponent(
            "https://testtest-git-main-magsraniers-projects.vercel.app/"
          )
      );
    } else {
      tgApp.openLink("https://github.com/");
    }
  };

  return (
    <div>
      <button onClick={btnClicked}>GITHUB LINK</button>
    </div>
  );
};

export default Home;
