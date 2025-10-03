interface SkillChipProps {
  name: string;
  glowColor?: "cyan" | "blue" | "violet";
}

const SkillChip = ({ name, glowColor = "cyan" }: SkillChipProps) => {
  const glowClass = {
    cyan: "hover:glow-cyan hover:border-primary",
    blue: "hover:glow-blue hover:border-secondary",
    violet: "hover:glow-violet hover:border-accent",
  }[glowColor];

  return (
    <span
      className={`inline-block px-4 py-2 rounded-lg glass border border-border/50 font-mono text-sm transition-smooth cursor-default ${glowClass}`}
    >
      {name}
    </span>
  );
};

export default SkillChip;
