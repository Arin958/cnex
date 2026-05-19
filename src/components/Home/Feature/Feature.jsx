import "./Feature.css"

export default function Feature() {
    return (
             <section className="feature-section" id="feature">
        <div className="container">
          <div className="section-heading-container">
            <h6 className="primary-heading">Feature Highlights</h6>
            <h2 className="sub-heading feature-sub-heading">
              <span className="heading-span">Experience</span> the difference
            </h2>
            <p className="feature-paragraph">
              Discover a World of Female-Centric Products and Services
            </p>
          </div>

          <div className="feature-grids">
            <div className="feature-grid-item">
              <div className="feature-img">
                <img
                  src="/Vector.png"
                  alt="reason-img1"
                  className="reason-img"
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-heading">Booking Appointments</h3>
                <p className="feature-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae rem, ad iusto aliquid sed eum!
                </p>
              </div>
            </div>
            <div className="feature-grid-item">
              <div className="reason-img">
                <img
                  src="/material-symbols_order-approve-outline.png"
                  alt="reason-img1"
                  className="reason-img"
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-heading">Ordering and Pre-ordering</h3>
                <p className="feature-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae rem, ad iusto aliquid sed eum!
                </p>
              </div>
            </div>
            <div className="feature-grid-item">
              <div className="reason-img">
                <img
                  src="/material-symbols_search.png"
                  alt="reason-img1"
                  className="reason-img"
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-heading">Searching for Product</h3>
                <p className="feature-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae rem, ad iusto aliquid sed eum!
                </p>
              </div>
            </div>
            <div className="feature-grid-item">
              <div className="reason-img">
                <img
                  src="/flowbite_filter-outline.png"
                  alt="reason-img1"
                  className="reason-img"
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-heading">Filtering products</h3>
                <p className="feature-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae rem, ad iusto aliquid sed eum!
                </p>
              </div>
            </div>
            <div className="feature-grid-item">
              <div className="reason-img">
                <img
                  src="/iconamoon_delivery.png"
                  alt="reason-img1"
                  className="reason-img"
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-heading">Delivery Service</h3>
                <p className="feature-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae rem, ad iusto aliquid sed eum!
                </p>
              </div>
            </div>
            <div className="feature-grid-item">
              <div className="reason-img">
                <img
                  src="/Vector (1).png"
                  alt="reason-img1"
                  className="reason-img"
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-heading">Payments</h3>
                <p className="feature-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae rem, ad iusto aliquid sed eum!
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    )
}