import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";

import services from "../data/services";

function Services() {
  const navigate = useNavigate();

  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="section-label">OUR SERVICES</div>

        <h1>
          Solutions that drive
          <span> real business growth.</span>
        </h1>

        <p>
          From custom software and web applications to cloud, DevOps and digital
          transformation — we deliver technology that helps your business
          operate smarter and scale faster.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services-list-section">
        <div className="services-intro">
          <SectionHeading
            label="WHAT WE OFFER"
            title="Built for performance."
            highlight=" Designed for growth."
          />
        </div>

        <div className="services-detail-grid">
          {services.map(
            ({ image, number, title, description, highlights, link }) => (
              <article
                className="service-detail-card"
                key={title}
                onClick={() => navigate(link)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(link);
                  }
                }}
              >
                <div className="service-detail-image">
                  <img src={image} alt={title} />
                  <span className="service-detail-number">{number}</span>
                </div>

                <div className="service-detail-content">
                  <h3>{title}</h3>

                  <p>{description}</p>

                  <ul className="service-feature-list">
                    {highlights.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={17} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-learn-more">
                    Learn more
                    <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      {/* CTA - at the end */}
      <section className="services-cta">
        <div>
          <div className="section-label">NEED A SOLUTION?</div>

          <h2>
            Ready to get
            <span> started?</span>
          </h2>

          <p>
            Share your requirements with us and let’s discuss the right
            technology approach for your business.
          </p>
        </div>

        <Button to="/contact">Enquire Now</Button>
      </section>
    </main>
  );
}

export default Services;
