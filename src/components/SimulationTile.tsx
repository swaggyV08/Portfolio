interface SimulationTileProps {
  name: string;
  organization: string;
  date: string;
  description: string;
}

const SimulationTile = ({ name, organization, date, description }: SimulationTileProps) => {
  return (
    <div className="group relative glass rounded-xl p-6 hover-tilt transition-smooth overflow-hidden h-full">
      {/* Default visible content */}
      <div className="relative z-10 group-hover:opacity-0 transition-smooth">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-1">{organization}</p>
        <p className="text-xs text-muted-foreground font-mono">{date}</p>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-smooth p-6 flex items-center justify-center rounded-xl border border-primary/30">
        <p className="text-sm text-foreground leading-relaxed text-center z-20">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SimulationTile;
