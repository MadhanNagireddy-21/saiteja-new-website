import ServicePageTemplate from "./ServicePageTemplate";
import softwareImage from "../assets/services/custom-development.jpg";

const offerings = [
  {
    title: "Customized Software Solutions",
    description:
      "Software applications developed according to your specific business requirements, goals and workflows. We build user-friendly, reliable systems tailored from scratch so your team gets the exact features needed without paying for unnecessary bloat.",
  },
  {
    title: "Business Process Automation",
    description:
      "Automate repetitive tasks and business processes to improve productivity and reduce manual effort. By streamlining daily approvals, data entry, and routine alerts, your team saves valuable hours and minimizes human errors.",
  },
  {
    title: "Scalable Software Applications",
    description:
      "Flexible software solutions designed to support your business as it grows and evolves. Built on modern architecture, these applications effortlessly handle increasing users, larger data volumes, and new feature additions without slowing down.",
  },
  {
    title: "Software Integration",
    description:
      "Connect your software applications and business systems to improve data flow and operational efficiency. We bridge the gap between your CRM, ERP, payment gateways, and third-party tools so all your data syncs smoothly in real time.",
  },
];

const benefits = [
  "100% custom-built around your unique business goals",
  "Automates repetitive tasks to save hours every week",
  "Built to scale smoothly as users and data grow",
  "Enterprise-grade security with reliable ongoing support",
];

export default function CustomSoftwareDevelopment() {
  return (
    <ServicePageTemplate
      title="Custom Software Development"
      subtitle="Building customized software solutions to solve business challenges and support growth."
      image={softwareImage}
      overviewTitle="Software designed around your business"
      overview="Every growing business eventually hits a wall with generic, off-the-shelf software that forces teams to work around rigid templates. We partner with you to design, build, and deploy custom applications engineered around your exact business logic, existing tools, and future goals. From initial architecture and UI/UX design to testing, deployment, and ongoing support, we handle the entire development lifecycle—delivering secure, maintainable software that cuts manual effort and scales effortlessly as your operations expand."
      offerings={offerings}
      benefits={benefits}
    />
  );
}
