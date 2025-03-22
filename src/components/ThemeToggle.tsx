
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = ({ className = "", floating = false }: { className?: string, floating?: boolean }) => {
  const { theme, toggleTheme } = useTheme();
  
  if (floating) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => toggleTheme()}
          size="icon"
          variant="outline"
          className="rounded-full h-12 w-12 shadow-md bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background transition-all duration-300"
          aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5 text-foreground" />
          ) : (
            <Sun className="h-5 w-5 text-foreground" />
          )}
        </Button>
      </div>
    );
  }
  
  return (
    <Button
      onClick={() => toggleTheme()}
      size="sm"
      variant="outline"
      className={`rounded-full flex items-center gap-2 pr-3 ${className}`}
    >
      {theme === "light" ? (
        <>
          <span className="bg-trading-gray-medium rounded-full p-1">
            <Moon className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="text-xs font-medium">Dark</span>
        </>
      ) : (
        <>
          <span className="bg-trading-blue rounded-full p-1">
            <Sun className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="text-xs font-medium">Light</span>
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
