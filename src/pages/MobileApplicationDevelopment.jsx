import ServicePageTemplate from "./ServicePageTemplate";
import mobileImage from "../assets/services/app-development.jpg";

const offerings = [
  {
    title: "Android Application Development",
    description:
      "We build intuitive Android applications designed to meet business requirements and provide smooth experiences for users. Built for speed and wide device compatibility, our apps deliver reliable performance across smartphones and tablets.",
  },
  {
    title: "iOS Application Development",
    description:
      "We develop user-friendly iOS applications that help businesses connect with customers through Apple mobile devices. Crafted with clean interfaces and smooth navigation, our apps offer a refined and secure user experience.",
  },
  {
    title: "Custom Mobile Applications",
    description:
      "We create customized mobile applications tailored to specific business needs, workflows and customer requirements. From customer booking apps to internal team tools, every feature is designed to boost daily efficiency.",
  },
  {
    title: "Mobile App Integration",
    description:
      "We integrate mobile applications with business systems and services to simplify operations and improve connectivity. Seamless API and payment gateway links keep your app data synced with your backend in real time.",
  },
];

const benefits = [
  "Fast, intuitive iOS and Android user experiences",
  "Smooth real-time performance built for daily reliability",
  "Seamless integration with payments and backend systems",
  "Scalable app architecture ready for growing user traffic",
];

export default function MobileApplicationDevelopment() {
  return (
    <ServicePageTemplate
      title="Mobile Application Development"
      subtitle="Building intuitive and scalable mobile applications that connect businesses with their customers."
      image={mobileImage}
      overviewTitle="Mobile experiences built for your business"
      overview="Today's customers expect instant access to your services right from their smartphones. We build native and cross-platform iOS and Android applications that blend intuitive interfaces with rock-solid backend performance, ensuring smooth navigation even under heavy usage. From customer-facing apps that drive engagement and repeat orders to internal field-force apps that simplify daily reporting, we take your mobile product from concept and prototype to App Store and Play Store launch."
      offerings={offerings}
      benefits={benefits}
    />
  );
}
