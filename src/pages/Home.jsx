import {
  ArrowRight,
  Sparkles,
  Code2,
  Server,
  Database,
  GitBranch,
  CheckCircle2,
  Briefcase,
  Users,
  Rocket,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import companyLogo from "../assets/logo.png";

import SectionHeading from "../components/SectionHeading";
import services from "../data/services";
import careersImage from "../assets/services/recruitment.jpg";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    title: "Business Process Automation Suite",
    tag: "Enterprise Workflow",
    description:
      "An integrated workflow automation platform that digitizes approvals, task tracking, and daily operational reporting to boost team productivity.",
    metrics: [
      { label: "Efficiency Boost", value: "+65%" },
      { label: "Manual Errors", value: "-90%" },
      { label: "Active Workflows", value: "24/7" },
    ],
    features: [
      "Automated multi-level approvals",
      "Real-time task & status tracking",
      "Custom daily & monthly reports",
      "Seamless department integration",
    ],
  },
  {
    title: "Custom ERP & CRM Portal",
    tag: "Management System",
    description:
      "A centralized cloud platform to manage customer leads, billing, inventory, and business analytics with role-based security.",
    metrics: [
      { label: "Lead Visibility", value: "100%" },
      { label: "Data Security", value: "Role-Based" },
      { label: "Live Sync", value: "Real-Time" },
    ],
    features: [
      "End-to-end customer lead tracking",
      "Automated invoicing & inventory sync",
      "Granular role-based access control",
      "Executive analytics dashboards",
    ],
  },
  {
    title: "Omnichannel Web & Mobile Platforms",
    tag: "Digital Commerce & Apps",
    description:
      "High-speed web portals, RESTful APIs, and responsive frontends built with React.js and Bootstrap for seamless customer engagement.",
    metrics: [
      { label: "Platforms", value: "Web & App" },
      { label: "API Architecture", value: "RESTful" },
      { label: "Performance", value: "Fast Load" },
    ],
    features: [
      "Responsive web & customer portals",
      "Android & iOS companion apps",
      "Secure payment & order tracking",
      "REST API & cloud backend sync",
    ],
  },
  {
    title: "Cloud & DevOps Solutions",
    tag: "Cloud Infrastructure & CI/CD",
    description:
      "We design, automate, and manage reliable cloud infrastructure that helps businesses ship faster, scale smoothly, and maintain high availability across enterprise platforms.",
    metrics: [
      { label: "Cloud Hosting", value: "AWS" },
      { label: "Automation", value: "CI/CD" },
      { label: "Availability", value: "99.9%" },
    ],
    features: [
      "AWS Hosting (EC2, S3, CloudFront)",
      "Docker containers & Nginx routing",
      "Git, GitHub & GitHub Actions CI/CD",
      "Spring Boot, Node.js & TiDB Cloud",
    ],
  },
];

const iconProps = { size: 22, color: "#fb923c" };

const techStack = [
  { name: "Java", role: "Backend Language", icon: <Server {...iconProps} /> },
  { name: "Spring Boot", role: "Enterprise Framework", icon: <Server {...iconProps} /> },
  { name: "Node.js", role: "Backend Runtime", icon: <Server {...iconProps} /> },
  { name: "RESTful APIs", role: "API Development", icon: <Server {...iconProps} /> },
  { name: "React.js", role: "Frontend Library", icon: <Code2 {...iconProps} /> },
  { name: "Bootstrap", role: "Responsive UI", icon: <Code2 {...iconProps} /> },
  { name: "JavaScript", role: "Core Scripting", icon: <Code2 {...iconProps} /> },
  { name: "HTML5", role: "Web Structure", icon: <Code2 {...iconProps} /> },
  { name: "CSS3", role: "Modern Styling", icon: <Code2 {...iconProps} /> },
  { name: "MySQL", role: "Relational Database", icon: <Database {...iconProps} /> },
  { name: "TiDB Cloud", role: "Distributed Database", icon: <Database {...iconProps} /> },
  { name: "AWS Cloud", role: "Cloud Infrastructure", icon: <Server {...iconProps} /> },
  { name: "Amazon EC2", role: "Compute Instances", icon: <Server {...iconProps} /> },
  { name: "Amazon S3", role: "Object Storage", icon: <Database {...iconProps} /> },
  { name: "Amazon CloudFront", role: "Content Delivery (CDN)", icon: <Server {...iconProps} /> },
  { name: "Docker", role: "Containerization", icon: <GitBranch {...iconProps} /> },
  { name: "Nginx", role: "Reverse Proxy & Routing", icon: <Server {...iconProps} /> },
  { name: "Git & GitHub", role: "Source Control", icon: <GitBranch {...iconProps} /> },
  { name: "GitHub Actions", role: "Release Automation", icon: <GitBranch {...iconProps} /> },
  { name: "DevOps CI/CD", role: "Automated Pipelines", icon: <GitBranch {...iconProps} /> },
];

const whyChooseUs = [
  {
    icon: "👥",
    title: "Customer-Focused Approach",
    text: "We understand your requirements before recommending solutions—ensuring every product aligns closely with your business goals, workflows, and long-term vision.",
  },
  {
    icon: "⚙️",
    title: "Customized Solutions",
    text: "We develop solutions aligned with your business objectives—building scalable, flexible, and tailored digital applications designed to solve your specific operational challenges.",
  },
  {
    icon: "🏅",
    title: "Quality Commitment",
    text: "We emphasize functionality, usability, and reliability—delivering secure, well-tested, and user-friendly software that performs seamlessly under real-world business demands.",
  },
  {
    icon: "</>",
    title: "Technology Expertise",
    text: "We work with modern technologies and development practices—leveraging proven frameworks, clean architecture, and continuous innovation to build future-ready platforms.",
  },
  {
    icon: "💬",
    title: "Transparent Communication",
    text: "We maintain clear communication throughout the project—keeping you informed at every milestone with regular progress updates, honest timelines, and collaborative feedback.",
  },
  {
    icon: "🎧",
    title: "Continuous Support",
    text: "We aim to build long-term relationships through ongoing technical support—providing proactive maintenance, timely upgrades, and dedicated post-launch assistance whenever you need it.",
  },
];

const industries = [
  {
    title: "SaaS & Technology Startups",
    text: "Full-cycle MVP development, cloud-native web apps, and scalable API architectures to help tech startups launch and scale faster.",
  },
  {
    title: "FinTech & Financial Services",
    text: "High-security payment integrations, automated billing systems, and compliance-ready financial management software.",
  },
  {
    title: "HealthTech & Diagnostics",
    text: "HIPAA-aligned patient portals, hospital management ERP, and telemedicine mobile apps built for seamless clinical workflows.",
  },
  {
    title: "EdTech & Enterprise Training",
    text: "Custom Learning Management Systems (LMS), live assessment portals, and campus automation platforms for educational institutions.",
  },
  {
    title: "E-Commerce & Retail Tech",
    text: "Custom multi-vendor marketplaces, real-time inventory sync, and omnichannel mobile commerce apps for high-volume retail.",
  },
  {
    title: "Enterprise Operations & Logistics",
    text: "Business process automation, CRM/ERP integrations, and real-time fleet tracking software to streamline daily enterprise operations.",
  },
];

const caseStudies = [
  {
    badge: "Custom Software • ERP",
    title: "Enterprise Resource & Billing Automation",
    text: "Built a centralized ERP and automated invoicing platform for a multi-branch enterprise, cutting manual reporting time by 60% and eliminating billing errors.",
    stack: "React • Java Spring Boot • MySQL",
  },
  {
    badge: "Web Application • SaaS",
    title: "Cloud Customer Portal & Workflow Suite",
    text: "Engineered a high-speed, role-based web portal with real-time analytics and automated notifications, improving client onboarding speed by 3x.",
    stack: "React • REST APIs • PostgreSQL",
  },
  {
    badge: "Mobile App • Android & iOS",
    title: "Field Workforce & Operations Mobile App",
    text: "Developed an intuitive cross-platform mobile app for real-time task assignment, live status tracking, and instant field reporting across teams.",
    stack: "React Native • Spring Boot • Cloud",
  },
];

const companyFacts = [
  { value: "2+", label: "Years of experience", note: "Delivering IT solutions since our start in Tirupati." },
  { value: "20+", label: "Projects delivered", note: "ERP, web portals, mobile apps and automation systems." },
  { value: "10+", label: "Happy clients", note: "Long-term partnerships built on trust and support." },
  { value: String(services.length), label: "Core services", note: "From custom software to IT consulting and cloud." },
  { value: "AWS", label: "Cloud-ready delivery", note: "EC2, S3, CloudFront with Docker and CI/CD pipelines." },
  { value: "Secure", label: "Data-first approach", note: "Role-based access, secure APIs and reliable databases." },
];

const careerPerks = [
  { icon: <Rocket size={20} color="#ea580c" />, title: "Real projects", text: "Work on live products from day one." },
  { icon: <GraduationCap size={20} color="#ea580c" />, title: "Learn & grow", text: "Mentorship and hands-on skill building." },
  { icon: <Users size={20} color="#ea580c" />, title: "Supportive team", text: "Open, collaborative and respectful culture." },
  { icon: <Code2 size={20} color="#ea580c" />, title: "Modern tech", text: "React, Spring Boot, AWS, Docker & more." },
];

const careerRoles = [
  "Full Stack Developer",
  "React Developer",
  "Java / Spring Boot Developer",
  "DevOps Engineer",
  "Software Intern",
];

const testimonials = [
  {
    name: "Mohan Kumar",
    role: "Team Lead",
    initials: "MK",
    review:
      "Saiteja Infotech provides excellent IT services with a professional and supportive team. Their solutions are reliable, innovative, and delivered with great attention to quality. I truly appreciate their commitment and customer service. Highly recommended!",
  },
  {
    name: "Preethi Reddy",
    role: "Managing Director",
    initials: "PR",
    review:
      "We had a great experience working with Saiteja Infotech. Their team understood our business requirements and delivered a reliable software solution. Their technical support and dedication were impressive.",
  },
  {
    name: "Manoj Kumar",
    role: "Business Owner",
    initials: "MK",
    review:
      "Saiteja Infotech helped us improve our business operations through their technology solutions. Their support and innovative approach made our work easier and more efficient. We appreciate their commitment and professionalism.",
  },
  {
    name: "Client Name",
    role: "Designation",
    initials: "CN",
    review:
      "Their web development support was exceptional. The custom workflow solutions they built streamlined our daily tasks and delivered great results on time.",
  },
];

/* ------------------------------------------------------------------ */
/*  SHARED STYLES                                                      */
/* ------------------------------------------------------------------ */

const styles = {
  whyCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
    border: "1px solid #eaeaea",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  whyIcon: {
    color: "var(--primary-color, #ff7a00)",
    fontSize: "1.75rem",
    lineHeight: "1",
  },
  whyTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#111827",
    margin: 0,
  },
  whyText: {
    color: "#4b5563",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    margin: 0,
  },
  industryCard: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "28px 24px",
    boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
  },
  caseCard: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "32px 24px",
    boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  highlightCard: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)",
  },
};

/* ------------------------------------------------------------------ */
/*  SOLUTIONS SHOWCASE                                                 */
/* ------------------------------------------------------------------ */

function SolutionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = solutions[activeIndex];

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));

  const handleNext = () =>
    setActiveIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));

  return (
    <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
      <SectionHeading
        label="OUR SOLUTIONS"
        title="Scalable products &"
        highlight=" digital platforms."
        description="Custom-built software platforms and digital systems engineered to streamline your daily business operations."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "36px",
          marginTop: "48px",
          alignItems: "stretch",
        }}
      >
        {/* LEFT TABS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center" }}>
          {solutions.map((item, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  width: "100%",
                  textAlign: "left",
                  padding: "20px 22px",
                  borderRadius: "16px",
                  background: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.75)",
                  border: isSelected ? "1.5px solid #fdba74" : "1px solid #e2e8f0",
                  borderLeft: isSelected ? "6px solid #ea580c" : "6px solid transparent",
                  boxShadow: isSelected
                    ? "0 14px 28px -8px rgba(234, 88, 12, 0.16)"
                    : "0 2px 6px rgba(15, 23, 42, 0.03)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: isSelected ? "#ea580c" : "#64748b",
                      marginBottom: "5px",
                    }}
                  >
                    {item.tag}
                  </div>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: "800",
                      color: isSelected ? "#0f172a" : "#334155",
                      lineHeight: "1.3",
                    }}
                  >
                    {item.title}
                  </div>
                </div>

                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: isSelected ? "#ea580c" : "#f1f5f9",
                    color: isSelected ? "#ffffff" : "#64748b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: isSelected ? "translateX(4px)" : "translateX(0)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT PREVIEW CARD */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "20px",
            padding: "36px",
            boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                marginBottom: "16px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#fff7ed",
                  color: "#ea580c",
                  border: "1px solid #ffedd5",
                  fontSize: "12px",
                  fontWeight: "700",
                  padding: "6px 14px",
                  borderRadius: "999px",
                }}
              >
                {active.tag} Overview
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#64748b", marginRight: "4px" }}>
                  {activeIndex + 1} / {solutions.length}
                </span>

                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous solution"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid #e2e8f0",
                    background: "#ffffff",
                    color: "#0f172a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <ArrowRight size={17} style={{ transform: "rotate(180deg)" }} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next solution"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "none",
                    background: "#ea580c",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(234, 88, 12, 0.25)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            <h3
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#0f172a",
                marginBottom: "22px",
                lineHeight: "1.3",
              }}
            >
              {active.title}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {active.metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  style={{
                    background: i === 0 ? "#ea580c" : "#f8fafc",
                    color: i === 0 ? "#ffffff" : "#0f172a",
                    border: i === 0 ? "none" : "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "14px 16px",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "800" }}>{metric.value}</div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      opacity: i === 0 ? 0.92 : 0.7,
                      marginTop: "3px",
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                color: "#475569",
                fontSize: "15px",
                lineHeight: "1.7",
                paddingBottom: "22px",
                marginBottom: "22px",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              {active.description}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "14px",
            }}
          >
            {active.features.map((feat) => (
              <div
                key={feat}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#1e293b",
                }}
              >
                <CheckCircle2 size={18} color="#ea580c" style={{ flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HOME                                                               */
/* ------------------------------------------------------------------ */

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={15} />
            Saiteja Infotech Private Limited • Tirupati
          </div>

          <h1>
            Empowering Businesses
            <span>Through Technology and Innovation.</span>
          </h1>

          <p>
            <strong>Saiteja Infotech Private Limited</strong> is a premier IT services and technology solutions company based in{" "}
            <strong>Tirupati, Andhra Pradesh, India</strong>. We partner with businesses to transform innovative ideas into practical, high-impact digital solutions through{" "}
            <strong>Custom Software Development</strong>,{" "}
            <strong>Web &amp; Mobile Applications</strong>,{" "}
            <strong>IT Consulting</strong>, and{" "}
            <strong>Business Process Automation</strong>.
          </p>

          <p style={{ marginTop: "14px" }}>
            Our core focus is delivering{" "}
            <strong>reliable, scalable, secure, and user-friendly</strong> solutions tailored to your exact business requirements—helping organizations boost efficiency, streamline daily operations, and achieve sustainable long-term growth.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#services">
              Explore Services <ArrowRight size={18} />
            </a>

            <Link className="secondary-button" to="/contact">
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-logo-container">
            <img src={companyLogo} alt="" className="hero-company-logo" />
          </div>
        </div>
      </section>

      {/* ABOUT US - SHORT INTRO */}
      <section id="about" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <span style={{ color: "#ea580c", fontWeight: "700", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>
              About Us
            </span>
            <h2 style={{ color: "#0f172a", fontSize: "36px", fontWeight: "800", marginTop: "10px", marginBottom: "20px", lineHeight: "1.2" }}>
              <span style={{ color: "#1e1511" }}>Innovation Driven by Purpose.</span>
            </h2>
            <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.75", marginBottom: "24px" }}>
              <strong style={{ color: "#0f172a" }}>Saiteja Infotech Private Limited</strong> is an IT services and technology solutions company based in{" "}
              <strong style={{ color: "#0f172a" }}>Tirupati, Andhra Pradesh, India</strong>. We combine technical expertise, innovation, and a customer-focused approach to deliver reliable, scalable, and secure digital solutions aligned with your business goals.
            </p>

            <Link to="/about" className="primary-button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div style={styles.highlightCard}>
              <h3 style={{ color: "#ea580c", fontSize: "22px", fontWeight: "800" }}>Tirupati, AP</h3>
              <p style={{ color: "#475569", fontSize: "14px", marginTop: "6px" }}>Headquartered in India</p>
            </div>
            <div style={styles.highlightCard}>
              <h3 style={{ color: "#ea580c", fontSize: "22px", fontWeight: "800" }}>Tailored IT</h3>
              <p style={{ color: "#475569", fontSize: "14px", marginTop: "6px" }}>Custom Software &amp; Automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES - ALL SERVICES */}
      <section className="services-section" id="services">
        <SectionHeading
          label="OUR SERVICES"
          title="Explore our"
          highlight=" core services."
          description="We transform your business ideas into practical, reliable, and scalable digital solutions."
        />

        <div className="services-grid">
          {services.map(({ image, number, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-image">
                <img src={image} alt={title} />
                <span className="service-image-number">{number}</span>
              </div>

              <div className="service-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to="/services">
                  Explore service <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES - INFINITE MARQUEE */}
      <section
        id="technologies"
        style={{
          padding: "84px 0",
          background: "#0f172a",
          color: "#ffffff",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <style>{`
          @keyframes saitejaTechMarquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .saiteja-marquee-wrapper {
            display: flex;
            width: max-content;
            animation: saitejaTechMarquee 42s linear infinite;
          }

          .saiteja-marquee-wrapper:hover {
            animation-play-state: paused;
          }

          .saiteja-tech-pill {
            display: flex;
            align-items: center;
            gap: 14px;
            background: rgba(30, 41, 59, 0.85);
            border: 1px solid rgba(251, 146, 60, 0.3);
            border-radius: 16px;
            padding: 16px 26px;
            margin-right: 20px;
            min-width: 225px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
            transition: transform 0.2s ease, border-color 0.2s ease;
          }

          .saiteja-tech-pill:hover {
            transform: translateY(-4px);
            border-color: #ea580c;
          }
        `}</style>

        <div style={{ maxWidth: "1200px", margin: "0 auto 48px", padding: "0 24px", textAlign: "center" }}>
          <span
            style={{
              color: "#fb923c",
              fontWeight: "700",
              fontSize: "13px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px",
            }}
          >
            OUR TECH STACK
          </span>
          <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 12px" }}>
            Technologies &amp; <span style={{ color: "#ea580c" }}>Tools We Use</span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "15px", maxWidth: "600px", margin: "0 auto" }}>
            Powering scalable enterprise applications with modern full-stack frameworks, cloud infrastructure, and automated delivery pipelines.
          </p>
        </div>

        <div style={{ position: "relative", width: "100%" }}>
          {["left", "right"].map((side) => (
            <div
              key={side}
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                [side]: 0,
                width: "90px",
                background: `linear-gradient(${side === "left" ? "90deg" : "270deg"}, #0f172a 0%, rgba(15,23,42,0) 100%)`,
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
          ))}

          <div className="saiteja-marquee-wrapper">
            {[0, 1].map((loopIndex) => (
              <div key={loopIndex} style={{ display: "flex", alignItems: "center" }}>
                {techStack.map((tool) => (
                  <div className="saiteja-tech-pill" key={`${loopIndex}-${tool.name}`}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: "rgba(234, 88, 12, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {tool.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: "800", fontSize: "16px", color: "#f8fafc" }}>{tool.name}</div>
                      <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "2px" }}>{tool.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="stats-strip-inner">
          <div className="stat-item">
            <strong>2+</strong>
            <span>Years of Experience</span>
          </div>
          <div className="stat-item">
            <strong>20+</strong>
            <span>Projects Delivered</span>
          </div>
          <div className="stat-item">
            <strong>10+</strong>
            <span>Happy Clients</span>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="intro-section" id="who-we-are">
        <div className="section-label">WHO WE ARE</div>

        <div className="intro-grid">
          <h2>
            One partner.
            <br />
            <span>Multiple possibilities.</span>
          </h2>

          <div>
            <p>
              We combine technology, talent and business understanding. Based in Tirupati,
              Andhra Pradesh, we build custom software, web and mobile applications, and cloud
              solutions that help businesses automate operations, manage data securely, and grow
              with confidence.
            </p>
            <Link className="text-link" to="/about">
              Discover SAITEJA INFOTECH <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* Company at a glance */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "18px",
            marginTop: "40px",
          }}
        >
          {companyFacts.map(({ value, label, note }, i) => (
            <div
              key={label}
              style={{
                background: i === 0 ? "#ea580c" : "#ffffff",
                color: i === 0 ? "#ffffff" : "#0f172a",
                border: i === 0 ? "none" : "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "22px 22px",
                boxShadow:
                  i === 0
                    ? "0 14px 28px -8px rgba(234, 88, 12, 0.3)"
                    : "0 4px 16px rgba(15, 23, 42, 0.05)",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: "800", lineHeight: "1.1" }}>{value}</div>
              <div style={{ fontSize: "14px", fontWeight: "700", marginTop: "6px" }}>{label}</div>
              <div
                style={{
                  fontSize: "12.5px",
                  marginTop: "4px",
                  lineHeight: "1.5",
                  color: i === 0 ? "rgba(255,255,255,0.9)" : "#64748b",
                }}
              >
                {note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISION */}


      {/* WHY CHOOSE US */}
      <section
        className="why-choose-us-section"
        style={{
          padding: "80px 20px",
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "left", marginBottom: "50px" }}>
            <div
              style={{
                color: "var(--primary-color, #ff7a00)",
                fontSize: "0.85rem",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Why Choose Us
            </div>

            <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#111827", margin: "0 0 12px 0" }}>
              Why Choose Saiteja Infotech?
            </h2>

            <p style={{ color: "#6b7280", fontSize: "1.05rem", margin: 0 }}>
              We deliver reliable technology solutions through innovation, quality, and customer-focused services.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
              width: "100%",
            }}
          >
            {whyChooseUs.map(({ icon, title, text }) => (
              <div key={title} className="testimonial-card" style={styles.whyCard}>
                <div style={styles.whyIcon}>{icon}</div>
                <h3 style={styles.whyTitle}>{title}</h3>
                <p style={styles.whyText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section
        id="solutions"
        style={{
          padding: "88px 24px",
          background: "#fffaf5",
          borderTop: "1px solid #fed7aa",
          borderBottom: "1px solid #fed7aa",
        }}
      >
        <SolutionsShowcase />
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section id="industries" style={{ padding: "80px 24px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            label="INDUSTRIES WE SERVE"
            title="Software solutions built for"
            highlight=" modern industries."
            description="We engineer scalable, secure, and domain-specific software applications tailored to the digital needs of diverse industries."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginTop: "48px",
            }}
          >
            {industries.map(({ title, text }, i) => (
              <div key={title} style={styles.industryCard}>
                <span style={{ color: "#ea580c", fontWeight: "800", fontSize: "14px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ color: "#0f172a", fontSize: "19px", fontWeight: "700", marginTop: "8px", marginBottom: "10px" }}>
                  {title}
                </h3>
                <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section id="our-work" style={{ padding: "80px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            label="OUR WORK"
            title="Featured projects &"
            highlight=" case studies."
            description="See how we transform complex business challenges into reliable, scalable, and user-friendly software products."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
              marginTop: "48px",
            }}
          >
            {caseStudies.map(({ badge, title, text, stack }) => (
              <div key={title} style={styles.caseCard}>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#fff7ed",
                      color: "#ea580c",
                      fontSize: "12px",
                      fontWeight: "700",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      marginBottom: "14px",
                    }}
                  >
                    {badge}
                  </span>
                  <h3 style={{ color: "#0f172a", fontSize: "21px", fontWeight: "700", marginBottom: "10px" }}>
                    {title}
                  </h3>
                  <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65", marginBottom: "16px" }}>
                    {text}
                  </p>
                </div>
                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "14px", fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>
                  Tech Stack: <span style={{ color: "#64748b", fontWeight: "500" }}>{stack}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "96px max(24px, 6%)",
          fontFamily: "sans-serif",
          borderTop: "1px solid #f1f5f9",
          borderBottom: "1px solid #f1f5f9",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "60px",
            flexWrap: "wrap",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          {/* Left: header & CTA */}
          <div style={{ flex: "1 1 320px", maxWidth: "400px", textAlign: "left" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#fff7ed",
                color: "#ff7a00",
                border: "1px solid #ffedd5",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ff7a00" }} />
              WHAT OUR CLIENTS SAY
            </span>

            <h2
              style={{
                fontSize: "2.6rem",
                fontWeight: "800",
                color: "#0f172a",
                lineHeight: "1.18",
                margin: "0 0 20px 0",
                letterSpacing: "-0.02em",
              }}
            >
              Trusted by innovative companies worldwide.
            </h2>

            <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: "1.65", marginBottom: "32px" }}>
              Your experience inspires us to deliver better technology solutions and create lasting partnerships.
            </p>

            <Link
              to="/contact"
              style={{
                backgroundColor: "#ff7a00",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 28px",
                fontSize: "0.95rem",
                fontWeight: "700",
                borderRadius: "10px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 10px 25px rgba(255, 122, 0, 0.3)",
              }}
            >
              Share Your Experience <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: 2x2 cards */}
          <div
            style={{
              flex: "2 1 600px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "24px",
              width: "100%",
            }}
          >
            {testimonials.map((item) => (
              <div
                key={`${item.name}-${item.role}`}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "32px",
                  boxShadow: "0 12px 35px rgba(15, 23, 42, 0.05)",
                  border: "1px solid #e2e8f0",
                  borderBottom: "4px solid #ff7a00",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "24px",
                    fontSize: "4.5rem",
                    fontFamily: "Georgia, serif",
                    color: "#fff7ed",
                    lineHeight: "1",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  &rdquo;
                </span>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ color: "#f59e0b", fontSize: "1.05rem", letterSpacing: "2px", marginBottom: "16px" }}>
                    ★★★★★
                  </div>
                  <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: "1.65", margin: "0 0 28px 0" }}>
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #ff7a00, #ff9e44)",
                      color: "#ffffff",
                      fontWeight: "700",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 4px 10px rgba(255, 122, 0, 0.25)",
                    }}
                  >
                    {item.initials}
                  </div>

                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0f172a", margin: "0 0 3px 0" }}>
                      {item.name}
                    </h4>
                    <span style={{ color: "#ff7a00", fontSize: "0.82rem", fontWeight: "600" }}>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section
        className="careers-section"
        id="careers"
        style={{
          padding: "88px 24px",
          background: "#fffaf5",
          borderTop: "1px solid #fed7aa",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "56px",
            alignItems: "center",
          }}
        >
          {/* Left: photo with floating badge */}
          <div style={{ position: "relative" }}>
            <figure
              style={{
                margin: 0,
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 24px 48px -16px rgba(15, 23, 42, 0.25)",
                border: "1px solid #fed7aa",
              }}
            >
              <img
                src={careersImage}
                alt="Saiteja Infotech team collaborating"
                loading="lazy"
                style={{ width: "100%", height: "100%", minHeight: "380px", objectFit: "cover", display: "block" }}
              />
            </figure>

            <div
              style={{
                position: "absolute",
                left: "20px",
                bottom: "-22px",
                background: "#ffffff",
                border: "1px solid #ffedd5",
                borderRadius: "16px",
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 12px 28px rgba(234, 88, 12, 0.15)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "#ea580c",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Briefcase size={20} />
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>We&rsquo;re hiring</div>
                <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "500" }}>Freshers &amp; experienced</div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="careers-content">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#fff7ed",
                color: "#ea580c",
                border: "1px solid #ffedd5",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "18px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ea580c" }} />
              CAREERS
            </span>

            <h2
              style={{
                fontSize: "2.4rem",
                fontWeight: "800",
                color: "#0f172a",
                lineHeight: "1.18",
                letterSpacing: "-0.02em",
                margin: "0 0 16px 0",
              }}
            >
              Grow your career <span style={{ color: "#ea580c" }}>with us.</span>
            </h2>

            <p style={{ color: "#475569", fontSize: "1rem", lineHeight: "1.7", margin: "0 0 28px 0" }}>
              We are always looking for passionate people to join our expanding team. Build real
              products, learn modern technologies, and grow alongside a supportive team in Tirupati.
            </p>

            {/* Perks */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "14px",
                marginBottom: "28px",
              }}
            >
              {careerPerks.map(({ icon, title, text }) => (
                <div
                  key={title}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    padding: "14px 16px",
                    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "#fff7ed",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a" }}>{title}</div>
                    <div style={{ fontSize: "12.5px", color: "#64748b", lineHeight: "1.5", marginTop: "2px" }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Roles */}
            <div style={{ marginBottom: "30px" }}>
              <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>
                Areas we hire for
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {careerRoles.map((role) => (
                  <span
                    key={role}
                    style={{
                      background: "#fff7ed",
                      color: "#ea580c",
                      border: "1px solid #ffedd5",
                      fontSize: "12.5px",
                      fontWeight: "600",
                      padding: "6px 14px",
                      borderRadius: "999px",
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <Link className="primary-button" to="/careers">
                View Openings <ArrowRight size={18} />
              </Link>
              <Link className="secondary-button" to="/contact">
                Send Your Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;