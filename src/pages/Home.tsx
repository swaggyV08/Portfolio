import { Button } from "../components/ui/button";
import { FileDown, Mail, FolderGit2, Award, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import SkillChip from "../components/SkillChip";
import QuickLinkTile from "../components/QuickLinkTile";

const Home = () => {
  const skills = {
    languages: ["Python", "Java", "C++", "JavaScript", "SQL","Dart"],
    devTools: [
      "VS Code",
      "Eclipse",
      "Jupyter Notebook",
      "Google Colab",
      "Google Cloud Platform (GCP)",
      "Android Studio",
      "IntelIJ",
    ],
    technologies: [
      "Streamlit",
      "MySQL",
      "MongoDB",
      "MERN Stack",
      "REST APIs",
      "Static & Dynamic APK Analysis",
      "Cloud Programming",
      "Full Stack Development",
      "Flutter",
    ],
    aiFrameworks: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Random Forest",
      "NLP (SpaCy)",
      "KNN",
      "GenAI",
    ],
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 text-foreground leading-tight">
            Vishnu P
          </h1>
          <p className="text-2xl text-muted-foreground mb-4">
            Final-year CSE · AI/ML, MERN Stack , App Dev and Cybersecurity
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Open to Internships and Full-time
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth hover:glow-cyan"
              asChild
            >
              <Link to="/projects">View Projects</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/certifications">View Certifications</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/virtual-simulations">View Virtual Job Simulations</Link>
            </Button>

            {/* Download CV → place file at public/cv/sanjana-r-cv.pdf */}
            <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary hover:text-primary-foreground"asChild
            >
              <a href="/cv/VP_resume.pdf" download="VP_resume.pdf">
              <FileDown className="mr-2 h-5 w-5" />
              Download CV
            </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-secondary/50 hover:bg-secondary hover:text-secondary-foreground"
              asChild
            >
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-foreground">About</h2>
        <div className="glass rounded-xl p-8 max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Motivated and adaptable Computer Science student specializing in Information Science and Engineering, with strong skills in Python, Java, C++, and full-stack development (MERN & Flutter). Experienced in building projects integrating AI, machine learning, and cybersecurity solutions. Adept at problem-solving, communication, and teamwork, with proven leadership. Passionate about leveraging technology to solve real-world problems while continuously learning cutting-edge tools and frameworks.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-foreground">Skills</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((s) => (
                <SkillChip key={s} name={s} glowColor="cyan" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Developer Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.devTools.map((s) => (
                <SkillChip key={s} name={s} glowColor="blue" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Technologies / Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {skills.technologies.map((s) => (
                <SkillChip key={s} name={s} glowColor="violet" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary">AI Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {skills.aiFrameworks.map((s) => (
                <SkillChip key={s} name={s} glowColor="cyan" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-foreground">Explore More</h2>
        <div className="grid grid-cols-3 gap-6">
          <QuickLinkTile title="Projects" icon={FolderGit2} path="/projects" glowColor="cyan" />
          <QuickLinkTile title="Certifications" icon={Award} path="/certifications" glowColor="blue" />
          <QuickLinkTile title="Virtual Simulations" icon={Microscope} path="/virtual-simulations" glowColor="violet" />
        </div>
      </section>
    </div>
  );
};

export default Home;
