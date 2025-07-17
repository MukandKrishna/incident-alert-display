import { Button } from "@/components/ui/button";
import { Shield, Settings, Bell } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CriticalWatch</h1>
              <p className="text-sm text-muted-foreground">Event Detection System</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <StatusBadge status="online" text="System Online" />
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
                <span className="ml-2 hidden sm:inline">Alerts</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
                <span className="ml-2 hidden sm:inline">Settings</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};