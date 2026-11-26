import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={cn("rounded-full hover:bg-transparent dark:hover:bg-transparent")}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
