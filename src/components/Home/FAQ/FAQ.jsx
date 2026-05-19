import { useState } from "react";
import "./Faq.css";
import { faqData } from "../../../data/faq/faq";
import { X } from "lucide-react";

export default function FAQ() {
  // State to track which FAQ is open
  const [openFaqId, setOpenFaqId] = useState(null);

  // Toggle function
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

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
            {faqData.map((faq) => (
              <div className="faq-grid" key={faq.id}>
                <div
                  className={`faq-question ${openFaqId === faq.id ? "active" : ""}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <p>{faq.question}</p>
                  <div className="cross-icons">
                    {openFaqId === faq.id ? (
                      <X style={{ transform: "rotate(45deg)" }} />
                    ) : (
                      <X />
                    )}
                  </div>
                </div>
                <div
                  className={`faq-answer ${openFaqId === faq.id ? "active" : ""}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          <div className="faq-img">
            <img src="/faq-img.jpg" alt="faq-img" className="img-faq" />
          </div>
        </div>
      </div>
    </section>
  );
}
