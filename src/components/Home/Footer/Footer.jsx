import "./Footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="logo">
            <img
              src="./image/footer-logo.png"
              alt="footer-logo"
              className="footer-logo"
            />
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contacts</h4>

          <div className="footer-section-container">
            <div className="footer-list-container">
              <p className="footer-list-heading">Head Office</p>
              <p className="footer-lists">Sankhamul, Baneshwor</p>
              <p className="footer-lists">+977 98*******</p>
              <p className="footer-lists">cnex@gmail.com</p>
            </div>
            <div className="social-links">
              <a
                href="www.facebook.com"
                className="social-link"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="www.twitter.com"
                className="social-link"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="www.instagram.com"
                className="social-link"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>

          <div className="footer-section-container">
            <div className="footer-list-container">
              <p className="footer-list-heading">Order and Pre-order</p>
              <p className="footer-lists">Beauty Service Appointed Book</p>
              <p className="footer-lists">+Order and Pre-order</p>
              <p className="footer-lists">Order and Pre-order</p>
            </div>
          </div>
        </div>

        <div className="download-app footer-section">
          <h4 className="footer-heading">Download Our App</h4>
          <div className="app-download">
            <a href="/google">
              <img
                width="196px"
                src="./image/appdownload-img (1).png"
                alt="apple store"
                className="app-download-img"
              />
            </a>
            <a href="/google">
              <img
                width="196px"
                src="./image/googledownload.png"
                alt="google play"
                className="app-download-img"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="copy-right container">
        <div className="footer-line"></div>
        <p className="copy-right-para">&copy; 2023 CNEX. All rights reserved.</p>
      </div>
    </footer>
  );
}
