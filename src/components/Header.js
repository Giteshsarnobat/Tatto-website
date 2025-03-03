const Header = ({ setIsFormOpen }) => {
  return (
    <>
      <div className="body-container">
        <div className="body-heading container">
          <p className="body-heading1">We help you get a tatto</p>
          <p className="body-heading2">
            that speaks <span className="body-header-span">your story</span>
          </p>
        </div>
        <div className="body-para-text container">
          <p className="first-para">
            When you get a tattoo that speaks your story,
          </p>
          <p className="second-para">
            your personality, yourvoice, and your beliefs,
          </p>
          <p className="third-para">
            {" "}
            <span className="span-text-para">
              that deep sense of satisfaction{" "}
            </span>
            comes naturally.
          </p>
        </div>
        <div className="btn-div container">
          <button className="btn" onClick={() => setIsFormOpen(true)}>BOOK A CONSULTATIONS</button>
        </div>
      </div>
      <div className="heading-section">
        <div className="heading-div container">
          <p className="section-para1">
            At Zenspace, we create tattoos that are as unique as you are.
            Whether it’s a bold statement or a subtle mark, we design with{" "}
            <span className="sec-para1-span">
              every placement preference, every skin tone, and every story in
              mind.
            </span>
          </p>
          <p className="section-para2">
            With a wide variety of tattoo styles to choose from, our Iron Bees,
            the OG creators of stories, ensure each piece is crafted to suit
            your tattoo needs, leaving you with something that doesn’t just look
            good but <span className="sec-para1-span">feels</span> good too.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
