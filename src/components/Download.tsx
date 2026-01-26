import { Button } from "@/components/ui/button";
import { Apple, Play, Shield } from "lucide-react";

const Download = () => {
  return (
    <section id="download" className="py-20 md:py-32 bg-forest text-primary-foreground overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">EatSure</span>
            </div>

            <h2 className="text-display-md md:text-display-lg mb-6 text-balance">
              Download EatSure today
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-10 max-w-lg">
              Join thousands of families who trust EatSure to keep their food safe. Free to download, no account required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90 group"
              >
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              >
                <Play className="w-5 h-5" />
                Google Play
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 mt-10 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Privacy First
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                4.8 Rating
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                100K+ Users
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 md:w-72 h-[520px] md:h-[580px] bg-background/10 rounded-[2.5rem] p-2 backdrop-blur-sm">
                <div className="w-full h-full bg-background rounded-[2.25rem] overflow-hidden">
                  {/* Simple app screen */}
                  <div className="h-full bg-gradient-to-b from-mint to-background p-6 flex flex-col">
                    <div className="text-center mb-8 pt-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary mx-auto flex items-center justify-center mb-4">
                        <Shield className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">Welcome to EatSure</h4>
                      <p className="text-sm text-muted-foreground mt-2">Your food safety companion</p>
                    </div>

                    <div className="space-y-3 flex-1">
                      <div className="bg-background rounded-xl p-4 shadow-soft">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Active Recalls</span>
                          <span className="text-lg font-bold text-coral">23</span>
                        </div>
                      </div>
                      <div className="bg-background rounded-xl p-4 shadow-soft">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Products Checked</span>
                          <span className="text-lg font-bold text-primary">156</span>
                        </div>
                      </div>
                      <div className="bg-background rounded-xl p-4 shadow-soft">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Alerts Sent</span>
                          <span className="text-lg font-bold text-forest">3</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="bg-primary rounded-xl p-4 text-center">
                        <span className="text-primary-foreground font-medium">Scan a Receipt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-coral text-primary-foreground rounded-full px-4 py-2 font-semibold text-sm shadow-card animate-float">
                Free!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
