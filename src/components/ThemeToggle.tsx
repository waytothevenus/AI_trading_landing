
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center bg-trading-gray rounded-full p-1">
      <Toggle
        variant="outline"
        size="sm"
        pressed={theme === "light"}
        onPressedChange={() => toggleTheme("light")}
        className={`rounded-full p-2 ${
          theme === "light" ? "bg-white text-trading-blue shadow-sm" : "bg-transparent text-foreground"
        }`}
      >
        <Sun className="h-4 w-4" />
      </Toggle>
      <Toggle
        variant="outline"
        size="sm"
        pressed={theme === "dark"}
        onPressedChange={() => toggleTheme("dark")}
        className={`rounded-full p-2 ${
          theme === "dark" ? "bg-trading-gray-dark text-white shadow-sm" : "bg-transparent text-foreground"
        }`}
      >
        <Moon className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default ThemeToggle;
