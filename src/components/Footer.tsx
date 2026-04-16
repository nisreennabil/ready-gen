import logo from "@/assets/logo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <img src={logo} alt="Ready Gen" className="h-10 w-10 rounded-lg object-cover" />
        <p>© {new Date().getFullYear()} {t("footer_text")}</p>
        <a
          href="https://wa.me/201007705216"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:underline font-medium"
        >
          {t("footer_contact")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
