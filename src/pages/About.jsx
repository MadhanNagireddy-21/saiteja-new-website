import {
  ArrowRight,
  Award,
  Briefcase,
  Check,
  Cloud,
  Code2,
  Eye,
  GraduationCap,
  Lightbulb,
  MapPin,
  Smartphone,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import profileImage from "../assets/services/About-us-image.png";

import "./About.css";

/* ---------- content lives here, so it is easy to edit ---------- */

const highlights = [
  "Quality work and reliable delivery",
  "Clear, transparent communication",
  "Long-term relationships with our customers",
];

const values = [
  "Innovation and continuous improvement",
  "Customer-focused approach",
  "Quality and excellence",
  "Integrity and transparency",
  "Collaboration and teamwork",
];

const expertise = [
  { icon: Code2, label: "Software & Web Development", url: "/services/custom-software-development" },
  { icon: Smartphone, label: "Mobile Applications", url: "/services/mobile-application-development" },
  { icon: Cloud, label: "Cloud & DevOps", url: "/services/cloud-devops-solutions" },
  { icon: Lightbulb, label: "IT Consulting", url: "/services/it-consulting" },
  { icon: Briefcase, label: "HR & Staffing", url: "/services/hrms-solutions" },
  { icon: GraduationCap, label: "Training & Development", url: "/services/custom-software-development" },
];

const journey = [
  {
    title: "The Beginning",
    text: "Started with a vision to bring people, technology and business opportunities closer together.",
  },
  {
    title: "Growing Capabilities",
    text: "Expanded across staffing, technology, training and digital solutions.",
  },
  {
    title: "Building Partnerships",
    text: "Building relationships with organizations and professionals to create meaningful opportunities.",
  },
  {
    title: "Looking Ahead",
    text: "Creating practical solutions that help businesses and people move forward.",
  },
];

function About() {
  return (
    <main className="ab-page">
      {/* 1. HERO */}
      <section className="ab-hero">
        <div className="ab-container">
          <span className="ab-eyebrow">About Us</span>

          <h1>
            Empowering Businesses <span>Through Technology & Innovation.</span>
          </h1>

          <p>
            At SaiTeja Infotech Private Limited, we create impactful digital solutions
            by combining technology, creativity, and expertise. Our mission is to help
            businesses transform challenges into opportunities through reliable IT
            services and innovative solutions.
          </p>

          <div className="ab-hero-actions">
            <Button to="/contact">Contact Us</Button>
            <Link className="ab-ghost-button" to="/services">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="ab-section">
        <div className="ab-container ab-story-grid">
          <div className="ab-story-text">
            <span className="ab-eyebrow">Who We Are</span>

            <h2 className="ab-title">
              Driving Innovation Through <span>technology.</span>
            </h2>

            <p>
              SaiTeja Infotech Private Limited delivers innovative IT solutions
              that help businesses grow, adapt, and succeed in the digital era.
              We combine technology, creativity, and expertise to build reliable
              solutions that create real business value.
            </p>

            <p>
              Our team focuses on software development, web solutions, cloud technologies,
              and digital transformation services, helping organizations turn ideas into
              impactful digital experiences.
            </p>

            <div className="ab-checks">
              {highlights.map((item) => (
                <div key={item}>
                  <Check size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <figure className="ab-story-image">
            <img src={profileImage} alt="Saiteja Infotech Private Limited" />
          </figure>
        </div>
      </section>

      {/* 3. MISSION / VISION / VALUES */}
      <section className="ab-section" style={{ paddingTop: 0 }}>
        <div className="ab-container">
          <div className="ab-center">
            <span className="ab-eyebrow">What Drives Us</span>
            <h2 className="ab-title">
              Our mission, vision <span>and values.</span>
            </h2>
          </div>

          <div className="ab-cards">
            <article className="ab-card">
              <div className="ab-card-icon">
                <Target size={24} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver innovative technology solutions that help businesses
                improve efficiency, accelerate growth, and achieve their digital
                transformation goals through reliable IT services.
              </p>
            </article>

            <article className="ab-card">
              <div className="ab-card-icon">
                <Eye size={24} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become a trusted global technology partner by creating
                scalable, secure, and future-ready solutions that empower
                businesses in the digital era.
              </p>
            </article>

            <article className="ab-card">
              <div className="ab-card-icon">
                <Award size={24} />
              </div>
              <h3>Our Values</h3>
              <ul>
                {values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="ab-section ab-band">
        <div className="ab-container">
          <div className="ab-center" style={{ marginBottom: 36 }}>
            <span className="ab-eyebrow">What We Do</span>
            <h2 className="ab-title">
              One team, <span>many capabilities.</span>
            </h2>
            <p className="ab-lead">
              From building software to finding the right talent, we support
              organizations at every step.
            </p>
          </div>

          <div className="ab-chips">
            {expertise.map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}

                rel="noopener noreferrer"
                className="ab-chip"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="ab-center-link">
            <Link className="text-link" to="/services">
              Explore all services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. OUR JOURNEY */}
      <section className="ab-section">
        <div className="ab-container">
          <div className="ab-center">
            <span className="ab-eyebrow">Our Journey</span>
            <h2 className="ab-title">
              Growing with <span>purpose.</span>
            </h2>
          </div>

          <div className="ab-steps">
            {journey.map((step, index) => (
              <div className="ab-step" key={step.title}>
                <div className="ab-step-number">0{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="ab-cta">
        <div>
          <h2>
            Have a vision? <span>Let's move it forward.</span>
          </h2>
          <p>
            Explore how Saiteja Infotech Private Limited can support your
            organization's next opportunity.
          </p>
        </div>

        <Button to="/contact">Start a Conversation</Button>
      </section>
    </main>
  );
}

export default About;