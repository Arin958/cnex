import "./Cta.css"
export default function CTA() {
    return (
         <section className="cta-section" id="cta">
        <div className="container">
          <div className="cta-container">
            <h2 className="sub-heading cta-heading">
              Join the <span className="heading-span">CNEX Community</span>
              <br />Today!
            </h2>
            <p className="cta-para">
              Download CNEX now to explore a world of female-centric products
              and <br />
              services, and empower yourself with every purchase and booking
            </p>
            <div className="button-container">
              <a href="/google">
                <img
                  width="200px"
                  src="./image/appdownload-img (1).png"
                  alt="apple store"
                  className="app-download-img"
                />
              </a>
              <a href="/google">
                <img
                  width="200px"
                  src="./image/googledownload.png"
                  alt="google play"
                  className="app-download-img"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}