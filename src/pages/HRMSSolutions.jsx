import ServicePageTemplate from "./ServicePageTemplate";
import image from "../assets/services/hr-ms.jpg";

export default function HRMSSolutions() {
  return (
    <ServicePageTemplate
      title="HRMS Solutions"
      subtitle="Simplifying employee management and everyday HR operations."
      image={image}
      overviewTitle="Simplifying workforce management"
      overview="Managing attendance, leave requests, onboarding, and monthly payroll manually takes hours away from strategic HR work. Our HRMS solutions bring your entire employee lifecycle into one clean, easy-to-use digital system built for growing teams.

With automated attendance logs, error-free payroll calculations, self-service employee portals, and compliance-ready reporting, you gain complete visibility into your workforce while giving employees a smoother experience."
      offerings={[
        {
          title: "Employee Management",
          description:
            "Organizing employee information and supporting employee administration.A centralized digital directory keeps profiles, documents, and role histories neatly structured and easy to access anytime.",
        },
        {
          title: "Attendance Management",
          description:
            "Supporting employee attendance tracking and workforce records.Automated check-ins, leave approvals, and shift logs eliminate manual registers and give clear real-time visibility across teams.",
        },
        {
          title: "Payroll Process Support",
          description:
            "Supporting payroll-related workflows and employee compensation processes.Streamlined salary calculations, tax deductions, and payslip generation ensure accurate, on-time payouts with minimal manual effort.",
        },
        {
          title: "HR Operations Management",
          description:
            "Simplifying everyday HR activities and workforce administration.From smooth employee onboarding to performance tracking, routine HR tasks run faster so your team can focus on people.",
        },
      ]}
      benefits={[
        "Error-free attendance, leave, and payroll in one place",
        "Saves hours every week by automating HR paperwork",
        "Self-service employee portals for better workplace transparency",
        "Compliance-ready workforce reports available at a click",
      ]}
    />
  );
}
