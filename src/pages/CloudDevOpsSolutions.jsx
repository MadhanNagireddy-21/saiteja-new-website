import ServicePageTemplate from "./ServicePageTemplate";
import image from "../assets/services/cloud-devops.jpg";

export default function CloudDevOpsSolutions() {
  return (
    <ServicePageTemplate
      title="Cloud and DevOps Solutions"
      subtitle="Supporting reliable cloud infrastructure and efficient application deployment."
      image={image}
      overviewTitle="Building reliable cloud and deployment environments"
      overview="Downtime, slow deployments, and rising server bills can hold back even the best software products. We design and manage resilient cloud environments on AWS, Azure, and Google Cloud that automatically scale with your traffic while keeping infrastructure costs under control.

By setting up automated CI/CD pipelines, containerization, and 24/7 monitoring, we help your development team ship updates faster and keep your applications secure and always online."
      offerings={[
        {
          title: "Cloud Infrastructure",
          description:
            "Supporting adaptable cloud environments for business applications and services.Flexible server setups scale automatically with traffic spikes while keeping performance fast, secure, and cost-effective.",
        },
        {
          title: "Application Deployment",
          description:
            "Supporting consistent and reliable application deployment processes.Streamlined release pipelines ensure smooth, zero-downtime updates so new features reach your users safely and quickly.",
        },
        {
          title: "Workflow Automation",
          description:
            "Automating repetitive development and operational activities.Automated testing, builds, and server provisioning cut down manual errors and free up your engineering team to focus on innovation.",
        },
        {
          title: "DevOps Practices",
          description:
            "Supporting collaboration between development and operations teams.Shared monitoring tools and unified workflows speed up delivery cycles and keep your applications running reliably around the clock.",
        },
      ]}
      benefits={[
        "Maximum uptime with resilient, auto-scaling cloud setups",

        "Faster, zero-downtime releases via automated CI/CD pipelines",

        "Lower cloud bills through smart resource optimization",

        "Enterprise-grade security, automated backups, and 24/7 reliability",
      ]}
    />
  );
}
