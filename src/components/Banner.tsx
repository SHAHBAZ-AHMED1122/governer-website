import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="main">
      <div className="main-content">
        <div className="row">
          <div className="written-area">
            <h1 className="governer">Governor Sindh</h1>
            <h1 className="governer-name">Kamran Khan Tessori</h1>
            <h1 className="skills">
              Certified Cloud <br />
              Applied Generative AI <br />
              Engineer (GenEng)
            </h1>
            <div className="earning">
              <h1>Earn up to $5,000 / month</h1>
              <h2>
                Now admissions are open in <br /> Hyderabad
              </h2>
            </div>
            <div className="button-area">
              <div>
                <button> apply Now</button>
              </div>
              <div className="butt">
                <h1>562,143</h1>
                <h4>Accepted Applications</h4>
              </div>
            </div>
          </div>
          <div className="pic-area">
            <Image
              className="picture"
              src="/governer.png"
              alt="governer-pic"
              width={890}
              height={690}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
