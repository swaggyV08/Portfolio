import SimulationTile from "@/components/SimulationTile";

const VirtualSimulations = () => {
  const simulations = [
    {
      name: "JPMorgan Chase Quantitative Research",
      organization: "JPMorgan Chase via Forage",
      date: "July 2025",
      description: "Applied statistical modeling on loan datasets to estimate default probabilities. Implemented dynamic programming to segment FICO scores, improving predictive accuracy in credit risk analysis by nearly 20%.",
    },
    {
      name: "JPMorgan Chase Software Engineering Job Simulation",
      organization: "JPMorgan Chase via Forage",
      date: "Sept 2025",
      description: "Successfully completed a Software Engineering job simulation, gaining hands-on experience in setting up projects, integrating Kafka and H2 databases, and developing and managing REST API controllers.",
    },
    {
      name: "Deloitte Australia Data Analytics",
      organization: "Deloitte via Forage",
      date: "April 2025",
      description: "Performed exploratory and predictive analytics on structured business datasets. Applied data cleaning, SQL querying, and visualization to extract trends. Developed a dashboard with actionable insights.",
    },
  ];

  return (
    <div className="py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-foreground">Virtual Simulations</h1>
        <p className="text-xl text-muted-foreground">
          Real-world industry experience through professional simulation programs
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {simulations.map((simulation, index) => (
          <div key={index} className="min-h-[200px]">
            <SimulationTile {...simulation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualSimulations;
