import ServicePageTemplate from "./ServicePageTemplate";
import image from "../assets/services/it-consulting.jpg";

export default function ITConsulting() {
  return (
    <ServicePageTemplate
      title="IT Consulting"
      subtitle="Making informed technology decisions to support business growth."
      image={image}
      overviewTitle="Technology guidance for your business"
      overview="Investing in the wrong software or cloud setup can drain budgets and slow your team down for years. Our IT consulting service gives you an objective, experienced technology partner to audit your current infrastructure, identify security or performance gaps, and map out a clear technical roadmap.

We help you evaluate vendors, choose scalable tech stacks, and align every technology decision directly with measurable business outcomes and ROI."
      offerings={[
        {
          title: "Technology Strategy",
          description:
            "Technology planning aligned with organizational goals and business priorities. We help you build a clear, practical IT roadmap that reduces unnecessary costs and drives measurable long-term growth.",
        },
        {
          title: "IT Infrastructure Assessment",
          description:
            "Reviewing existing IT infrastructure to identify improvement opportunities. Our thorough audit uncovers security gaps, performance bottlenecks, and outdated tools so your systems run at peak reliability.",
        },
        {
          title: "Technology Recommendations",
          description:
            "Identifying suitable technologies based on business needs and requirements. With unbiased guidance on software, cloud platforms, and modern frameworks, you invest only in tools that truly fit your team.",
        },
        {
          title: "IT Optimization",
          description:
            "Recommending improvements to IT systems, resources and operational processes. Streamlining your workflows and server setup boosts system speed while maximizing the value of your existing tech investments.",
        },
      ]}
      benefits={[
        "Clear technology roadmaps aligned with business goals",
        "Smarter IT spending by eliminating redundant tools",
        "Stronger security through thorough infrastructure audits",
        "Unbiased tech-stack guidance built for long-term growth",
      ]}
    />
  );
}
