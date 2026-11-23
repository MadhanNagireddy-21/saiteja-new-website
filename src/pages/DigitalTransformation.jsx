import ServicePageTemplate from "./ServicePageTemplate";
import image from "../assets/services/digital-transformation.jpg";

export default function DigitalTransformation() {
  return (
    <ServicePageTemplate
      title="Digital Transformation"
      subtitle="Modernizing business operations through digital technology."
      image={image}
      overviewTitle="Transforming the way businesses operate"
      overview="Relying on spreadsheets, paper approvals, and disconnected tools creates costly delays across departments. We help traditional and growing organizations transition smoothly to modern digital workflows by automating repetitive tasks and connecting your core business systems.

Rather than disrupting your daily operations, we implement practical, step-by-step upgrades—combining cloud tools, data dashboards, and process automation so your team works faster with fewer errors."
      offerings={[
        {
          title: "Business Process Modernization",
          description:
            "Modernizing existing business processes through suitable digital solutions. Replacing outdated manual methods with cloud-ready tools helps your teams collaborate faster and respond quickly to market changes.",
        },
        {
          title: "Workflow Automation",
          description:
            "Reducing repetitive manual tasks through automated workflows. By automating routine approvals, notifications, and data transfers, you save hours every week and eliminate costly human errors.",
        },
        {
          title: "Digital Technology Integration",
          description:
            "Connecting digital tools and business systems for smoother operations.Unifying your separate software apps ensures real-time data visibility across departments without duplicate data entry.",
        },
        {
          title: "Operational Improvement",
          description:
            "Using technology to improve productivity and business efficiency.Smart digital upgrades streamline daily execution, lower operational costs, and help your team deliver consistent results.",
        },
      ]}
      benefits={[
        "Replaces outdated manual work with smart automation",
        "Connects departments with real-time, error-free data flow",
        "Boosts team productivity through modern cloud workflows",
        "Future-ready operations built to adapt and scale fast",
      ]}
    />
  );
}
