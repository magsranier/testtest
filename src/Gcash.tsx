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
            "https://uat.m.gcash.com/gcash-cashier-web/1.2.1/index.html#/confirm?bizNo=20250530121212800110170042702347730&timestamp=1748585644842&sign=Ftfyd%2Fu5mi7mQc9kjxo13TamB9k%2FGDh9IG0FNK3QxjhoZ5%2FhDpOiNTDR49PSef1veA4u%2FvQCCcEoBPAYRSrNHOyphU4LttUtQXToeQJVSz7nPBsstuYoQVOI5fZg%2BqSZ92QLqSuXTilLXmONEUQ4EgvraOimIuWyRhbUUZov7ASTdzi8VLm1Y4xF6Tn754lCu7yzNIErd%2BOkAANrsWaoymOG5khJGOO8m2vx6YMPlxXs359o01RaSstm%2FY%2Fs8n3bAXI0yyCh2FltohaS%2FhiBD6%2F9P4nj%2BmXq2ZWWPloRDQyPKPdC8WBe6UH3aKNwd2SLxThN0WqkyIWeQDTxROQ1QA%3D%3D&orderAmount=20.00&pdCode=51051000101000100001&merchantVersion=v2&merchantid=217020000648378724964&queryInterval=10000&qrcode=GCSHWPV220250530121212800110170042702347730,217020000648378724964&merchantName=Stotsenberg%20test&expiryTime=299"
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
