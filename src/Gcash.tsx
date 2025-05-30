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
            "https://uat.m.gcash.com/gcash-cashier-web/1.2.1/index.html#/confirm?bizNo=20250530121212800110170534102346868&timestamp=1748587316249&sign=HOHpt%2F8i7432g5wXXGg8cFWNdXlyovgWKRIRFtvJe79haXniANusYi9i9h%2BTA57R4GRCeAvtgpHh15EhuLVANtOhPxVClGP%2F3wWXHL%2FRgUXLpPl5SYZq2PXJ0HOqPm%2Fkkbmkxq7%2Bs8a2cuxlNOwq4FW4RyboJIzpVsO7U6O0wg9%2BprFpkfxThf%2BkOVDCFcrPeOIojX3L1KcBex9fpicglc2PrOXU2eGTiJFDzQzcYSFWjnvcOPuwauhk66bDDtzeg%2FvYDKzPa7zfkfsE%2FB%2BWOv5Zoq0w8nLivqjmKV2liAZlYvwwRuBDO9e51wEm1hSNZuCIJqspwqLSQXB5sT%2F9nA%3D%3D&orderAmount=20.00&pdCode=51051000101000100001&merchantVersion=v2&merchantid=217020000648378724964&queryInterval=10000&qrcode=GCSHWPV220250530121212800110170534102346868,217020000648378724964&merchantName=Stotsenberg%20test&expiryTime=299"
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
