import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Award, Briefcase, Check, Cloud, Code2, Eye, GraduationCap, Lightbulb,
  MapPin, Smartphone, Target, ShieldCheck, Users, Rocket, Sparkles, Clock,
} from "lucide-react";

import profileImage from "../assets/services/About-us-image.png";

/* ------------------------------------------------------------------ */
/*  CONTENT (edit here)                                                */
/* ------------------------------------------------------------------ */

const highlights = [
  "Quality work and reliable delivery",
  "Clear, transparent communication",
  "Long-term relationships with our customers",
];

const values = [
  { icon: Lightbulb, title: "Innovation", text: "We keep learning and improving so our clients always get modern, practical solutions." },
  { icon: Users, title: "Customer Focus", text: "Every decision starts with your goals, your users and your day-to-day challenges." },
  { icon: Award, title: "Quality & Excellence", text: "Well-tested, maintainable software that performs under real business demands." },
  { icon: ShieldCheck, title: "Integrity & Transparency", text: "Honest timelines, clear pricing and open communication at every milestone." },
  { icon: Rocket, title: "Collaboration", text: "We work as one team with our clients, sharing progress and feedback early and often." },
];

const expertise = [
  { icon: Code2, label: "Software & Web Development", url: "/services/custom-software-development", text: "Custom ERP, CRM and web platforms built with React, Java Spring Boot and Node.js." },
  { icon: Smartphone, label: "Mobile Applications", url: "/services/mobile-application-development", text: "Android and iOS apps that keep your customers and field teams connected." },
  { icon: Cloud, label: "Cloud & DevOps", url: "/services/cloud-devops-solutions", text: "AWS hosting, Docker, and CI/CD pipelines for faster, more reliable releases." },
  { icon: Lightbulb, label: "IT Consulting", url: "/services/it-consulting", text: "Technology planning and architecture advice to help you choose the right path." },
  { icon: Briefcase, label: "HR & Staffing", url: "/services/hrms-solutions", text: "HR solutions and talent support that connect organizations with skilled professionals." },
  { icon: GraduationCap, label: "Training & Development", url: "/services/custom-software-development", text: "Hands-on technical training that builds job-ready skills for individuals and teams." },
];

const differentiators = [
  { title: "Understand first, build next", text: "We begin with discovery workshops so the solution fits your real workflow, not a generic template." },
  { title: "Scalable by design", text: "Clean architecture and cloud-ready foundations let your product grow without rebuilds." },
  { title: "Security built in", text: "Role-based access, secure APIs and dependable databases are part of every project from day one." },
  { title: "Visible progress", text: "Regular demos and honest status updates mean you always know where your project stands." },
  { title: "Support after launch", text: "Maintenance, monitoring and upgrades continue long after go-live." },
  { title: "One partner, full cycle", text: "Design, development, deployment and support handled by a single accountable team." },
];

const techList = [
  "Java", "Spring Boot", "Node.js", "React.js", "JavaScript", "Bootstrap", "MySQL", "TiDB Cloud",
  "AWS EC2", "Amazon S3", "CloudFront", "Docker", "Nginx", "GitHub Actions", "CI/CD", "REST APIs",
];

const journey = [
  { title: "The Beginning", text: "Started with a vision to bring people, technology and business opportunities closer together." },
  { title: "Growing Capabilities", text: "Expanded across staffing, technology, training and digital solutions." },
  { title: "Building Partnerships", text: "Building relationships with organizations and professionals to create meaningful opportunities." },
  { title: "Looking Ahead", text: "Creating practical solutions that help businesses and people move forward." },
];

const stats = [
  { end: 2, suffix: "+", label: "Years of Experience" },
  { end: 20, suffix: "+", label: "Projects Delivered" },
  { end: 10, suffix: "+", label: "Happy Clients" },
  { end: 6, suffix: "", label: "Core Capabilities" },
];

/* ------------------------------------------------------------------ */
/*  HELPERS                                                            */
/* ------------------------------------------------------------------ */

const OR = "#ea580c";
const wrap = (w = "1200px") => ({ maxWidth: w, margin: "0 auto" });
const grid = (min, gap = "24px", extra = {}) => ({ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap, ...extra });
const card = { background: "#fff", border: "1px solid #e2e8f0", borderRadius: "20px", boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)" };

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
    <div ref={ref} style={{ height: "100%", opacity: inView ? 1 : 0, transform: inView ? "none" : from, transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms` }}>
      {children}
    </div>
  );
}

function CountUp({ end, suffix = "" }) {
  const [ref, inView] = useInView(0.4);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / 1600, 1);
      setV(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return <div aria-hidden="true" style={{ position: "fixed", top: 0, left: 0, height: "3px", width: `${pct}%`, background: "linear-gradient(90deg, #ea580c, #fb923c)", zIndex: 9999 }} />;
}

function Styles() {
  return (
    <style>{`
      @keyframes abxFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
      @keyframes abxBlob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(34px,-26px) scale(1.14); } }
      @keyframes abxFade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
      @keyframes abxShimmer { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
      @keyframes abxPulse { 0% { box-shadow: 0 0 0 0 rgba(234,88,12,0.45); } 70% { box-shadow: 0 0 0 14px rgba(234,88,12,0); } 100% { box-shadow: 0 0 0 0 rgba(234,88,12,0); } }

      .abx-hero-in > * { animation: abxFade 0.8s ease both; }
      .abx-hero-in > *:nth-child(2) { animation-delay: 0.1s; }
      .abx-hero-in > *:nth-child(3) { animation-delay: 0.2s; }
      .abx-hero-in > *:nth-child(4) { animation-delay: 0.3s; }
      .abx-grad { background: linear-gradient(90deg, #fb923c, #ea580c, #fb923c); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: abxShimmer 5s linear infinite; }
      .abx-float { animation: abxFloat 6s ease-in-out infinite; }
      .abx-lift { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
      .abx-lift:hover { transform: translateY(-6px); box-shadow: 0 22px 40px -14px rgba(15,23,42,0.18) !important; border-color: #fdba74 !important; }
      .abx-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 26px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease; }
      .abx-btn:hover { transform: translateY(-2px); }
      .abx-btn-primary { background: #ea580c; color: #fff; box-shadow: 0 10px 24px rgba(234,88,12,0.3); }
      .abx-btn-primary:hover { box-shadow: 0 14px 30px rgba(234,88,12,0.4); }
      .abx-btn-ghost { background: rgba(255,255,255,0.08); color: #fff; border: 1px solid rgba(255,255,255,0.25); }
      .abx-btn-ghost:hover { background: rgba(255,255,255,0.16); }
      .abx-chip { transition: all 0.25s ease; }
      .abx-chip:hover { background: #ea580c !important; color: #fff !important; border-color: #ea580c !important; transform: translateY(-3px); }
      .abx-link { transition: gap 0.2s ease; }
      .abx-link:hover { gap: 12px !important; }
      @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
    `}</style>
  );
}

function Heading({ label, title, highlight, text, light = false }) {
  return (
    <Reveal>
      <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
        <span style={{ color: light ? "#fb923c" : OR, fontWeight: 700, fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase" }}>{label}</span>
        <h2 style={{ color: light ? "#fff" : "#0f172a", fontSize: "2.3rem", fontWeight: 800, lineHeight: 1.2, margin: "10px 0 14px" }}>
          {title} <span style={{ color: OR }}>{highlight}</span>
        </h2>
        {text && <p style={{ color: light ? "#94a3b8" : "#64748b", fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}>{text}</p>}
      </div>
    </Reveal>
  );
}

const iconBox = (size = 52) => ({ width: size, height: size, borderRadius: "14px", background: "#fff7ed", color: OR, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 });

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

function About() {
  const blob = (extra) => ({ position: "absolute", borderRadius: "50%", filter: "blur(70px)", opacity: 0.3, background: OR, animation: "abxBlob 10s ease-in-out infinite", ...extra });

  return (
    <main style={{ fontFamily: "inherit", color: "#0f172a", overflowX: "hidden" }}>
      <ScrollProgress />
      <Styles />

      {/* 1. HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", padding: "110px 24px 96px" }}>
        <div aria-hidden="true" style={blob({ width: "340px", height: "340px", top: "-100px", left: "-80px" })} />
        <div aria-hidden="true" style={blob({ width: "280px", height: "280px", bottom: "-110px", right: "-60px", animationDelay: "3s" })} />

        <div style={{ ...wrap(), position: "relative", zIndex: 1, ...grid(320, "56px", { alignItems: "center" }) }}>
          <div className="abx-hero-in">
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(251,146,60,0.12)", color: "#fb923c", border: "1px solid rgba(251,146,60,0.35)", padding: "7px 16px", borderRadius: "999px", fontSize: "12px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "22px" }}>
              <Sparkles size={14} /> About Us
            </span>
            <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
              Empowering Businesses <span className="abx-grad">Through Technology &amp; Innovation.</span>
            </h1>
            <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.75, margin: "0 0 32px", maxWidth: "560px" }}>
              At SaiTeja Infotech Private Limited, we create impactful digital solutions by combining technology, creativity, and expertise. Our mission is to help businesses transform challenges into opportunities through reliable IT services and innovative solutions.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link className="abx-btn abx-btn-primary" to="/contact">Contact Us <ArrowRight size={17} /></Link>
              <Link className="abx-btn abx-btn-ghost" to="/services">Our Services</Link>
            </div>
          </div>

          <div className="abx-float" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "24px", padding: "30px", backdropFilter: "blur(10px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
              <div style={{ ...iconBox(44), background: OR, color: "#fff" }}><MapPin size={20} /></div>
              <div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: "16px" }}>Tirupati, Andhra Pradesh</div>
                <div style={{ color: "#94a3b8", fontSize: "13px" }}>Serving clients across India</div>
              </div>
            </div>
            {[
              ["Custom Software & Web", Code2],
              ["Mobile Apps (Android & iOS)", Smartphone],
              ["Cloud, DevOps & IT Consulting", Cloud],
            ].map(([t, Icon]) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.1)", color: "#e2e8f0", fontSize: "15px", fontWeight: 600 }}>
                <Icon size={18} color="#fb923c" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ ...wrap(), ...grid(320, "64px", { alignItems: "center" }) }}>
          <Reveal direction="left">
            <div>
              <span style={{ color: OR, fontWeight: 700, fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase" }}>Who We Are</span>
              <h2 style={{ fontSize: "2.4rem", fontWeight: 800, lineHeight: 1.2, margin: "10px 0 20px" }}>
                Driving Innovation Through <span style={{ color: OR }}>technology.</span>
              </h2>
              <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                SaiTeja Infotech Private Limited delivers innovative IT solutions that help businesses grow, adapt, and succeed in the digital era. We combine technology, creativity, and expertise to build reliable solutions that create real business value.
              </p>
              <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                Our team focuses on software development, web solutions, cloud technologies, and digital transformation services, helping organizations turn ideas into impactful digital experiences.
              </p>
              <p style={{ color: "#475569", fontSize: "16px", lineHeight: 1.8, marginBottom: "24px" }}>
                Based in Tirupati, we work closely with startups, growing companies and established organizations, listening first and building solutions that are simple to use, secure, and ready to scale.
              </p>
              <div style={{ display: "grid", gap: "12px" }}>
                {highlights.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", fontWeight: 600, color: "#1e293b", fontSize: "15px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#fff7ed", color: OR, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Check size={15} strokeWidth={3} /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div style={{ position: "relative" }}>
              <figure style={{ margin: 0, borderRadius: "28px", overflow: "hidden", boxShadow: "0 30px 60px -20px rgba(15,23,42,0.35)", border: "1px solid #fed7aa" }}>
                <img src={profileImage} alt="Saiteja Infotech Private Limited" style={{ width: "100%", display: "block", objectFit: "cover" }} />
              </figure>
              <div className="abx-float" style={{ position: "absolute", left: "-14px", bottom: "28px", background: "#fff", borderRadius: "16px", padding: "14px 20px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 16px 32px rgba(234,88,12,0.18)", border: "1px solid #ffedd5" }}>
                <div style={{ ...iconBox(40), background: OR, color: "#fff" }}><Award size={20} /></div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "15px" }}>Quality First</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Reliable delivery, every time</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. STATS */}
      <section style={{ background: "linear-gradient(135deg, #ea580c, #c2410c)", padding: "56px 24px" }}>
        <div style={{ ...wrap("1100px"), ...grid(170, "28px"), textAlign: "center" }}>
          {stats.map(({ end, suffix, label }, i) => (
            <Reveal key={label} delay={i * 100}>
              <div style={{ color: "#fff", fontSize: "3rem", fontWeight: 800, lineHeight: 1 }}><CountUp end={end} suffix={suffix} /></div>
              <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 600, marginTop: "8px" }}>{label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section style={{ padding: "96px 24px", background: "#f8fafc" }}>
        <div style={wrap()}>
          <Heading label="What Drives Us" title="Our mission," highlight="vision & purpose." text="The ideas that guide every project we take on and every relationship we build." />
          <div style={{ ...grid(320, "28px"), marginTop: "52px" }}>
            {[
              { icon: Target, title: "Our Mission", text: "To deliver innovative technology solutions that help businesses improve efficiency, accelerate growth, and achieve their digital transformation goals through reliable IT services." },
              { icon: Eye, title: "Our Vision", text: "To become a trusted global technology partner by creating scalable, secure, and future-ready solutions that empower businesses in the digital era." },
            ].map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 120}>
                <article className="abx-lift" style={{ ...card, height: "100%", padding: "36px 32px", borderTop: `4px solid ${OR}` }}>
                  <div style={{ ...iconBox(56), marginBottom: "20px" }}><Icon size={26} /></div>
                  <h3 style={{ fontSize: "22px", fontWeight: 800, margin: "0 0 12px" }}>{title}</h3>
                  <p style={{ color: "#475569", fontSize: "15.5px", lineHeight: 1.75, margin: 0 }}>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={wrap()}>
          <Heading label="Core Values" title="The values we" highlight="live by." text="Five principles that shape how we work with our clients and with each other." />
          <div style={{ ...grid(230, "22px"), marginTop: "52px" }}>
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="abx-lift" style={{ ...card, height: "100%", padding: "28px 24px", textAlign: "left" }}>
                  <div style={{ ...iconBox(48), marginBottom: "16px" }}><Icon size={22} /></div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ color: "#64748b", fontSize: "14.5px", lineHeight: 1.65, margin: 0 }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT WE DO */}
      <section style={{ padding: "96px 24px", background: "#f8fafc" }}>
        <div style={wrap()}>
          <Heading label="What We Do" title="One team," highlight="many capabilities." text="From building software to finding the right talent, we support organizations at every step." />
          <div style={{ ...grid(340, "24px"), marginTop: "52px" }}>
            {expertise.map(({ icon: Icon, label, url, text }, i) => (
              <Reveal key={label} delay={(i % 3) * 100}>
                <Link to={url} className="abx-lift" style={{ ...card, height: "100%", boxSizing: "border-box", padding: "28px", display: "flex", gap: "18px", textDecoration: "none", color: "inherit" }}>
                  <div style={iconBox(52)}><Icon size={24} /></div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px", color: "#0f172a" }}>{label}</h3>
                    <p style={{ color: "#64748b", fontSize: "14.5px", lineHeight: 1.65, margin: "0 0 12px" }}>{text}</p>
                    <span className="abx-link" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: OR, fontWeight: 700, fontSize: "14px" }}>Learn more <ArrowRight size={15} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link className="abx-link" to="/services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: OR, fontWeight: 700, textDecoration: "none" }}>
              Explore all services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY PARTNER WITH US */}
      <section style={{ padding: "96px 24px", background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
        <div style={wrap()}>
          <Heading light label="Why Partner With Us" title="What sets us" highlight="apart." text="A practical, transparent approach that keeps your project on track from the first call to long after launch." />
          <div style={{ ...grid(320, "22px"), marginTop: "52px" }}>
            {differentiators.map(({ title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 100}>
                <div className="abx-lift" style={{ height: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "18px", padding: "28px" }}>
                  <div style={{ color: "#fb923c", fontWeight: 800, fontSize: "13px", letterSpacing: "1px", marginBottom: "10px" }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "14.5px", lineHeight: 1.7, margin: 0 }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGIES */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={wrap("1000px")}>
          <Heading label="Our Toolkit" title="Technologies we" highlight="work with." text="Modern, proven tools that help us build secure, scalable and maintainable products." />
          <Reveal delay={100}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "44px" }}>
              {techList.map((t) => (
                <span key={t} className="abx-chip" style={{ background: "#fff7ed", color: OR, border: "1px solid #ffedd5", fontSize: "14px", fontWeight: 700, padding: "10px 20px", borderRadius: "999px", cursor: "default" }}>{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. JOURNEY */}
      <section style={{ padding: "96px 24px", background: "#f8fafc" }}>
        <div style={wrap()}>
          <Heading label="Our Journey" title="Growing with" highlight="purpose." text="A steady path built on trust, learning and practical results." />
          <div style={{ position: "relative", marginTop: "60px" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: "27px", left: "8%", right: "8%", height: "2px", background: "linear-gradient(90deg, #fdba74, #ffedd5)" }} />
            <div style={grid(230, "28px")}>
              {journey.map(({ title, text }, i) => (
                <Reveal key={title} delay={i * 120}>
                  <div style={{ textAlign: "center", position: "relative" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: OR, color: "#fff", fontWeight: 800, fontSize: "17px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", animation: i === 0 ? "abxPulse 2.4s infinite" : "none" }}>
                      0{i + 1}
                    </div>
                    <div className="abx-lift" style={{ ...card, padding: "24px 22px" }}>
                      <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>{title}</h3>
                      <p style={{ color: "#64748b", fontSize: "14.5px", lineHeight: 1.65, margin: 0 }}>{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <Reveal>
          <div style={{ position: "relative", overflow: "hidden", ...wrap(), borderRadius: "28px", padding: "72px 32px", textAlign: "center", background: "linear-gradient(135deg, #0f172a, #1e293b)" }}>
            <div aria-hidden="true" style={blob({ width: "260px", height: "260px", top: "-90px", left: "-60px" })} />
            <div aria-hidden="true" style={blob({ width: "230px", height: "230px", bottom: "-90px", right: "-40px", animationDelay: "3s" })} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ color: "#fff", fontSize: "2.3rem", fontWeight: 800, lineHeight: 1.2, margin: "0 0 14px" }}>
                Have a vision? <span style={{ color: "#fb923c" }}>Let’s move it forward.</span>
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "620px", margin: "0 auto 30px" }}>
                Explore how Saiteja Infotech Private Limited can support your organization’s next opportunity.
              </p>
              <Link className="abx-btn abx-btn-primary" to="/contact">Start a Conversation <ArrowRight size={18} /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default About;