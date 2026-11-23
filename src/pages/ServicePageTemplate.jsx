import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SERVICE_LINKS = [
  ["/services/custom-software-development", "Custom Software Development"],
  ["/services/website-development", "Website Development"],
  [
    "/services/mobile-application-development",
    "Mobile Application Development",
  ],
  ["/services/web-application-development", "Web Application Development"],
  ["/services/it-consulting", "IT Consulting"],
  ["/services/digital-transformation", "Digital Transformation"],
  ["/services/hrms-solutions", "HRMS Solutions"],
  ["/services/cloud-devops-solutions", "Cloud and DevOps Solutions"],
];

export default function ServicePageTemplate({
  title,
  subtitle,
  image,
  overviewTitle,
  overview,
  offerings = [],
  benefits = [],
}) {
  const location = useLocation();
  const others = SERVICE_LINKS.filter(
    ([path, name]) =>
      path !== location.pathname && name.toLowerCase() !== title?.toLowerCase(),
  ).slice(0, 3);

  const overviewParagraphs = Array.isArray(overview) ? overview : [overview];

  return (
    <main className="service-detail-page">
      {/* HERO */}
      <section className="hx-hero ab-hero">
        <div className="ab-hero-inner">
          <nav className="ab-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services">Services</Link>
            <ChevronRight size={14} />
            <span aria-current="page">{title}</span>
          </nav>
          <div className="hx-eyebrow ab-eyebrow">{title}</div>
          <h1 className="hx-title sd-hero-title">{title}</h1>
          <p className="hx-lead">{subtitle}</p>
        </div>
      </section>

      {/* OVERVIEW + SIDE CARD */}
      <section className="sd-overview">
        <div className="sd-overview-inner">
          <div>
            <div className="wx-eyebrow">OVERVIEW</div>
            <h2 className="sec-title">
              {overviewTitle || `${title} at Saiteja Infotech`}
            </h2>
            {overviewParagraphs.map((p, idx) => (
              <p className="ab-copy" key={idx}>
                {p}
              </p>
            ))}

            <div className="sd-benefits">
              <h3>Benefits you can expect</h3>
              <ul>
                {benefits.map((b) => (
                  <li key={b}>
                    <CheckCircle2 size={18} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="sd-aside">
            <img src={image} alt={title} />
            <div className="sd-aside-body">
              <p>
                Want to discuss a requirement under {title}? Our team will
                respond with a scoped recommendation.
              </p>
              <Link className="wx-link" to="/contact">
                Start a conversation <ArrowRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="sd-included">
        <div className="sd-included-inner">
          <div className="wx-eyebrow">WHAT WE OFFER</div>
          <h2 className="sec-title">Our {title} Services.</h2>
          <p className="sec-lead sd-lead">
            The specific capabilities typically delivered in this practice.
            Final scope is agreed in your proposal.
          </p>
          <div className="sd-cards">
            {offerings.map((item, i) => (
              <article className="sd-card" key={item.title}>
                <span className="px-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="sd-other">
        <div className="sd-other-inner">
          <h2>Other services</h2>
          <div className="sd-other-row">
            {others.map(([path, name]) => (
              <Link to={path} key={path}>
                {name} <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bx-section">
        <div className="bx-card">
          <div>
            <h2>Ready to talk about {title}?</h2>
            <p>
              Send us the requirement and we will respond with a written scope,
              timeline and indicative cost.
            </p>
          </div>
          <div className="bx-actions">
            <Link className="hx-btn hx-btn-primary" to="/quotation">
              Request a Quotation <ArrowRight size={18} />
            </Link>
            <Link className="hx-btn hx-btn-ghost" to="/contact">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
