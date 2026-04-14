import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const WA_JOIN = "https://wa.me/201007705216?text=Hey%20I%20want%20to%20join%20Ready%20Gen%20and%20become%20more%20confident";

const navLinks = [
  { label: "Why Us", href: "#value" },
  { label: "Courses", href: "#courses" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Connect", href: "#connect" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Ready Gen" className="h-16 w-16 object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
          <a href={WA_JOIN} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm" className="rounded-lg">
              Join Now
            </Button>
          </a>
        </div>

        <a href={WA_JOIN} target="_blank" rel="noopener noreferrer" className="md:hidden">
          <Button variant="hero" size="sm" className="rounded-lg">
            Join Now
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
