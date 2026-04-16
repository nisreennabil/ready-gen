import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg gap-1.5 border-primary/40 bg-primary/5 hover:bg-primary/10 text-foreground"
        >
          <Globe className="w-4 h-4" />
          <span className="font-semibold uppercase">{lang}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[8rem]">
        <DropdownMenuItem onClick={() => setLang("en")} className="cursor-pointer">
          🇬🇧 English {lang === "en" && "✓"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("ar")} className="cursor-pointer">
          🇪🇬 العربية {lang === "ar" && "✓"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
