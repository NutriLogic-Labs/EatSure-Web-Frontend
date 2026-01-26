import { Button } from '@/components/ui/button'
import { Apple, Play, ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-mint rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cream rounded-full blur-3xl opacity-80" />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-16 md:py-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint text-primary font-medium text-sm mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            Food Safety Made Simple
          </div>

          <h1 className="text-display-lg md:text-display-xl text-foreground mb-6 animate-fade-in-up animation-delay-100 text-balance">
            Know what's <span className="text-primary">safe</span> to eat.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up animation-delay-200 max-w-xl mx-auto lg:mx-0">
            Food recalls happen when products may be unsafe to eat. EatSure helps you keep track of
            them — so you can protect yourself and your family.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" className="w-full sm:w-auto group">
              <Apple className="w-5 h-5" />
              Download for iOS
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
              <Play className="w-5 h-5" />
              Get on Android
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6 animate-fade-in-up animation-delay-400">
            Free to download • No account required
          </p>
        </div>

        {/* Phone Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right animation-delay-200">
          <div className="relative">
            {/* Phone frame */}
            <div className="relative w-72 md:w-80 h-[580px] md:h-[640px] bg-forest rounded-[3rem] p-3 shadow-elevated animate-float">
              {/* Screen */}
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-primary/5 flex items-center justify-center">
                  <div className="w-24 h-6 bg-foreground/10 rounded-full" />
                </div>

                {/* App content mockup */}
                <div className="pt-16 px-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">EatSure</p>
                      <p className="text-xs text-muted-foreground">Your food safety companion</p>
                    </div>
                  </div>

                  <div className="bg-coral/10 border border-coral/20 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-coral text-sm">!</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Active Recall Alert</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Organic spinach recalled due to E. coli risk
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Recent Checks
                    </p>
                    {[
                      { name: 'Whole Foods Salad Mix', status: 'safe', color: 'bg-primary' },
                      { name: "Trader Joe's Cheese", status: 'safe', color: 'bg-primary' },
                      { name: 'Kirkland Salmon', status: 'safe', color: 'bg-primary' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-card rounded-xl"
                      >
                        <span className="text-sm text-foreground">{item.name}</span>
                        <span className={`w-2 h-2 rounded-full ${item.color}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div
              className="absolute -left-8 top-24 bg-background rounded-2xl p-4 shadow-card animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Product Safe</p>
                  <p className="text-xs text-muted-foreground">No recalls found</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-6 bottom-32 bg-background rounded-2xl p-4 shadow-card animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-coral"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Alert!</p>
                  <p className="text-xs text-muted-foreground">1 new recall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm font-medium">Learn More</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default Hero
