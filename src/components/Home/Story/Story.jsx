import "./Story.css"
export default function Story() {
    return (
      <section className="story-section" id="story">
        <div className="section-heading-container">
          <h2 className="section-heading">
            Our <span className="heading-span">Story</span>
          </h2>
        </div>

        <div className="container story-container">
          <div className="story-img">
            <img
              src="/storyImage.jpg"
              alt="story-image"
              className="story-image"
            />
          </div>
          <div className="story-content">
            <p className="story-paragraph">
              At the beginning, it was just the two of them, working out of a
              small office space. They were determined to provide personalized
              service to their clients and build lasting relationships. They
              worked tirelessly, often working long hours and weekends to ensure
              that their clients' needs were met.
              <br />
              <br />
              Their hard work paid off, and soon their business began to grow.
              They hired additional staff members and expanded their service
              offerings to include property management and real estate
              investments
              <br />
              <br />
              Over the years, their business has continued to grow, and they
              have helped countless clients buy, sell, and manage their real
              estate investments. Today, their business is a respected name in
              the real estate industry, known for its exceptional service and
              commitment to its clients.
              <br />
              <br />
              As they look to the future, John and Jane remain dedicated to
              their clients and to providing the best possible service in the
              real estate industry. They are excited to continue to grow and
              evolve their business, and to help even more clients achieve their
              real estate goals.
              <br />
            </p>
            <div className="button-container">
              <button className="btn">Get in touch</button>
            </div>
          </div>
        </div>
      </section>
    )
}