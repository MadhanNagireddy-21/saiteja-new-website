import ServicePageTemplate from "./ServicePageTemplate";
import websiteImage from "../assets/services/web-development.jpg";

const offerings = [
  {
    title: "Responsive Website Design",
    description:
      "We design responsive websites that adapt to different screen sizes and provide consistent experiences across desktops, tablets and mobile devices. Every layout, button, and visual element adjusts automatically so your site looks sharp everywhere.",
  },
  {
    title: "User-Friendly Interfaces",
    description:
      "We create intuitive website interfaces that make navigation simple and help visitors find the information they need. Clean layouts and clear user journeys keep visitors engaged and guide them smoothly toward taking action.",
  },
  {
    title: "Business Website Development",
    description:
      "We develop professional websites that showcase your business, services and offerings while strengthening your online presence. Built to build instant trust and credibility, your site works around the clock to attract and convert potential clients.",
  },
  {
    title: "Website Optimization",
    description:
      "We focus on website performance, usability and accessibility to provide smooth and reliable browsing experiences. Fast loading speeds and clean code keep bounce rates low and ensure effortless browsing for every visitor.",
  },
];

const benefits = [
  "Mobile-ready designs that look sharp on every screen",
  "Fast-loading, SEO-friendly pages built for higher conversions",
  "Clean, intuitive navigation that builds instant brand trust",
  "Easy-to-update layouts with zero technical hassle",
];

export default function WebsiteDevelopment() {
  return (
    <ServicePageTemplate
      title="Website Development"
      subtitle="Creating responsive and user-friendly websites that strengthen your digital presence."
      image={websiteImage}
      overviewTitle="Websites designed for your business"
      overview="Your website is often the very first interaction a potential client has with your brand, and slow or outdated designs cost you credibility. We combine clean, modern visual design with solid front-end engineering to create websites that load fast, rank well, and guide visitors smoothly toward taking action. Whether you need a high-converting corporate site, a product showcase, or a full brand refresh, every page is built mobile-first, SEO-ready, and easy for your team to manage and update."
      offerings={offerings}
      benefits={benefits}
    />
  );
}
