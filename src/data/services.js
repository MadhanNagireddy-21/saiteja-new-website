import { Code2, BrainCircuit, Cloud } from "lucide-react";

import softwareImage from "../assets/services/custom-development.jpg";
import itImage from "../assets/services/web-development.jpg";
import cloudImage from "../assets/services/app-development.jpg";
import webAppImage from "../assets/services/branding-digital.jpg";
import consultingImage from "../assets/services/it-consulting.jpg";
import transformationImage from "../assets/services/digital-transformation.jpg";
import hrmsImage from "../assets/services/hr-ms.jpg";
import cloudDevOpsImage from "../assets/services/cloud-devops.jpg";

const services = [
  {
    icon: Code2,
    image: softwareImage,
    number: "01",
    title: "Custom Software Development",
    highlights: [
      "Customized software applications",
      "Business process solutions",
      "Operational efficiency",
      "Scalable software solutions",
    ],
    description:
      "Off-the-shelf software rarely fits every part of your business, so we build tailored applications from the ground up. Our solutions automate repetitive tasks, eliminate daily bottlenecks, and scale smoothly as your company grows.",
    link: "/services/custom-software-development",
  },
  {
    icon: BrainCircuit,
    image: itImage,
    number: "02",
    title: "Website Development",
    highlights: [
      "Responsive website design",
      "User-friendly interfaces",
      "Mobile-friendly websites",
      "Seamless user experiences",
    ],
    description:
      "We craft fast, responsive websites designed to captivate visitors and turn clicks into loyal customers. Enjoy a seamless, user-friendly experience that looks sharp, loads quickly, and performs smoothly on every screen.",
    link: "/services/website-development",
  },
  {
    icon: Cloud,
    image: cloudImage,
    number: "03",
    title: "Mobile Application Development",
    highlights: [
      "Scalable mobile applications",
      "Intuitive user interfaces",
      "Customer engagement",
      "Business process simplification",
    ],
    description:
      "Put your business directly in your customers' pockets with fast, intuitive iOS and Android apps. We build scalable mobile solutions that boost user engagement and streamline your daily operations on the go.",
    link: "/services/mobile-application-development",
  },
  {
    icon: Code2,
    image: webAppImage,
    number: "04",
    title: "Web Application Development",
    highlights: [
      "Custom web applications",
      "Secure application development",
      "Scalable architecture",
      "Business process integration",
    ],
    description:
      "Power your daily operations with custom, browser-based applications built around your exact workflows. We engineer fast, secure, and scalable web apps that handle heavy workloads and simplify complex tasks.",
    link: "/services/web-application-development",
  },
  {
    icon: BrainCircuit,
    image: consultingImage,
    number: "05",
    title: "IT Consulting",
    highlights: [
      "Technology strategy",
      "IT infrastructure assessment",
      "Technology recommendations",
      "Digital solutions planning",
    ],
    description:
      "Cut through the tech noise with clear, practical guidance tailored to your business goals. We help you choose the right tools, optimize your IT setup, and make smart technology investments that pay off.",
    link: "/services/it-consulting",
  },
  {
    icon: BrainCircuit,
    image: transformationImage,
    number: "06",
    title: "Digital Transformation",
    highlights: [
      "Business process modernization",
      "Workflow automation",
      "Digital technology integration",
      "Operational improvement",
    ],
    description:
      "Leave outdated manual processes behind and upgrade how your entire business operates. We modernize your workflows by integrating smart digital tools and automation—boosting speed, accuracy, and daily productivity.",
    link: "/services/digital-transformation",
  },
  {
    icon: Cloud,
    image: hrmsImage,
    number: "07",
    title: "HRMS Solutions",
    highlights: [
      "Employee management",
      "Attendance tracking",
      "Payroll process support",
      "HR operations management",
    ],
    description:
      "Take the hassle out of managing your workforce with an all-in-one HR platform built for modern teams. Automate attendance tracking, simplify payroll, and streamline employee records so you focus on people, not paperwork.",
    link: "/services/hrms-solutions",
  },
  {
    icon: Cloud,
    image: cloudDevOpsImage,
    number: "08",
    title: "Cloud and DevOps Solutions",
    highlights: [
      "Cloud infrastructure",
      "Application deployment",
      "Workflow automation",
      "DevOps practices",
    ],
    description:
      "Keep your applications fast, reliable, and ready to scale without infrastructure headaches. We streamline cloud migrations, automate deployments, and implement DevOps best practices for maximum uptime and effortless growth.",
    link: "/services/cloud-devops-solutions",
  },
];

export default services;
