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
            "https://uat.m.gcash.com/gcash-cashier-web/1.2.1/index.html#/confirm?bizNo=20250530121212800110170388302336790&timestamp=1748585357999&sign=Vh8RYck15ShWZnXf26jCWsVXe9Ot5mK74zr95jcFpWhqbMDMwr2g%2BKkslFUHS9NH36URNTF5URJ%2BhoXoZPuliq5qXeDSMJjvGY2ObQw%2FPphtoSzZPJeDs7tceuz9ShpMON1QLTtBU9aC%2F%2FRpHW4zQpEiL9507sHfWZhrnKWZmPBZmKBJzrM32ZkwgzcGJPgigYWP3Z6xx5SW9%2FrmmwRRGTdjX5TrF7m5y12rRLRWk07L9MO4%2F7FN88aPAb1OOAlgvqaULC3YM2SKpuVp2HT%2BJbQUm1yw89J26WfIS5QzQFnnqFIMDYcjqlFa%2FIvOVCNMwovQNmHRs3y7v1NbeN4PiQ%3D%3D&orderAmount=20.00&pdCode=51051000101000100001&merchantVersion=v2&merchantid=217020000648378724964&queryInterval=10000&qrcode=GCSHWPV220250530121212800110170388302336790,217020000648378724964&merchantName=Stotsenberg%20test&expiryTime=298"
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
