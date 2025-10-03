import { Button } from "./ui/button";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard = ({ title, description, githubUrl }: ProjectCardProps) => {
  return (
    <div className="group glass rounded-xl p-6 hover-tilt hover:glow-cyan transition-smooth h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="opacity-0 group-hover:opacity-100 transition-smooth">
        <Button
          variant="outline"
          size="sm"
          className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
