import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <img src={logo} alt="Ready Gen" className="h-10 w-10 rounded-lg object-cover" />
        <p>© {new Date().getFullYear()} Ready Gen. Building the next generation of leaders.</p>
        <a
          href="https://wa.me/201007705216"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:underline font-medium"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
