import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "online" | "warning" | "critical" | "offline";
  text: string;
  pulse?: boolean;
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

export const StatusBadge = ({ status, text, pulse = false }: StatusBadgeProps) => {
  const config = statusConfig[status];
  
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium",
      config.bg,
      config.text
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