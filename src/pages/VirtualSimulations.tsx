import SimulationTile from "@/components/SimulationTile";

const VirtualSimulations = () => {
  const simulations = [
    {
      name: "BCG GenAI Job Simulation",
      organization: "BCG via Forage",
      date: "July 2025",
      description: "Built an AI-driven financial chatbot using Python to interpret 10-K and 10-Q filings, simplifying reporting for non-technical users. Leveraged pandas for parsing thousands of financial data points, increasing interpretability by ~40%.",
    },
    {
      name: "JPMorgan Chase Quantitative Research",
      organization: "JPMorgan Chase via Forage",
      date: "July 2025",
      description: "Applied statistical modeling on loan datasets to estimate default probabilities. Implemented dynamic programming to segment FICO scores, improving predictive accuracy in credit risk analysis by nearly 20%.",
    },
    {
      name: "BCG Data Science Job Simulation",
      organization: "BCG via Forage",
      date: "June 2025",
      description: "Led a customer churn analysis using Python, NumPy, and Pandas, identifying high-impact drivers. Optimized a Random Forest model to achieve a 50% recall rate in prediction. Translated technical insights into executive summary.",
    },
    {
      name: "Deloitte Australia Data Analytics",
      organization: "Deloitte via Forage",
      date: "April 2025",
      description: "Performed exploratory and predictive analytics on structured business datasets. Applied data cleaning, SQL querying, and visualization to extract trends. Developed a dashboard with actionable insights.",
    },
    {
      name: "Accenture Nordics Software Engineering",
      organization: "Accenture via Forage",
      date: "March 2025",
      description: "Contributed to a simulated agile software project, applying JavaScript, REST APIs, and testing frameworks. Focused on delivering maintainable code and modular features under tight deadlines.",
    },
    {
      name: "Tata Global Data Visualization",
      organization: "Tata via Forage",
      date: "March 2025",
      description: "Designed compelling business dashboards to empower strategic decisions. Applied Power BI techniques like drill-downs and DAX measures on sales datasets with over 10,000+ rows.",
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
