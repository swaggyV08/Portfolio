import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-foreground">Get in Touch</h1>
        <p className="text-xl text-muted-foreground">
          Let's discuss opportunities, collaborations, or just connect
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Contact Info */}
        <div className="glass rounded-xl p-8 hover-tilt transition-smooth hover:glow-cyan">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h2>

          <div className="space-y-4">
            <a
              href="tel:+917019666370"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Phone className="h-5 w-5" />
              <span>+91 7019666370</span>
            </a>

            <a
              href="mailto:vishnup2603@gmail.com"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail className="h-5 w-5" />
              <span>vishnup2603@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vishnu-p-95a0aa257/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-secondary transition-smooth"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn Profile</span>
            </a>


            <a
              href="https://github.com/swaggyV08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-smooth"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Resume Download */}
        <div className="glass rounded-xl p-8 hover-tilt transition-smooth hover:glow-blue">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Download Resume</h3>
          <p className="text-muted-foreground mb-6">
            Get a detailed overview of my experience, skills, and achievements
          </p>
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth hover:glow-cyan"
            asChild
          >
            <a href="/cv/VishnuP.pdf" download="VishnuP.pdf">
              <FileDown className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
