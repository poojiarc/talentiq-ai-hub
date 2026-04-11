export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
}

export const services: ServiceData[] = [
  {
    slug: "it-consulting-strategy",
    title: "IT Consulting & Strategy",
    shortDescription: "Strategic technology advisory to align IT with business goals.",
    description: "Our IT consulting services help organizations develop comprehensive technology strategies that drive growth and efficiency. We analyze your current infrastructure, identify opportunities for improvement, and create roadmaps for digital excellence. From technology selection to implementation planning, we ensure every IT decision supports your business objectives.",
    image: "/images/services/it-consulting.jpg",
  },
  {
    slug: "ai-digital-transformation",
    title: "AI & Digital Transformation",
    shortDescription: "Leverage AI to transform operations and unlock new value.",
    description: "We help businesses harness the power of artificial intelligence and machine learning to automate processes, gain deeper insights, and create competitive advantages. Our AI transformation services include strategy development, proof of concept creation, model training, and full-scale deployment of intelligent systems that evolve with your business.",
    image: "/images/services/ai-transformation.jpg",
  },
  {
    slug: "talent-solutions-staffing",
    title: "Talent Solutions & Staffing",
    shortDescription: "AI-powered talent acquisition and workforce management.",
    description: "Our intelligent talent solutions combine AI-driven candidate matching with deep industry expertise to help you find, hire, and retain top technology talent. Whether you need contract staff, permanent hires, or managed teams, we deliver skilled professionals who make an immediate impact on your projects and organizational goals.",
    image: "/images/services/talent-solutions.jpg",
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortDescription: "Custom software solutions built for scale and performance.",
    description: "From web and mobile applications to enterprise platforms and APIs, our software development teams build robust, scalable solutions tailored to your unique requirements. We follow agile methodologies, emphasize clean code and testing, and deliver solutions that are maintainable, secure, and ready for growth.",
    image: "/images/services/software-development.jpg",
  },
  {
    slug: "cloud-consulting",
    title: "Cloud Consulting",
    shortDescription: "Cloud migration, optimization, and management services.",
    description: "Navigate the cloud landscape with confidence. Our cloud consulting services cover migration strategy, architecture design, cost optimization, and ongoing management across AWS, Azure, and Google Cloud. We help you leverage cloud-native technologies to improve scalability, reduce costs, and accelerate innovation.",
    image: "/images/services/cloud-consulting.jpg",
  },
  {
    slug: "data-analytics-bi",
    title: "Data Analytics & BI",
    shortDescription: "Turn data into actionable insights with advanced analytics.",
    description: "Unlock the full potential of your data with our analytics and business intelligence services. We design and implement data warehouses, build interactive dashboards, and develop predictive models that give you real-time visibility into performance and help you make data-driven decisions with confidence.",
    image: "/images/services/data-analytics.jpg",
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    shortDescription: "Proactive IT management and support for seamless operations.",
    description: "Focus on your core business while we handle your IT operations. Our managed services include 24/7 monitoring, help desk support, infrastructure management, security operations, and regular reporting. We proactively identify and resolve issues before they impact your business, ensuring maximum uptime and performance.",
    image: "/images/services/managed-it.jpg",
  },
  {
    slug: "process-automation",
    title: "Process Automation",
    shortDescription: "Streamline workflows with intelligent automation solutions.",
    description: "Eliminate manual bottlenecks and boost productivity with our process automation services. We implement RPA (Robotic Process Automation), workflow automation, and intelligent document processing solutions that reduce errors, save time, and free your team to focus on high-value work that drives business growth.",
    image: "/images/services/process-automation.jpg",
  },
];
