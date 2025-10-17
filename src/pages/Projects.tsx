import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "CipherX – AI-Powered Cybersecurity App",
      description: "Developed a mobile app in Flutter + Python to detect APK vulnerabilities via static & dynamic analysis. Achieved 80% accuracy in anomaly detection using a Random Forest model and produced explainable reports for end-users. Currently preparing an IEEE paper based on its novel AI-driven approach.",
      githubUrl: "https://github.com/swaggyV08/CypherXAI.git",
    },
    {
      title: "MedOracle – Multilingual Medical Chatbot",
      description: "Engineered a Streamlit + NLP chatbot using SpaCy and KNN to answer medical queries across 3+ languages. Integrated voice input and MongoDB for conversation history. Delivered accurate intent recognition for improved accessibility, demonstrating NLP and cloud integration expertise.",
      githubUrl: "https://github.com/swaggyV08/MedOracle.git",
    },
    {
      title: "Online Antique Bidding System",
      description: "Built a full-stack MERN web app for real-time bidding and secure transactions. Implemented JWT authentication, live auctions via WebSockets, and advanced search. Managed front-end design and back-end logic for seamless buyer-seller interactions.",
      githubUrl: "https://github.com/swaggyV08/Online-Antique-Bidding-System.git",
    },
    {
      title: "Miniprojects",
      description: "A growing collection of AI, Machine Learning, and Deep Learning mini projects built using Python.",
      githubUrl: "https://github.com/swaggyV08/Mini-Projects.git",
    },
    {
      title: "Gym Management System",
      description: "A Gym Management System built with Streamlit, Python, and MySQL. This application helps to manage gym members, trainers, attendance, and more. You can view and add members, view and record attendance, and manage trainers.",
      githubUrl: "https://github.com/swaggyV08/Gym-Management-System.git",
    },
  ];

  return (
    <div className="py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-foreground">Projects</h1>
        <p className="text-xl text-muted-foreground">
          Building innovative solutions at the intersection of AI, security, and data science
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="min-h-[300px]">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
