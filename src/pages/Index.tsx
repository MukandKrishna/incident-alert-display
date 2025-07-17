import { Header } from "@/components/Header";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Eye, 
  MapPin,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

import heroImage from "@/assets/hero-dashboard.jpg";
import fireIcon from "@/assets/fire-detection.jpg";
import trafficIcon from "@/assets/traffic-detection.jpg";
import violenceIcon from "@/assets/violence-detection.jpg";

const Index = () => {
  const eventTypes = [
    {
      title: "Fire Detection",
      description: "Advanced thermal and smoke detection with AI-powered analysis for rapid fire identification and prevention.",
      image: fireIcon,
      stats: { active: 847, total: 892, status: "online" as const },
      features: ["Thermal Imaging", "Smoke Analysis", "Real-time Alerts", "Auto-Dispatch"]
    },
    {
      title: "Traffic Monitoring", 
      description: "Intelligent traffic flow analysis, accident detection, and congestion management across urban networks.",
      image: trafficIcon,
      stats: { active: 1234, total: 1280, status: "warning" as const },
      features: ["Flow Analysis", "Accident Detection", "Congestion Alerts", "Route Optimization"]
    },
    {
      title: "Violence Detection",
      description: "Behavioral analysis and threat detection using advanced computer vision and machine learning algorithms.",
      image: violenceIcon,
      stats: { active: 456, total: 470, status: "online" as const },
      features: ["Behavior Analysis", "Threat Detection", "Crowd Monitoring", "Emergency Response"]
    }
  ];

  const stats = [
    { label: "Active Sensors", value: "2,537", icon: Activity, status: "success" },
    { label: "Events Today", value: "124", icon: AlertTriangle, status: "warning" },
    { label: "Response Time", value: "1.2s", icon: Clock, status: "success" },
    { label: "Coverage Areas", value: "15", icon: MapPin, status: "info" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Next-Generation Monitoring
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Critical Event
                  <span className="block bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                    Detection System
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Advanced AI-powered monitoring for fire, traffic, and violence detection. 
                  Protecting communities with real-time alerts and intelligent response systems.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8">
                  <Eye className="w-5 h-5" />
                  View Dashboard
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Users className="w-5 h-5" />
                  Request Demo
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-info/20 rounded-2xl blur-xl"></div>
              <img 
                src={heroImage}
                alt="Emergency Control Center Dashboard"
                className="relative w-full rounded-2xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card/50 border-border/50">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detection Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Multi-Modal Detection Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive monitoring system provides real-time detection and analysis 
              across multiple threat categories with industry-leading accuracy.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-card/50 to-accent/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Enhance Your Security Operations?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join leading organizations worldwide who trust CriticalWatch for their 
              critical event detection and emergency response needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                <Zap className="w-5 h-5" />
                Start Monitoring
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <TrendingUp className="w-5 h-5" />
                View Analytics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Activity className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">CriticalWatch</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 CriticalWatch. Advanced Event Detection Systems.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
