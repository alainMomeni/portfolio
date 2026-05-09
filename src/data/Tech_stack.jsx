import reactIcon      from "../assets/react.svg";
import nodejsIcon     from "../assets/nodejs.svg";
import powerappsIcon  from "../assets/Powerapps.svg";
import postgresqlIcon from "../assets/postgresql.svg";

const PythonIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 4C17.4 4 13 6.3 13 9.8V14.5h8.5V16H11C7.1 16 4 19.8 4 24s3.1 8 7 8h3v-5.5C14 23.1 17 21 20.5 21h7C31 21 34 18.5 34 15V9.8C34 6.3 29.6 4 24 4z"
      fill="#3776AB"
    />
    <circle cx="21" cy="9.5" r="1.5" fill="white" />
    <path
      d="M24 44C30.6 44 35 41.7 35 38.2V33.5H26.5V32H37C40.9 32 44 28.2 44 24s-3.1-8-7-8h-3v5.5C34 24.9 31 27 27.5 27h-7C17 27 14 29.5 14 33v5.2C14 41.7 18.4 44 24 44z"
      fill="#FFD343"
    />
    <circle cx="27" cy="38.5" r="1.5" fill="white" />
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none">
    <ellipse cx="24" cy="10" rx="13" ry="4.5" fill="#336791" />
    <rect    x="11" y="10" width="26" height="10" fill="#336791" opacity="0.80" />
    <ellipse cx="24" cy="20" rx="13" ry="4.5" fill="#4A90C4" />
    <rect    x="11" y="20" width="26" height="10" fill="#336791" opacity="0.65" />
    <ellipse cx="24" cy="30" rx="13" ry="4.5" fill="#4A90C4" />
    <rect    x="11" y="30" width="26" height="7"  fill="#336791" opacity="0.50" />
    <ellipse cx="24" cy="37" rx="13" ry="4.5" fill="#336791" />
  </svg>
);

export const TECH_STACK = [
  {
    id: "react",
    name: "React",
    description:
      "Crafting high-performance, responsive user interfaces and dynamic single-page applications that deliver seamless, engaging experiences at scale.",
    icon: <img src={reactIcon} alt="React" className="w-12 h-12" />,
  },
  {
    id: "nodejs",
    name: "Node.js",
    description:
      "Architecting and developing secure, scalable RESTful APIs and microservices to power complex enterprise applications.",
    icon: <img src={nodejsIcon} alt="Node.js" className="w-12 h-12" />,
  },
  {
    id: "mpp",
    name: "Power Platform",
    description:
      "Automating business workflows and building custom Low-Code applications to accelerate digital transformation and reduce operational costs.",
    icon: <img src={powerappsIcon} alt="Microsoft Power Platform" className="w-12 h-12" />,
  },
  {
    id: "python",
    name: "Python",
    description:
      "Building robust automation pipelines, data processing scripts, and backend services that eliminate manual work and surface actionable business insights.",
    icon: <PythonIcon />,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description:
      "Designing and optimizing relational database schemas, complex queries, and data pipelines to ensure integrity, performance, and reliability at any scale.",
    icon: <img src={postgresqlIcon} alt="PostgreSQL" className="w-12 h-12" />,
  },
];