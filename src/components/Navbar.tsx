import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { FileDown } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Virtual Simulations", path: "/virtual-simulations" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto max-w-[1280px] px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground">
            Vishnu P
          </Link>
          
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100`}
              >
                {link.name}
              </Link>
            ))}
            
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth hover:glow-cyan"
              asChild
            >
              <a href="/cv/VishnuP.pdf" download="VishnuP.pdf">
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
