import CertificationBadge from "../components/ui/CertificationBadge";

const Certifications = () => {
  const certifications = [
    // Local PDFs (make sure filenames match exactly in public/certifications/)
    { title: "Agile Scrum", pdfPath: "/certifications/AgileScrum.pdf" },
    { title: "Artificial Intelligence", pdfPath: "/certifications/AI (2).pdf" },
    { title: "Cloud Computing", pdfPath: "/certifications/CloudComputing.pdf" },
    { title: "DBMS", pdfPath: "/certifications/DBMS.pdf" },
    { title: "DSA using JAVA", pdfPath: "/certifications/DSA-JAVA.pdf" },
    { title: "MERN Stack", pdfPath: "/certifications/MERN.pdf" },
    { title: "Python", pdfPath: "/certifications/Python.pdf" },
    { title: "Natural Language Processing", pdfPath: "/certifications/NLP.pdf" },

    // Google Skill Badges
    {
      title: "Transformer Model and BERT Model",
      externalUrl:
        "https://www.cloudskillsboost.google/public_profiles/9c7fd252-ab9f-4015-a025-e05d82ae835a/badges/17132098",
    },
    {
      title: "Introduction to Large Language Models",
      externalUrl:
        "https://www.cloudskillsboost.google/public_profiles/9c7fd252-ab9f-4015-a025-e05d82ae835a/badges/17126849",
    },
    {
      title: "MLOps for Generative AI",
      externalUrl:
        "https://www.cloudskillsboost.google/public_profiles/9c7fd252-ab9f-4015-a025-e05d82ae835a/badges/14059815",
    },
  ];

  return (
    <div className="py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-foreground">Certifications</h1>
        <p className="text-xl text-muted-foreground">
          Continuous learning across AI/ML, data science, and software engineering
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certifications.map((cert) => (
          <CertificationBadge
            key={cert.title}
            title={cert.title}
            pdfPath={cert.pdfPath}
            externalUrl={cert.externalUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
