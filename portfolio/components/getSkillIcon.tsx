import {
  SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3,
  SiReact, SiNodedotjs, SiExpress, SiDjango, SiFlask, SiSpringboot,
  SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiApachespark, SiJquery,
  SiPostgresql, SiMongodb, SiFirebase, SiGooglecloud,
  SiDocker, SiKubernetes, SiJenkins, SiGit, SiTableau, SiPowers,
  SiEclipseide, SiApachehive, SiMysql,
  SiJirasoftware
} from "react-icons/si";

import { FaDatabase, FaUserGraduate, FaJava, FaAws, FaCode } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { AiOutlineTool } from "react-icons/ai";
import { TbBrandCpp } from "react-icons/tb";
import { IconType } from "react-icons";
import { JSX } from "react";

const skillMap: Record<string, IconType> = {
  "Python": SiPython,
  "Java": FaJava,
  "C++": SiCplusplus,
  "C": TbBrandCpp,
  "JavaScript": SiJavascript,
  "SAP ABAP": FaDatabase,
  "HTML": SiHtml5,
  "CSS": SiCss3,

  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Django": SiDjango,
  "Flask": SiFlask,
  "Spring Boot": SiSpringboot,
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "Scikit-learn": SiScikitlearn,
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "Spark": SiApachespark,
  "jQuery": SiJquery,

  "SQL": FaDatabase,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Firebase": SiFirebase,
  "Hadoop": FaDatabase,
  "Hive": SiApachehive,

  "AWS": FaAws,
  "Azure": VscAzure,
  "Google Cloud Platform (GCP)": SiGooglecloud,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "Jenkins": SiJenkins,
  "Git": SiGit,
  "CI/CD": AiOutlineTool,

  "JIRA": SiJirasoftware,
  "Postman": AiOutlineTool,
  "VS Code": FaCode,
  "Eclipse": SiEclipseide,
  "Tableau": SiTableau,
  "Power BI": SiPowers,
  "Matplotlib": AiOutlineTool,
  "Plotly": AiOutlineTool,

  "Agile Software Development": FaUserGraduate,
  "Microsoft Azure Fundamentals": FaUserGraduate,

  "Quick Learner": FaUserGraduate,
  "Strong Decision Maker": FaUserGraduate,
  "Complex Problem Solver": FaUserGraduate,
  "Innovative": FaUserGraduate,
  "Flexible": FaUserGraduate,

  "GenAI": AiOutlineTool,
  "LLMs": AiOutlineTool,
  "NLP": AiOutlineTool
};

export const getSkillIcon = (name: string): JSX.Element => {
  const Icon = skillMap[name];
  return Icon ? <Icon className="inline-block mr-1" /> : <AiOutlineTool className="inline-block mr-1" />;
};
