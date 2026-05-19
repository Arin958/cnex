import "./Form.css"

export default function Form() {
    return (
        
      <section className="form-section" id="form">
        <div className="container">
          <div className="section-heading-container">
            <h6 className="primary-heading">Reach out to us</h6>
            <h2 className="sub-heading">
              <span className="heading-span">Connect</span> with us
            </h2>
            <p className="heading-para">
              Fill out the form below, and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="form-container">
            <div className="form-grid-container">
              <form className="form-grid" action="/submit" method="post">
                <div className="form-group">
                  <label className="label" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Jitendra"
                  />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="email@sample.com"
                  />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="form-input"
                    placeholder="+977-9******"
                  />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="form-input"
                    placeholder="Service Name"
                  />
                </div>
                <div className="form-group form-textarea">
                  <label className="label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="form-input"
                    placeholder="Kindly explain your service you are interested in"
                  ></textarea>
                </div>
                <div className="button-container">
                  <button className="btn" type="submit">
                    Get in touch
                    <i
                      className="fa-solid fa-arrow-right"
                    ></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}