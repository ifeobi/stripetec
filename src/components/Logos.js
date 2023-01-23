const Logos = () => {
  return (
    <section className="logo-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="logo-box">
              <img src={require("../images/logo1.jpg")} alt="" />
            </div>
          </div>

          <div className="col-lg-2">
            <div className="logo-box">
              <img src={require("../images/logo2.jpg")} alt="" />
            </div>
          </div>

          <div className="col-lg-2">
            <div className="logo-box">
              <img src={require("../images/logo3.jpg")} alt="" />
            </div>
          </div>

          <div className="col-lg-2">
            <div className="logo-box">
              <img src={require("../images/logo4.jpg")} alt="" />
            </div>
          </div>

          <div className="col-lg-2">
            <div className="logo-box">
              <img src={require("../images/logo5.jpg")} alt="" />
            </div>
          </div>

          <div className="col-lg-2">
            <div className="logo-box">
              <img src={require("../images/logo6.jpg")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
