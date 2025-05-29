import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    window.location.href = `intent://github.com#Intent;scheme=https;end`;
  }, []);

  return <div>asd</div>;
};

export default Test;
