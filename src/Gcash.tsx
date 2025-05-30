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
            "https://uat.m.gcash.com/gcash-cashier-web/1.2.1/index.html#/confirm?bizNo=20250530121212800110170628202366369&timestamp=1748576054348&sign=UNDkX8WKSmda9iZ9uLyzEc%2BBw7E3T1R22bN0Ks7PH8xINcU1%2F5FeuEWMmG1ztY%2Fa%2BDv96jU4MHV%2B0gPFTNo%2FjsG21GDKxCa8pYC%2FNqRs%2BlygmlsE3Xl4KpPEv6MknzNCvJs4GjUJk5D%2BpJ3NoNepvSr0L9%2Bw4eoWLVi3GKsmoLcTDmoNsSY7Dwp0foeOU6IAJno3DS3WnnR5CfnxazrUUQhE5uQODAbRwl7U3u7S9uW9R9hPNpnIH2An4geoRlHXf0hSu11%2Feq5UWI9IrLmz5cP9l7nMLcXQacy%2B%2By9X2Uz0XwBxiNtOrgjXLnG26V13rG1miaGRg1Go%2FYDGNbENVw%3D%3D&orderAmount=20.00&pdCode=51051000101000100001&merchantVersion=v2&merchantid=217020000648378724964&queryInterval=10000&qrcode=GCSHWPV220250530121212800110170628202366369,217020000648378724964&merchantName=Stotsenberg%20test&expiryTime=299"
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
