import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Sparkles, Code2, Server, Database, GitBranch, CheckCircle2, Briefcase,
  Users, Rocket, GraduationCap, Search, PenTool, ShieldCheck, ChevronDown, Clock,
} from "lucide-react";

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
    description: "An integrated workflow automation platform that digitizes approvals, task tracking, and daily operational reporting to boost team productivity.",
    metrics: [{ label: "Efficiency Boost", value: "+65%" }, { label: "Manual Errors", value: "-90%" }, { label: "Active Workflows", value: "24/7" }],
    features: ["Automated multi-level approvals", "Real-time task & status tracking", "Custom daily & monthly reports", "Seamless department integration"],
  },
  {
    title: "Custom ERP & CRM Portal",
    tag: "Management System",
    description: "A centralized cloud platform to manage customer leads, billing, inventory, and business analytics with role-based security.",
    metrics: [{ label: "Lead Visibility", value: "100%" }, { label: "Data Security", value: "Role-Based" }, { label: "Live Sync", value: "Real-Time" }],
    features: ["End-to-end customer lead tracking", "Automated invoicing & inventory sync", "Granular role-based access control", "Executive analytics dashboards"],
  },
  {
    title: "Omnichannel Web & Mobile Platforms",
    tag: "Digital Commerce & Apps",
    description: "High-speed web portals, RESTful APIs, and responsive frontends built with React.js and Bootstrap for seamless customer engagement.",
    metrics: [{ label: "Platforms", value: "Web & App" }, { label: "API Architecture", value: "RESTful" }, { label: "Performance", value: "Fast Load" }],
    features: ["Responsive web & customer portals", "Android & iOS companion apps", "Secure payment & order tracking", "REST API & cloud backend sync"],
  },
  {
    title: "Cloud & DevOps Solutions",
    tag: "Cloud Infrastructure & CI/CD",
    description: "We design, automate, and manage reliable cloud infrastructure that helps businesses ship faster, scale smoothly, and maintain high availability across enterprise platforms.",
    metrics: [{ label: "Cloud Hosting", value: "AWS" }, { label: "Automation", value: "CI/CD" }, { label: "Availability", value: "99.9%" }],
    features: ["AWS Hosting (EC2, S3, CloudFront)", "Docker containers & Nginx routing", "Git, GitHub & GitHub Actions CI/CD", "Spring Boot, Node.js & TiDB Cloud"],
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
  { icon: "👥", title: "Customer-Focused Approach", text: "We understand your requirements before recommending solutions—ensuring every product aligns closely with your business goals, workflows, and long-term vision." },
  { icon: "⚙️", title: "Customized Solutions", text: "We develop solutions aligned with your business objectives—building scalable, flexible, and tailored digital applications designed to solve your specific operational challenges." },
  { icon: "🏅", title: "Quality Commitment", text: "We emphasize functionality, usability, and reliability—delivering secure, well-tested, and user-friendly software that performs seamlessly under real-world business demands." },
  { icon: "</>", title: "Technology Expertise", text: "We work with modern technologies and development practices—leveraging proven frameworks, clean architecture, and continuous innovation to build future-ready platforms." },
  { icon: "💬", title: "Transparent Communication", text: "We maintain clear communication throughout the project—keeping you informed at every milestone with regular progress updates, honest timelines, and collaborative feedback." },
  { icon: "🎧", title: "Continuous Support", text: "We aim to build long-term relationships through ongoing technical support—providing proactive maintenance, timely upgrades, and dedicated post-launch assistance whenever you need it." },
];

const industries = [
  { title: "SaaS & Technology Startups", text: "Full-cycle MVP development, cloud-native web apps, and scalable API architectures to help tech startups launch and scale faster." },
  { title: "FinTech & Financial Services", text: "High-security payment integrations, automated billing systems, and compliance-ready financial management software." },
  { title: "HealthTech & Diagnostics", text: "HIPAA-aligned patient portals, hospital management ERP, and telemedicine mobile apps built for seamless clinical workflows." },
  { title: "EdTech & Enterprise Training", text: "Custom Learning Management Systems (LMS), live assessment portals, and campus automation platforms for educational institutions." },
  { title: "E-Commerce & Retail Tech", text: "Custom multi-vendor marketplaces, real-time inventory sync, and omnichannel mobile commerce apps for high-volume retail." },
  { title: "Enterprise Operations & Logistics", text: "Business process automation, CRM/ERP integrations, and real-time fleet tracking software to streamline daily enterprise operations." },
];

const caseStudies = [
  { badge: "Custom Software • ERP", title: "Enterprise Resource & Billing Automation", text: "Built a centralized ERP and automated invoicing platform for a multi-branch enterprise, cutting manual reporting time by 60% and eliminating billing errors.", stack: "React • Java Spring Boot • MySQL" },
  { badge: "Web Application • SaaS", title: "Cloud Customer Portal & Workflow Suite", text: "Engineered a high-speed, role-based web portal with real-time analytics and automated notifications, improving client onboarding speed by 3x.", stack: "React • REST APIs • PostgreSQL" },
  { badge: "Mobile App • Android & iOS", title: "Field Workforce & Operations Mobile App", text: "Developed an intuitive cross-platform mobile app for real-time task assignment, live status tracking, and instant field reporting across teams.", stack: "React Native • Spring Boot • Cloud" },
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

const careerRoles = ["Full Stack Developer", "React Developer", "Java / Spring Boot Developer", "DevOps Engineer", "Software Intern"];

const testimonials = [
  { name: "Mohan Kumar", role: "Team Lead", initials: "MK", review: "Saiteja Infotech provides excellent IT services with a professional and supportive team. Their solutions are reliable, innovative, and delivered with great attention to quality. I truly appreciate their commitment and customer service. Highly recommended!" },
  { name: "Preethi Reddy", role: "Managing Director", initials: "PR", review: "We had a great experience working with Saiteja Infotech. Their team understood our business requirements and delivered a reliable software solution. Their technical support and dedication were impressive." },
  { name: "Manoj Kumar", role: "Business Owner", initials: "MK", review: "Saiteja Infotech helped us improve our business operations through their technology solutions. Their support and innovative approach made our work easier and more efficient. We appreciate their commitment and professionalism." },
];

const processSteps = [
  { icon: Search, title: "Discovery & Analysis", text: "We study your business, users and goals through workshops and requirement mapping so we build the right thing from day one." },
  { icon: PenTool, title: "Planning & UI/UX Design", text: "Architecture, wireframes and clickable prototypes are shared with you early, so feedback is gathered before development starts." },
  { icon: Code2, title: "Agile Development", text: "Short sprints with working demos every one to two weeks, clean code reviews and transparent progress tracking." },
  { icon: ShieldCheck, title: "Testing & Quality", text: "Functional, security and performance testing across devices and browsers to keep releases stable and dependable." },
  { icon: Rocket, title: "Launch & Support", text: "Automated CI/CD deployment on AWS, followed by monitoring, maintenance and continuous improvements after go-live." },
];

const models = [
  { icon: Briefcase, title: "Fixed Scope Project", text: "Best for well-defined products. Agreed scope, timeline and budget with milestone-based delivery.", points: ["Clear deliverables", "Milestone payments", "Predictable cost"] },
  { icon: Users, title: "Dedicated Team", text: "A full-time team that works as an extension of your company, ideal for long-term product growth.", points: ["Developers, QA & DevOps", "Flexible team size", "Direct communication"] },
  { icon: Clock, title: "Time & Material", text: "For evolving requirements. Pay for the effort used while keeping the freedom to change priorities.", points: ["Adaptive roadmap", "Monthly reporting", "Scale up or down"] },
];

const faqs = [
  { q: "What types of software do you develop?", a: "We build custom software, ERP and CRM systems, web portals, Android and iOS apps, REST APIs and business process automation tools tailored to your workflows." },
  { q: "How long does a typical project take?", a: "A focused MVP usually takes 6 to 10 weeks, while larger ERP or multi-module platforms take 3 to 6 months. We share a detailed timeline after the discovery phase." },
  { q: "Do you provide support after launch?", a: "Yes. We offer maintenance, bug fixing, monitoring, security updates and feature upgrades through flexible support plans." },
  { q: "Can you work with our existing system?", a: "Absolutely. We integrate with existing databases, payment gateways, third-party APIs and legacy software, and can modernise or migrate them to the cloud." },
  { q: "How do you keep our data secure?", a: "We use role-based access control, encrypted communication, secure APIs, regular backups and AWS best practices to protect your data." },
  { q: "How do we get started?", a: "Send us a short message about your requirements. We will schedule a free consultation, understand your goals and share a proposal with scope, timeline and cost." },
];

/* ------------------------------------------------------------------ */
/*  SHARED STYLES                                                      */
/* ------------------------------------------------------------------ */

const OR = "#ea580c";
const cardBase = { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)" };
const pill = { display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#fff7ed", color: OR, border: "1px solid #ffedd5", padding: "6px 14px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "1px" };
const grid = (min, gap = "24px", extra = {}) => ({ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap, ...extra });
const wrap = (w = "1200px") => ({ maxWidth: w, margin: "0 auto" });

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPERS                                                  */
/* ------------------------------------------------------------------ */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Reveal({ children, delay = 0, direction = "up" }) {
  const [ref, inView] = useInView();
  const from = { up: "translateY(32px)", left: "translateX(-32px)", right: "translateX(32px)" }[direction];
  return (
    <div
      ref={ref}
      style={{
        height: "100%",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : from,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CountUp({ end, suffix = "", duration = 1600 }) {
  const [ref, inView] = useInView(0.4);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return <span ref={ref}>{value}{suffix}</span>;
}

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", top: 0, left: 0, height: "3px", width: `${pct}%`, background: "linear-gradient(90deg, #ea580c, #fb923c)", zIndex: 9999 }}
    />
  );
}

function AnimationStyles() {
  return (
    <style>{`
      @keyframes saitejaFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
      @keyframes saitejaShimmer { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
      @keyframes saitejaPulse { 0% { box-shadow: 0 0 0 0 rgba(234,88,12,0.45); } 70% { box-shadow: 0 0 0 16px rgba(234,88,12,0); } 100% { box-shadow: 0 0 0 0 rgba(234,88,12,0); } }
      @keyframes saitejaBlob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-24px) scale(1.12); } }
      @keyframes saitejaFadeIn { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
      @keyframes saitejaTechMarquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }

      .hero-company-logo { animation: saitejaFloat 6s ease-in-out infinite; }
      .hero-content > * { animation: saitejaFadeIn 0.8s ease both; }
      .hero-content > *:nth-child(2) { animation-delay: 0.12s; }
      .hero-content > *:nth-child(3) { animation-delay: 0.24s; }
      .hero-content > *:nth-child(4) { animation-delay: 0.36s; }
      .hero-content > *:nth-child(5) { animation-delay: 0.48s; }
      .hero-content h1 span {
        background: linear-gradient(90deg, #ea580c, #fb923c, #ea580c);
        background-size: 200% auto;
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: saitejaShimmer 5s linear infinite;
      }
      .primary-button { transition: transform 0.2s ease, box-shadow 0.2s ease; }
      .primary-button:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(234,88,12,0.3); }
      .secondary-button { transition: transform 0.2s ease; }
      .secondary-button:hover { transform: translateY(-2px); }
      .lift { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
      .lift:hover { transform: translateY(-6px); box-shadow: 0 22px 40px -14px rgba(15,23,42,0.18) !important; border-color: #fdba74 !important; }
      .service-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
      .service-card:hover { transform: translateY(-6px); }
      .service-image img { transition: transform 0.6s ease; }
      .service-card:hover .service-image img { transform: scale(1.06); }

      .saiteja-marquee-wrapper { display: flex; width: max-content; animation: saitejaTechMarquee 42s linear infinite; }
      .saiteja-marquee-wrapper:hover { animation-play-state: paused; }
      .saiteja-tech-pill {
        display: flex; align-items: center; gap: 14px;
        background: rgba(30, 41, 59, 0.85);
        border: 1px solid rgba(251, 146, 60, 0.3);
        border-radius: 16px; padding: 16px 26px; margin-right: 20px; min-width: 225px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        transition: transform 0.2s ease, border-color 0.2s ease;
      }
      .saiteja-tech-pill:hover { transform: translateY(-4px); border-color: #ea580c; }

      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation: none !important; transition: none !important; }
      }
    `}</style>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION HEADER (used by new sections)                              */
/* ------------------------------------------------------------------ */

function Heading({ label, title, highlight, text }) {
  return (
    <Reveal>
      <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
        <span style={{ color: OR, fontWeight: 700, fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase" }}>{label}</span>
        <h2 style={{ color: "#0f172a", fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.2, margin: "10px 0 14px" }}>
          {title} <span style={{ color: OR }}>{highlight}</span>
        </h2>
        <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>{text}</p>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  SOLUTIONS SHOWCASE                                                 */
/* ------------------------------------------------------------------ */

function SolutionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = solutions[activeIndex];
  const prev = () => setActiveIndex((i) => (i === 0 ? solutions.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === solutions.length - 1 ? 0 : i + 1));
  const navBtn = { width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" };

  return (
    <div style={wrap("1140px")}>
      <SectionHeading
        label="OUR SOLUTIONS"
        title="Scalable products &"
        highlight=" digital platforms."
        description="Custom-built software platforms and digital systems engineered to streamline your daily business operations."
      />

      <div style={grid(340, "36px", { marginTop: "48px", alignItems: "stretch" })}>
        {/* LEFT TABS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center" }}>
          {solutions.map((item, idx) => {
            const sel = activeIndex === idx;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
                  width: "100%", textAlign: "left", padding: "20px 22px", borderRadius: "16px",
                  background: sel ? "#ffffff" : "rgba(255, 255, 255, 0.75)",
                  border: sel ? "1.5px solid #fdba74" : "1px solid #e2e8f0",
                  borderLeft: sel ? `6px solid ${OR}` : "6px solid transparent",
                  boxShadow: sel ? "0 14px 28px -8px rgba(234, 88, 12, 0.16)" : "0 2px 6px rgba(15, 23, 42, 0.03)",
                  cursor: "pointer", transition: "all 0.25s ease",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: sel ? OR : "#64748b", marginBottom: "5px" }}>{item.tag}</div>
                  <div style={{ fontSize: "17px", fontWeight: "800", color: sel ? "#0f172a" : "#334155", lineHeight: "1.3" }}>{item.title}</div>
                </div>
                <div
                  style={{
                    width: "36px", height: "36px", borderRadius: "50%", flexShrink: 0,
                    background: sel ? OR : "#f1f5f9", color: sel ? "#ffffff" : "#64748b",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transform: sel ? "translateX(4px)" : "translateX(0)", transition: "all 0.25s ease",
                  }}
                >
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT PREVIEW */}
        <div
          key={activeIndex}
          style={{
            background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "36px",
            boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.08)", display: "flex", flexDirection: "column",
            justifyContent: "space-between", animation: "saitejaFadeIn 0.45s ease",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <div style={{ ...pill, fontWeight: "700", fontSize: "12px", letterSpacing: 0 }}>{active.tag} Overview</div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#64748b", marginRight: "4px" }}>{activeIndex + 1} / {solutions.length}</span>
                <button type="button" onClick={prev} aria-label="Previous solution" style={{ ...navBtn, border: "1px solid #e2e8f0", background: "#fff", color: "#0f172a" }}>
                  <ArrowRight size={17} style={{ transform: "rotate(180deg)" }} />
                </button>
                <button type="button" onClick={next} aria-label="Next solution" style={{ ...navBtn, border: "none", background: OR, color: "#fff", boxShadow: "0 4px 12px rgba(234, 88, 12, 0.25)" }}>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", marginBottom: "22px", lineHeight: "1.3" }}>{active.title}</h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "24px" }}>
              {active.metrics.map((m, i) => (
                <div key={m.label} style={{ background: i === 0 ? OR : "#f8fafc", color: i === 0 ? "#fff" : "#0f172a", border: i === 0 ? "none" : "1px solid #e2e8f0", borderRadius: "12px", padding: "14px 16px" }}>
                  <div style={{ fontSize: "18px", fontWeight: "800" }}>{m.value}</div>
                  <div style={{ fontSize: "12px", fontWeight: "500", opacity: i === 0 ? 0.92 : 0.7, marginTop: "3px" }}>{m.label}</div>
                </div>
              ))}
            </div>

            <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", paddingBottom: "22px", marginBottom: "22px", borderBottom: "1px solid #f1f5f9" }}>{active.description}</p>
          </div>

          <div style={grid(210, "14px")}>
            {active.features.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "600", color: "#1e293b" }}>
                <CheckCircle2 size={18} color={OR} style={{ flexShrink: 0 }} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NEW SECTIONS                                                       */
/* ------------------------------------------------------------------ */

function AnimatedStats() {
  const stats = [
    { end: 2, suffix: "+", label: "Years of Experience" },
    { end: 20, suffix: "+", label: "Projects Delivered" },
    { end: 10, suffix: "+", label: "Happy Clients" },
    { end: services.length, suffix: "", label: "Core Services" },
  ];
  return (
    <section style={{ background: "linear-gradient(135deg, #ea580c, #c2410c)", padding: "56px 24px" }}>
      <div style={{ ...grid(180, "28px"), ...wrap("1100px"), textAlign: "center" }}>
        {stats.map(({ end, suffix, label }, i) => (
          <Reveal key={label} delay={i * 100}>
            <div style={{ color: "#fff", fontSize: "3rem", fontWeight: 800, lineHeight: 1 }}><CountUp end={end} suffix={suffix} /></div>
            <div style={{ color: "rgba(255,255,255,0.88)", fontSize: "14px", fontWeight: 600, marginTop: "8px" }}>{label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" style={{ padding: "88px 24px", background: "#ffffff" }}>
      <div style={wrap("1100px")}>
        <Heading label="HOW WE WORK" title="A proven process," highlight="from idea to launch." text="A clear, collaborative delivery model that keeps your project predictable, transparent and on schedule." />
        <div style={{ position: "relative", marginTop: "56px" }}>
          <div aria-hidden="true" style={{ position: "absolute", left: "27px", top: "10px", bottom: "10px", width: "2px", background: "linear-gradient(#fdba74, #ffedd5)" }} />
          {processSteps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} style={{ marginBottom: "28px" }}>
              <Reveal delay={i * 80} direction="left">
                <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: OR, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1, animation: i === 0 ? "saitejaPulse 2.4s infinite" : "none" }}>
                    <Icon size={24} />
                  </div>
                  <div className="lift" style={{ ...cardBase, flex: 1, background: "#f8fafc", padding: "20px 24px", boxShadow: "none" }}>
                    <div style={{ color: OR, fontSize: "12px", fontWeight: 800, letterSpacing: "1px" }}>STEP {String(i + 1).padStart(2, "0")}</div>
                    <h3 style={{ color: "#0f172a", fontSize: "19px", fontWeight: 700, margin: "4px 0 8px" }}>{title}</h3>
                    <p style={{ color: "#475569", fontSize: "15px", lineHeight: 1.65, margin: 0 }}>{text}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementSection() {
  return (
    <section id="engagement" style={{ padding: "88px 24px", background: "#f8fafc" }}>
      <div style={wrap()}>
        <Heading label="ENGAGEMENT MODELS" title="Flexible ways to" highlight="work with us." text="Choose the collaboration model that fits your budget, timeline and stage of growth." />
        <div style={grid(290, "26px", { marginTop: "48px" })}>
          {models.map(({ icon: Icon, title, text, points }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="lift" style={{ ...cardBase, height: "100%", borderRadius: "20px", padding: "32px 28px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "#fff7ed", color: OR, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ color: "#0f172a", fontSize: "20px", fontWeight: 700, margin: "0 0 10px" }}>{title}</h3>
                <p style={{ color: "#475569", fontSize: "15px", lineHeight: 1.65, margin: "0 0 18px" }}>{text}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "8px" }}>
                  {points.map((p) => (
                    <li key={p} style={{ color: "#1e293b", fontSize: "14px", fontWeight: 600 }}>
                      <span style={{ color: OR, marginRight: "8px" }}>✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ padding: "88px 24px", background: "#ffffff" }}>
      <div style={wrap("860px")}>
        <Heading label="FAQ" title="Questions we" highlight="hear often." text="Quick answers about how we work. Can’t find yours? Just get in touch." />
        <div style={{ marginTop: "44px", display: "grid", gap: "14px" }}>
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 60}>
                <div style={{ border: isOpen ? "1.5px solid #fdba74" : "1px solid #e2e8f0", borderRadius: "16px", background: isOpen ? "#fffaf5" : "#fff", transition: "all 0.3s ease", overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontSize: "16px", fontWeight: 700, color: "#0f172a" }}
                  >
                    {q}
                    <ChevronDown size={20} color={OR} style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }} />
                  </button>
                  <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows 0.35s ease" }}>
                    <div style={{ overflow: "hidden" }}>
                      <p style={{ margin: 0, padding: "0 24px 22px", color: "#475569", fontSize: "15px", lineHeight: 1.7 }}>{a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  const blob = (extra) => ({ position: "absolute", borderRadius: "50%", filter: "blur(60px)", opacity: 0.35, background: OR, animation: "saitejaBlob 9s ease-in-out infinite", ...extra });
  return (
    <section style={{ padding: "0 24px 88px", background: "#ffffff" }}>
      <Reveal>
        <div style={{ position: "relative", overflow: "hidden", ...wrap(), borderRadius: "28px", padding: "72px 32px", textAlign: "center", background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
          <div aria-hidden="true" style={blob({ width: "280px", height: "280px", top: "-80px", left: "-60px" })} />
          <div aria-hidden="true" style={blob({ width: "240px", height: "240px", bottom: "-90px", right: "-40px", animationDelay: "3s" })} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ color: "#fff", fontSize: "2.3rem", fontWeight: 800, lineHeight: 1.2, margin: "0 0 14px" }}>
              Ready to build something <span style={{ color: "#fb923c" }}>great together?</span>
            </h2>
            <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "620px", margin: "0 auto 30px" }}>
              Tell us about your idea or challenge. Our team will respond within one business day with a free consultation.
            </p>
            <Link className="primary-button" to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Get a Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HOME                                                               */
/* ------------------------------------------------------------------ */

function Home() {
  return (
    <main>
      <ScrollProgress />
      <AnimationStyles />

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
            <strong>Custom Software Development</strong>, <strong>Web &amp; Mobile Applications</strong>, <strong>IT Consulting</strong>, and{" "}
            <strong>Business Process Automation</strong>.
          </p>

          <p style={{ marginTop: "14px" }}>
            Our core focus is delivering <strong>reliable, scalable, secure, and user-friendly</strong> solutions tailored to your exact business requirements—helping organizations boost efficiency, streamline daily operations, and achieve sustainable long-term growth.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#services">Explore Services <ArrowRight size={18} /></a>
            <Link className="secondary-button" to="/contact">Start a Conversation</Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-logo-container">
            <img src={companyLogo} alt="" className="hero-company-logo" />
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" style={{ padding: "80px 24px", ...wrap() }}>
        <div style={grid(300, "48px", { alignItems: "center" })}>
          <Reveal direction="left">
            <div>
              <span style={{ color: OR, fontWeight: "700", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>About Us</span>
              <h2 style={{ color: "#1e1511", fontSize: "36px", fontWeight: "800", marginTop: "10px", marginBottom: "20px", lineHeight: "1.2" }}>Innovation Driven by Purpose.</h2>
              <p style={{ color: "#334155", fontSize: "16px", lineHeight: "1.75", marginBottom: "24px" }}>
                <strong style={{ color: "#0f172a" }}>Saiteja Infotech Private Limited</strong> is an IT services and technology solutions company based in{" "}
                <strong style={{ color: "#0f172a" }}>Tirupati, Andhra Pradesh, India</strong>. We combine technical expertise, innovation, and a customer-focused approach to deliver reliable, scalable, and secure digital solutions aligned with your business goals.
              </p>
              <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.75", marginBottom: "24px" }}>
                From the first workshop to post-launch support, we work as an extension of your team—translating business challenges into software that is easy to use, simple to maintain, and built to grow with you.
              </p>
              <Link to="/about" className="primary-button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {[
                ["Tirupati, AP", "Headquartered in India"],
                ["Tailored IT", "Custom Software & Automation"],
                ["Cloud-Ready", "AWS, Docker & CI/CD delivery"],
                ["Long-Term", "Support beyond launch"],
              ].map(([h, p]) => (
                <div key={h} className="lift" style={{ ...cardBase, padding: "24px" }}>
                  <h3 style={{ color: OR, fontSize: "22px", fontWeight: "800", margin: 0 }}>{h}</h3>
                  <p style={{ color: "#475569", fontSize: "14px", marginTop: "6px", marginBottom: 0 }}>{p}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="services-section" id="services">
        <SectionHeading label="OUR SERVICES" title="Explore our" highlight=" core services." description="We transform your business ideas into practical, reliable, and scalable digital solutions." />

        <div className="services-grid">
          {services.map(({ image, number, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <article className="service-card">
                <div className="service-image">
                  <img src={image} alt={title} />
                  <span className="service-image-number">{number}</span>
                </div>
                <div className="service-card-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link to="/services">Explore service <ArrowRight size={16} /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES MARQUEE */}
      <section id="technologies" style={{ padding: "84px 0", background: "#0f172a", color: "#ffffff", overflow: "hidden", position: "relative" }}>
        <div style={{ ...wrap(), margin: "0 auto 48px", padding: "0 24px", textAlign: "center" }}>
          <span style={{ color: "#fb923c", fontWeight: "700", fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>OUR TECH STACK</span>
          <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#ffffff", margin: "0 0 12px" }}>
            Technologies &amp; <span style={{ color: OR }}>Tools We Use</span>
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
              style={{ position: "absolute", top: 0, bottom: 0, [side]: 0, width: "90px", background: `linear-gradient(${side === "left" ? "90deg" : "270deg"}, #0f172a 0%, rgba(15,23,42,0) 100%)`, zIndex: 2, pointerEvents: "none" }}
            />
          ))}

          <div className="saiteja-marquee-wrapper">
            {[0, 1].map((loop) => (
              <div key={loop} style={{ display: "flex", alignItems: "center" }}>
                {techStack.map((tool) => (
                  <div className="saiteja-tech-pill" key={`${loop}-${tool.name}`}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(234, 88, 12, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
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

      {/* ANIMATED STATS */}
      <AnimatedStats />

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
              We combine technology, talent and business understanding. Based in Tirupati, Andhra Pradesh, we build custom software, web and mobile applications, and cloud solutions that help businesses automate operations, manage data securely, and grow with confidence.
            </p>
            <Link className="text-link" to="/about">Discover SAITEJA INFOTECH <ArrowRight size={17} /></Link>
          </div>
        </div>

        <div style={grid(200, "18px", { marginTop: "40px" })}>
          {companyFacts.map(({ value, label, note }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div
                className="lift"
                style={{
                  height: "100%", padding: "22px", borderRadius: "16px",
                  background: i === 0 ? OR : "#ffffff", color: i === 0 ? "#ffffff" : "#0f172a",
                  border: i === 0 ? "none" : "1px solid #e2e8f0",
                  boxShadow: i === 0 ? "0 14px 28px -8px rgba(234, 88, 12, 0.3)" : "0 4px 16px rgba(15, 23, 42, 0.05)",
                }}
              >
                <div style={{ fontSize: "28px", fontWeight: "800", lineHeight: "1.1" }}>{value}</div>
                <div style={{ fontSize: "14px", fontWeight: "700", marginTop: "6px" }}>{label}</div>
                <div style={{ fontSize: "12.5px", marginTop: "4px", lineHeight: "1.5", color: i === 0 ? "rgba(255,255,255,0.9)" : "#64748b" }}>{note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-us-section" style={{ padding: "80px 20px", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ ...wrap(), padding: "0 20px" }}>
          <Reveal>
            <div style={{ textAlign: "left", marginBottom: "50px" }}>
              <div style={{ color: "var(--primary-color, #ff7a00)", fontSize: "0.85rem", fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>Why Choose Us</div>
              <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#111827", margin: "0 0 12px 0" }}>Why Choose Saiteja Infotech?</h2>
              <p style={{ color: "#6b7280", fontSize: "1.05rem", margin: 0 }}>We deliver reliable technology solutions through innovation, quality, and customer-focused services.</p>
            </div>
          </Reveal>

          <div style={grid(320, "30px", { width: "100%" })}>
            {whyChooseUs.map(({ icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 100}>
                <div className="lift" style={{ backgroundColor: "#fff", padding: "30px", height: "100%", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.02)", border: "1px solid #eaeaea", textAlign: "left", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ color: "var(--primary-color, #ff7a00)", fontSize: "1.75rem", lineHeight: "1" }}>{icon}</div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#111827", margin: 0 }}>{title}</h3>
                  <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section id="solutions" style={{ padding: "88px 24px", background: "#fffaf5", borderTop: "1px solid #fed7aa", borderBottom: "1px solid #fed7aa" }}>
        <SolutionsShowcase />
      </section>

      {/* HOW WE WORK */}
      <ProcessSection />

      {/* INDUSTRIES */}
      <section id="industries" style={{ padding: "80px 24px", backgroundColor: "#f8fafc" }}>
        <div style={wrap()}>
          <SectionHeading
            label="INDUSTRIES WE SERVE"
            title="Software solutions built for"
            highlight=" modern industries."
            description="We engineer scalable, secure, and domain-specific software applications tailored to the digital needs of diverse industries."
          />
          <div style={grid(260, "24px", { marginTop: "48px" })}>
            {industries.map(({ title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 100}>
                <div className="lift" style={{ ...cardBase, height: "100%", padding: "28px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)" }}>
                  <span style={{ color: OR, fontWeight: "800", fontSize: "14px" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ color: "#0f172a", fontSize: "19px", fontWeight: "700", marginTop: "8px", marginBottom: "10px" }}>{title}</h3>
                  <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65" }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section id="our-work" style={{ padding: "80px 24px", backgroundColor: "#ffffff" }}>
        <div style={wrap()}>
          <SectionHeading label="OUR WORK" title="Featured projects &" highlight=" case studies." description="See how we transform complex business challenges into reliable, scalable, and user-friendly software products." />
          <div style={grid(320, "28px", { marginTop: "48px" })}>
            {caseStudies.map(({ badge, title, text, stack }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="lift" style={{ ...cardBase, height: "100%", background: "#f8fafc", padding: "32px 24px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ display: "inline-block", background: "#fff7ed", color: OR, fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px", marginBottom: "14px" }}>{badge}</span>
                    <h3 style={{ color: "#0f172a", fontSize: "21px", fontWeight: "700", marginBottom: "10px" }}>{title}</h3>
                    <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.65", marginBottom: "16px" }}>{text}</p>
                  </div>
                  <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "14px", fontSize: "13px", fontWeight: "600", color: "#0f172a" }}>
                    Tech Stack: <span style={{ color: "#64748b", fontWeight: "500" }}>{stack}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <EngagementSection />

      {/* TESTIMONIALS */}
      <section style={{ backgroundColor: "#f8fafc", padding: "96px max(24px, 6%)", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "60px", flexWrap: "wrap", ...wrap("1280px") }}>
          <Reveal direction="left">
            <div style={{ flex: "1 1 320px", maxWidth: "400px", textAlign: "left" }}>
              <span style={{ ...pill, marginBottom: "20px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ff7a00" }} />
                WHAT OUR CLIENTS SAY
              </span>
              <h2 style={{ fontSize: "2.6rem", fontWeight: "800", color: "#0f172a", lineHeight: "1.18", margin: "0 0 20px 0", letterSpacing: "-0.02em" }}>
                Trusted by growing businesses.
              </h2>
              <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: "1.65", marginBottom: "32px" }}>
                Your experience inspires us to deliver better technology solutions and create lasting partnerships.
              </p>
              <Link to="/contact" className="primary-button" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                Share Your Experience <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>

          <div style={{ flex: "2 1 600px", ...grid(290, "24px", { width: "100%" }) }}>
            {testimonials.map((item, i) => (
              <Reveal key={`${item.name}-${item.role}`} delay={i * 120}>
                <div
                  className="lift"
                  style={{ height: "100%", backgroundColor: "#fff", borderRadius: "20px", padding: "32px", boxShadow: "0 12px 35px rgba(15, 23, 42, 0.05)", border: "1px solid #e2e8f0", borderBottom: "4px solid #ff7a00", display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "left", position: "relative", overflow: "hidden" }}
                >
                  <span aria-hidden="true" style={{ position: "absolute", top: "12px", right: "24px", fontSize: "4.5rem", fontFamily: "Georgia, serif", color: "#fff7ed", lineHeight: "1", userSelect: "none", pointerEvents: "none" }}>&rdquo;</span>

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ color: "#f59e0b", fontSize: "1.05rem", letterSpacing: "2px", marginBottom: "16px" }}>★★★★★</div>
                    <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: "1.65", margin: "0 0 28px 0" }}>&ldquo;{item.review}&rdquo;</p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative", zIndex: 1 }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, #ff7a00, #ff9e44)", color: "#fff", fontWeight: "700", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 10px rgba(255, 122, 0, 0.25)" }}>
                      {item.initials}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0f172a", margin: "0 0 3px 0" }}>{item.name}</h4>
                      <span style={{ color: "#ff7a00", fontSize: "0.82rem", fontWeight: "600" }}>{item.role}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="careers-section" id="careers" style={{ padding: "88px 24px", background: "#fffaf5", borderTop: "1px solid #fed7aa" }}>
        <div style={{ ...wrap(), ...grid(320, "56px", { alignItems: "center" }) }}>
          <Reveal direction="left">
            <div style={{ position: "relative" }}>
              <figure style={{ margin: 0, borderRadius: "24px", overflow: "hidden", boxShadow: "0 24px 48px -16px rgba(15, 23, 42, 0.25)", border: "1px solid #fed7aa" }}>
                <img src={careersImage} alt="Saiteja Infotech team collaborating" loading="lazy" style={{ width: "100%", height: "100%", minHeight: "380px", objectFit: "cover", display: "block" }} />
              </figure>

              <div style={{ position: "absolute", left: "20px", bottom: "-22px", background: "#fff", border: "1px solid #ffedd5", borderRadius: "16px", padding: "14px 20px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 12px 28px rgba(234, 88, 12, 0.15)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: OR, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Briefcase size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>We&rsquo;re hiring</div>
                  <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "500" }}>Freshers &amp; experienced</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="careers-content">
              <span style={{ ...pill, marginBottom: "18px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: OR }} />
                CAREERS
              </span>

              <h2 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#0f172a", lineHeight: "1.18", letterSpacing: "-0.02em", margin: "0 0 16px 0" }}>
                Grow your career <span style={{ color: OR }}>with us.</span>
              </h2>

              <p style={{ color: "#475569", fontSize: "1rem", lineHeight: "1.7", margin: "0 0 28px 0" }}>
                We are always looking for passionate people to join our expanding team. Build real products, learn modern technologies, and grow alongside a supportive team in Tirupati.
              </p>

              <div style={grid(200, "14px", { marginBottom: "28px" })}>
                {careerPerks.map(({ icon, title, text }) => (
                  <div key={title} style={{ display: "flex", gap: "12px", alignItems: "flex-start", ...cardBase, borderRadius: "14px", padding: "14px 16px", boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#fff7ed", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a" }}>{title}</div>
                      <div style={{ fontSize: "12.5px", color: "#64748b", lineHeight: "1.5", marginTop: "2px" }}>{text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "30px" }}>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>Areas we hire for</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {careerRoles.map((role) => (
                    <span key={role} style={{ background: "#fff7ed", color: OR, border: "1px solid #ffedd5", fontSize: "12.5px", fontWeight: "600", padding: "6px 14px", borderRadius: "999px" }}>{role}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link className="primary-button" to="/careers">View Openings <ArrowRight size={18} /></Link>
                <Link className="secondary-button" to="/contact">Send Your Resume</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* FINAL CTA */}
      <CTABanner />
    </main>
  );
}

export default Home;