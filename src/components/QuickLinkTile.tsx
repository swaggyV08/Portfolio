import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface QuickLinkTileProps {
  title: string;
  icon: LucideIcon;
  path: string;
  glowColor?: "cyan" | "blue" | "violet";
}

const QuickLinkTile = ({ title, icon: Icon, path, glowColor = "cyan" }: QuickLinkTileProps) => {
  const glowClass = {
    cyan: "hover:glow-cyan",
    blue: "hover:glow-blue",
    violet: "hover:glow-violet",
  }[glowColor];

  return (
    <Link to={path}>
      <div className={`glass rounded-xl p-8 hover-tilt transition-smooth ${glowClass} h-full flex flex-col items-center justify-center text-center gap-4`}>
        <Icon className="h-12 w-12 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
    </Link>
  );
};

export default QuickLinkTile;
