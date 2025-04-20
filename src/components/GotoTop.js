import { useEffect, useState } from "react";

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <i className="fa-solid fa-arrow-up" id="arrow"></i>
        </div>
      )}
    </>
  );
};

export default GotoTop;
