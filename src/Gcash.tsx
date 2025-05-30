import "./index.css";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Gcash = () => {
  const [searchParams] = useSearchParams();

  const btnClicked = () => {
    const tgApp = window?.Telegram?.WebApp;
    const platform = tgApp.platform;

    if (platform.toLowerCase() === "android") {
      tgApp.openLink(
        `https://testtest-git-main-magsraniers-projects.vercel.app/gcash/?redirect_url=` +
          encodeURIComponent(
            "https://uat.m.gcash.com/gcash-cashier-web/1.2.1/index.html#/confirm?bizNo=20250530121212800110170018102315350&timestamp=1748574964005&sign=ZeQ1cbaBfmat6maqkTSV3ZbL4SCc1HFBvpVW2mYV5lAJIVtIwHhp1hDTJJTZsjkqWUXXzBCME%2FCV7FSbukCKgTSEtXZcJQTlN5Rvzm4yrPHMFAGflrlr9T1JWIukt0wRFYnArFxvnT1zz3EiG%2Bzenp5AfZ%2BqNqptdQW97fz%2B%2FuzVALOptb6ZolSnEq%2BuqafXjYV4%2BxjWdKHlIu16HNuU4Ord1kLkmUq%2FraxaYyvwkXbRDrev1cCMo3Y71cSNHMdEbeJKHwplSG77agc2%2B7R2uAWZnfX2QgOzEbQWtTSHC75kJR0iZ0tFXGzFZZOh3F9BgVnVYzy5aoALCiVw%2Bttphw%3D%3D&orderAmount=20.00&pdCode=51051000101000100001&merchantVersion=v2&merchantid=217020000648378724964&queryInterval=10000&qrcode=GCSHWPV220250530121212800110170018102315350,217020000648378724964&merchantName=Stotsenberg%20test&expiryTime=298"
          )
      );
    } else {
      tgApp.openLink("https://github.com/");
    }
  };

  useEffect(() => {
    const redirect_url = searchParams.get("redirect_url");

    if (redirect_url) {
      window.location.href = `intent://${redirect_url.replace(
        /^https?:\/\//,
        ""
      )}/#Intent;scheme=https;end`;
    }
  }, [searchParams]);

  return (
    <div>
      <button onClick={btnClicked} className="gcash">
        GCASH TEST
      </button>
    </div>
  );
};

export default Gcash;
