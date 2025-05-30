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
            "https://uat.m.gcash.com/gcash-cashier-web/1.2.1/index.html#/confirm?bizNo=20250530121212800110170998402339791&timestamp=1748584909274&sign=CdMT7xkfluleR1tz26j%2F%2FqPG7xciGw8sYPBzLdEH6ybMNFgciZR24gaUxl7LAgEE8QAbe4yW%2F49Tow2%2FjIYUa16UCJcL58wf7sZVm0Ro23hSL682NpqVOXXG%2F6I68YhWM2qU90Yd16rUwBJmcDDyk9glRQomrFEp87Pf5gtEiNemWDufsut%2FGvdXUO%2FdyOOhfu8xOdpvo0YUex47ZShZpVf2JO6mJHoYmuMJXlmpOP0iu%2FvZnQqS1n6SwNAZAZ2xdPEgG7KtvQsnuj%2FKyH8RBTz2BpSxVfnGtwI5e0Jb%2FZvWOYGSia0q3noU1KQX5kNQH8jRqA7hX0CATwJnSVNdLQ%3D%3D&orderAmount=20.00&pdCode=51051000101000100001&merchantVersion=v2&merchantid=217020000648378724964&queryInterval=10000&qrcode=GCSHWPV220250530121212800110170998402339791,217020000648378724964&merchantName=Stotsenberg%20test&expiryTime=299"
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
