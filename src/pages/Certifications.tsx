import CertificationBadge from "../components/ui/CertificationBadge";

const Certifications = () => {
  const certifications = [
    // Local PDFs (make sure filenames match exactly in public/certifications/)
    { title: "Agile Scrum", pdfPath: "/certifications/Agile-Scrum.pdf" },
    { title: "Artificial Intelligence", pdfPath: "/certifications/Artificial-Intelligence.pdf" },
    { title: "Cloud Computing", pdfPath: "/certifications/Cloud-Computing.pdf" },
    { title: "Data Science", pdfPath: "/certifications/Data-Science.pdf" },
    { title: "Deep Learning", pdfPath: "/certifications/Deep-Learning.pdf" },
    { title: "IoT", pdfPath: "/certifications/IoT.pdf" },
    { title: "Programming Fundamentals using Python", pdfPath: "/certifications/Programming-Fundamentals-using-Python.pdf" },

    // Google Skill Badges
    {
      title: "Transformer Model and BERT Model",
      externalUrl:
        "https://www.cloudskillsboost.google/public_profiles/ed682ce7-e603-46d9-9128-d96f88131c02/badges/12574930?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Encoder-Decoder Architecture",
      externalUrl:
        "https://www.cloudskillsboost.google/public_profiles/ed682ce7-e603-46d9-9128-d96f88131c02/badges/11983303?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Attention Mechanism",
      externalUrl:
        "https://www.cloudskillsboost.google/public_profiles/ed682ce7-e603-46d9-9128-d96f88131c02/badges/11609965?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Image Generation",
      externalUrl:
        "https://www.cloudskillsboost.google/public_profiles/ed682ce7-e603-46d9-9128-d96f88131c02/badges/11605862?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Applying AI Principles with Google Cloud",
      externalUrl:
        "https://www.cloudskillsboost.google/public_profiles/ed682ce7-e603-46d9-9128-d96f88131c02/badges/8697593?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "GenAI",
      externalUrl:
        "https://www.cloudskillsboost.google/public_profiles/ed682ce7-e603-46d9-9128-d96f88131c02/badges/8655498?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Large Language Models",
      externalUrl:
        "https://www.cloudskillsboost.google/public_profiles/ed682ce7-e603-46d9-9128-d96f88131c02/badges/8658962?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
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
