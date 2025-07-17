import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { AlertTriangle, Flame, Car, Shield } from "lucide-react";

interface AlertCardProps {
  type: "fire" | "traffic" | "violence";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  timestamp: Date;
  location: string;
}

const typeConfig = {
  fire: {
    icon: Flame,
    color: "text-critical",
    bg: "bg-critical/10"
  },
  traffic: {
    icon: Car,
    color: "text-warning",
    bg: "bg-warning/10"
  },
  violence: {
    icon: Shield,
    color: "text-destructive",
    bg: "bg-destructive/10"
  }
};

export const AlertCard = ({ type, severity, title, timestamp, location }: AlertCardProps) => {
  const config = typeConfig[type];
  const Icon = config.icon;
  
  const getSeverityVariant = (sev: string) => {
    switch (sev) {
      case "critical": return "destructive";
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-lg ${config.bg}`}>
            <Icon className={`h-5 w-5 ${config.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-foreground text-sm">{title}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {location} • {timestamp.toLocaleString()}
                </p>
              </div>
              <StatusBadge 
                variant={getSeverityVariant(severity)} 
                text={severity.toUpperCase()} 
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};