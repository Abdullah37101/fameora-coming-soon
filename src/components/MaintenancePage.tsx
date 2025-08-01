import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, Twitter, Globe } from "lucide-react";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-dark rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12 animate-float">
          <img 
            src="/lovable-uploads/29833840-f39f-4781-b73a-5a2557b9b9e1.png" 
            alt="FAMEORA Logo" 
            className="w-32 h-32 mx-auto drop-shadow-lg animate-pulse-glow"
          />
        </div>

        {/* Main Content Card */}
        <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/80 border border-border/50 shadow-[var(--shadow-brand)]">
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
              <Clock className="w-4 h-4 animate-pulse text-brand-teal" />
              Under Maintenance
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-teal to-brand-dark bg-clip-text text-transparent">
                We'll Be Back Soon!
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
                We're currently performing scheduled maintenance to improve your experience. 
                Thank you for your patience.
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Maintenance Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-teal to-brand-teal-light transition-all duration-1000 ease-out"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>

            {/* Expected Time */}
            <div className="bg-muted/50 rounded-lg p-6 border border-border/30">
              <h3 className="font-semibold text-foreground mb-2">Expected Downtime</h3>
              <p className="text-muted-foreground">
                We expect to be back online within the next <span className="font-semibold text-brand-teal">2-4 hours</span>.
                All data is safe and secure.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Stay Connected</h3>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" className="border-brand-teal/20 hover:border-brand-teal hover:bg-brand-teal/5">
                  <Mail className="w-4 h-4 mr-2" />
                  team@fameora.site
                </Button>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default MaintenancePage;