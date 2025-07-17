import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  stats: {
    active: number;
    total: number;
    status: "online" | "warning" | "critical" | "offline";
  };
  features: string[];
}

export const EventCard = ({ title, description, image, stats, features }: EventCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl text-foreground">{title}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
          </div>
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted/50">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="text-2xl font-bold text-foreground">{stats.active}</span>
            <span className="mx-1">/</span>
            <span>{stats.total}</span>
            <span className="ml-1">sensors active</span>
          </div>
          <StatusBadge 
            status={stats.status}
            text={stats.status === "online" ? "Operational" : 
                  stats.status === "warning" ? "Warning" :
                  stats.status === "critical" ? "Critical" : "Offline"}
            pulse={stats.status === "critical"}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-secondary/50 text-secondary-foreground"
            >
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};