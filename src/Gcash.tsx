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
            "https://uat.m.gcash.com/gcash-cashier-web/1.2.1/index.html#/confirm?bizNo=20250530121212800110170174902355332&timestamp=1748585882172&sign=Qp4OORadSniYOBmJXnc1YHfmM83scXY8IjpL1MkVfA0lM5q32N6Vg1XWIz3%2BYhAs5qUFUxLkzQ322B5wZLHcD%2FILfKI4YOquiJdhHOy%2FbEyBBAVL5uS8sN7ZBGP7sMfLZ3iV1gkU0glNqrlYNblV06uyvD01nRx0d1RYkgMePaNSuHsecYV5QQoG0SGpjYP5xckl6YBvoR1zYXYhNh9%2BoXc6q6z%2BOtv8A5m%2FopjcQ6Usy78%2FAVtsyPXPgchfC5b6WflLRsjMBwwpf3XeWD8b71py6HJElgfs9yD8FVF1VedUFLBgCu5%2BXOurHNipe6L51p3mMl11cdj6xka%2BMc5Iyg%3D%3D&orderAmount=20.00&pdCode=51051000101000100001&merchantVersion=v2&merchantid=217020000648378724964&queryInterval=10000&qrcode=GCSHWPV220250530121212800110170174902355332,217020000648378724964&merchantName=Stotsenberg%20test&expiryTime=298"
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
