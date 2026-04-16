import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const WA_JOIN = "https://wa.me/201007705216?text=Hey%20I%20want%20to%20join%20Ready%20Gen%20and%20become%20more%20confident";

const Navbar = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav_why"), href: "#value" },
    { label: t("nav_courses"), href: "#courses" },
    { label: t("nav_projects"), href: "#projects" },
    { label: t("nav_reviews"), href: "#testimonials" },
    { label: t("nav_connect"), href: "#connect" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16 gap-2">
        <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="Ready Gen" className="h-10 w-10 rounded-lg object-cover" />
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a href={WA_JOIN} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm" className="rounded-lg">
              {t("nav_join")}
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
