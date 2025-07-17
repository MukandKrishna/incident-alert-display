import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status?: "online" | "warning" | "critical" | "offline";
  variant?: "success" | "warning" | "destructive" | "secondary";
  text: string;
  pulse?: boolean;
  className?: string;
}

const statusConfig = {
  online: {
    bg: "bg-success",
    text: "text-success-foreground",
    dot: "bg-success",
  },
  warning: {
    bg: "bg-warning",
    text: "text-warning-foreground", 
    dot: "bg-warning",
  },
  critical: {
    bg: "bg-critical",
    text: "text-critical-foreground",
    dot: "bg-critical",
  },
  offline: {
    bg: "bg-muted",
    text: "text-muted-foreground",
    dot: "bg-muted-foreground",
  },
};

const variantConfig = {
  success: {
    bg: "bg-success",
    text: "text-success-foreground",
    dot: "bg-success",
  },
  warning: {
    bg: "bg-warning",
    text: "text-warning-foreground", 
    dot: "bg-warning",
  },
  destructive: {
    bg: "bg-destructive",
    text: "text-destructive-foreground",
    dot: "bg-destructive",
  },
  secondary: {
    bg: "bg-secondary",
    text: "text-secondary-foreground",
    dot: "bg-secondary-foreground",
  },
};

export const StatusBadge = ({ status, variant, text, pulse = false, className }: StatusBadgeProps) => {
  const config = status ? statusConfig[status] : variant ? variantConfig[variant] : statusConfig.online;
  
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium",
      config.bg,
      config.text,
      className
    )}>
      <div className={cn(
        "w-2 h-2 rounded-full",
        config.dot,
        pulse && "animate-pulse"
      )} />
      {text}
    </div>
  );
};