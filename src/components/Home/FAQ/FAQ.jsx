import "./Faq.css"

export default function FAQ() {
    return (
        <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-heading-container faq-heading">
            <h6 className="primary-heading">FAQ</h6>
            <h2 className="sub-heading">
              Frequently <span className="heading-span">Asked Questions</span>
            </h2>
            <p className="heading-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et <br />
              velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="faq-container">
            <div className="faq-list">
              <div className="faq-grid">
                <div className="faq-question">
                  <p>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="cross-icons">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div className="faq-answer">
                  Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  className aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </div>
              </div>
              <div className="faq-grid">
                <div className="faq-question">
                  <p>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="cross-icons">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="faq-grid">
                <div className="faq-question">
                  <p>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="cross-icons">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="faq-grid">
                <div className="faq-question">
                  <p>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="cross-icons">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-img">
              <img src="/faq-img.jpg" alt="faq-img" className="img-faq" />
            </div>
          </div>
        </div>
      </section>
    )
}