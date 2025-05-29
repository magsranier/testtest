import "./index.css";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const [searchParams] = useSearchParams();

  const btnClicked = () => {
    const tgApp = window?.Telegram?.WebApp;
    const platform = tgApp.platform;

    if (platform.toLowerCase() === "android") {
      tgApp.openLink(
        `https://testtest-git-main-magsraniers-projects.vercel.app/?redirect_url=` +
          encodeURIComponent(
            "https://testtest-git-main-magsraniers-projects.vercel.app/"
          )
      );
    } else {
      tgApp.openLink("https://github.com/");
    }
  };

  useEffect(() => {
    const redirect_url = searchParams.get("redirect_url");

    if (redirect_url) {
      window.location.href = `intent://github.com#Intent;scheme=https;end`;
    }
  }, [searchParams]);

  return (
    <div>
      <button onClick={btnClicked}>GITHUB LINK</button>
    </div>
  );
};

export default Home;
