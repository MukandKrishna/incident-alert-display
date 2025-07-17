import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusBadge } from "@/components/StatusBadge";
import { EventCard } from "@/components/EventCard";
import { AlertCard } from "@/components/AlertCard";
import { 
  Shield, 
  Camera, 
  Monitor, 
  Activity, 
  Plus, 
  Trash2, 
  AlertTriangle,
  CheckCircle,
  Clock,
  LogOut,
  BarChart3
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Camera {
  id: string;
  name: string;
  ip: string;
  status: "online" | "offline" | "warning";
  location: string;
}

interface Alert {
  id: string;
  type: "fire" | "traffic" | "violence";
  severity: "low" | "medium" | "high" | "critical";
  message: string;
  timestamp: Date;
  camera: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [cameras, setCameras] = useState<Camera[]>([
    { id: "1", name: "Main Entrance", ip: "192.168.1.101", status: "online", location: "Building A" },
    { id: "2", name: "Parking Lot", ip: "192.168.1.102", status: "online", location: "Parking" },
    { id: "3", name: "Emergency Exit", ip: "192.168.1.103", status: "warning", location: "Building B" }
  ]);
  
  const [alerts] = useState<Alert[]>([
    { 
      id: "1", 
      type: "fire", 
      severity: "critical", 
      message: "Smoke detected in Building A corridor", 
      timestamp: new Date(), 
      camera: "Main Entrance" 
    },
    { 
      id: "2", 
      type: "traffic", 
      severity: "medium", 
      message: "Unusual traffic pattern detected", 
      timestamp: new Date(Date.now() - 300000), 
      camera: "Parking Lot" 
    },
    { 
      id: "3", 
      type: "violence", 
      severity: "high", 
      message: "Aggressive behavior detected", 
      timestamp: new Date(Date.now() - 600000), 
      camera: "Emergency Exit" 
    }
  ]);

  const [newCamera, setNewCamera] = useState({ name: "", ip: "", location: "" });

  const handleLogout = () => {
    navigate("/login");
  };

  const addCamera = () => {
    if (newCamera.name && newCamera.ip && newCamera.location) {
      const camera: Camera = {
        id: Date.now().toString(),
        name: newCamera.name,
        ip: newCamera.ip,
        status: "online",
        location: newCamera.location
      };
      setCameras([...cameras, camera]);
      setNewCamera({ name: "", ip: "", location: "" });
    }
  };

  const removeCamera = (id: string) => {
    setCameras(cameras.filter(camera => camera.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "success";
      case "offline": return "destructive";
      case "warning": return "warning";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Critical Event Detection System</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="home">
                <BarChart3 className="h-4 w-4 mr-2" />
                Home
              </TabsTrigger>
              <TabsTrigger value="cameras">
                <Camera className="h-4 w-4 mr-2" />
                Cameras
              </TabsTrigger>
              <TabsTrigger value="monitoring">
                <Monitor className="h-4 w-4 mr-2" />
                Live Monitoring
              </TabsTrigger>
              <TabsTrigger value="alerts">
                <Activity className="h-4 w-4 mr-2" />
                Alerts & Logs
              </TabsTrigger>
            </TabsList>

            {/* Home Tab */}
            <TabsContent value="home" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-success" />
                      Active Cameras
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-success">{cameras.filter(c => c.status === "online").length}</div>
                    <p className="text-muted-foreground">Online and monitoring</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                      Recent Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-warning">{alerts.length}</div>
                    <p className="text-muted-foreground">In the last 24 hours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      System Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <StatusBadge variant="success" text="Operational" />
                    <p className="text-muted-foreground mt-2">All systems running</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Events</CardTitle>
                  <CardDescription>Latest critical events detected</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alerts.slice(0, 3).map((alert) => (
                      <AlertCard
                        key={alert.id}
                        type={alert.type}
                        severity={alert.severity}
                        title={alert.message}
                        timestamp={alert.timestamp}
                        location={alert.camera}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Cameras Tab */}
            <TabsContent value="cameras" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Camera</CardTitle>
                  <CardDescription>Configure a new camera for monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="cameraName">Camera Name</Label>
                      <Input
                        id="cameraName"
                        placeholder="Main Entrance"
                        value={newCamera.name}
                        onChange={(e) => setNewCamera({ ...newCamera, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cameraIp">IP Address</Label>
                      <Input
                        id="cameraIp"
                        placeholder="192.168.1.100"
                        value={newCamera.ip}
                        onChange={(e) => setNewCamera({ ...newCamera, ip: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cameraLocation">Location</Label>
                      <Input
                        id="cameraLocation"
                        placeholder="Building A"
                        value={newCamera.location}
                        onChange={(e) => setNewCamera({ ...newCamera, location: e.target.value })}
                      />
                    </div>
                    <div className="flex items-end">
                      <Button onClick={addCamera} className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Camera
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Camera List</CardTitle>
                  <CardDescription>Manage your surveillance cameras</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cameras.map((camera) => (
                      <div key={camera.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Camera className="h-8 w-8 text-muted-foreground" />
                          <div>
                            <h3 className="font-medium">{camera.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              IP: {camera.ip} • Location: {camera.location}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <StatusBadge variant={getStatusColor(camera.status)} text={camera.status} />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeCamera(camera.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Live Monitoring Tab */}
            <TabsContent value="monitoring" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
                {/* Camera Feeds */}
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Live Camera Feeds</CardTitle>
                  </CardHeader>
                  <CardContent className="h-full">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      {cameras.slice(0, 4).map((camera) => (
                        <div key={camera.id} className="relative bg-muted rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                            <p className="text-sm font-medium">{camera.name}</p>
                            <p className="text-xs text-muted-foreground">{camera.ip}</p>
                            <StatusBadge variant={getStatusColor(camera.status)} text={camera.status} className="mt-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Real-time Alerts */}
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Real-time Alerts</CardTitle>
                  </CardHeader>
                  <CardContent className="h-full overflow-auto">
                    <div className="space-y-3">
                      {alerts.map((alert) => (
                        <AlertCard
                          key={alert.id}
                          type={alert.type}
                          severity={alert.severity}
                          title={alert.message}
                          timestamp={alert.timestamp}
                          location={alert.camera}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Alerts & Logs Tab */}
            <TabsContent value="alerts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Alert Log</CardTitle>
                  <CardDescription>Complete history of all detected events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alerts.map((alert) => (
                      <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="flex flex-col items-center">
                            {alert.type === "fire" && <AlertTriangle className="h-6 w-6 text-critical" />}
                            {alert.type === "traffic" && <Camera className="h-6 w-6 text-warning" />}
                            {alert.type === "violence" && <Shield className="h-6 w-6 text-destructive" />}
                          </div>
                          <div>
                            <h3 className="font-medium">{alert.message}</h3>
                            <p className="text-sm text-muted-foreground">
                              Camera: {alert.camera} • {alert.timestamp.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <StatusBadge 
                          variant={alert.severity === "critical" ? "destructive" : alert.severity === "high" ? "destructive" : "warning"} 
                          text={alert.severity} 
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;