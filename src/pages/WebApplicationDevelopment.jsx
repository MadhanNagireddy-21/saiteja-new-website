import ServicePageTemplate from "./ServicePageTemplate";
import image from "../assets/services/branding-digital.jpg";

export default function WebApplicationDevelopment() {
  return (
    <ServicePageTemplate
      title="Web Application Development"
      subtitle="Building secure and scalable web applications for modern businesses."
      image={image}
      overviewTitle="Web applications designed for your business"
      overview="Complex business operations need more than a static website—they require powerful, browser-based platforms accessible anytime, anywhere. We develop custom web applications such as client portals, SaaS products, booking engines, and internal management dashboards tailored to your daily workflows.

Built with modern frameworks, role-based security, and seamless third-party API integrations, our web apps centralize your data and keep your teams connected in real time.."
      offerings={[
        {
          title: "Custom Web Applications",
          description:
            "Web applications developed according to your business requirements and workflows. Built for seamless browser access, these tailored platforms simplify complex daily tasks and keep your entire team connected from anywhere.",
        },
        {
          title: "Secure Application Development",
          description:
            "Applications developed with a focus on data protection, security and reliability. With role-based access controls and encrypted data handling, your sensitive business information stays safe and always accessible.",
        },
        {
          title: "Scalable Web Solutions",
          description:
            "Flexible applications designed to support growing business requirements. Engineered on modern architecture, our web apps effortlessly handle higher traffic, expanding teams, and new features without slowing down.",
        },
        {
          title: "Business System Integration",
          description:
            "Integration of web applications with existing business systems and tools. We connect your web platform directly with your CRM, databases, and third-party APIs so information flows smoothly in real time.",
        },
      ]}
      benefits={[
        "Secure, browser-based access from anywhere, anytime",
        "Centralizes complex workflows into one unified dashboard",
        "High-speed performance engineered for heavy daily workloads",
        "Effortless API integrations with your existing business tools",
      ]}
    />
  );
}
