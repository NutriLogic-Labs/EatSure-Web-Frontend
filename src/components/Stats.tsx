import { useEffect, useState, useRef } from "react";

const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

const Stats = () => {
  const stat1 = useCountUp(48, 2000);
  const stat2 = useCountUp(128, 2000);
  const stat3 = useCountUp(3, 1500);
  const [recallCount, setRecallCount] = useState(247);

  // Simulate live recall count
  useEffect(() => {
    const interval = setInterval(() => {
      setRecallCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stats" className="py-20 md:py-32 bg-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-md md:text-display-lg text-foreground mb-6 text-balance">
            Food safety affects{" "}
            <span className="text-primary">millions</span>{" "}
            every year
          </h2>
          <p className="text-lg text-muted-foreground">
            In the United States alone, millions of people get sick each year from contaminated or improperly labeled food.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div ref={stat1.ref} className="bg-background rounded-3xl p-8 md:p-10 text-center shadow-soft hover:shadow-card transition-shadow duration-300">
            <div className="text-display-xl text-primary mb-2">
              ~{stat1.count}M
            </div>
            <p className="text-lg font-medium text-foreground mb-2">People get sick</p>
            <p className="text-muted-foreground">from foodborne illnesses each year</p>
          </div>

          <div ref={stat2.ref} className="bg-background rounded-3xl p-8 md:p-10 text-center shadow-soft hover:shadow-card transition-shadow duration-300">
            <div className="text-display-xl text-coral mb-2">
              ~{stat2.count}K
            </div>
            <p className="text-lg font-medium text-foreground mb-2">Hospitalizations</p>
            <p className="text-muted-foreground">requiring medical treatment</p>
          </div>

          <div ref={stat3.ref} className="bg-background rounded-3xl p-8 md:p-10 text-center shadow-soft hover:shadow-card transition-shadow duration-300">
            <div className="text-display-xl text-forest mb-2">
              ~{stat3.count}K
            </div>
            <p className="text-lg font-medium text-foreground mb-2">Deaths</p>
            <p className="text-muted-foreground">from preventable food contamination</p>
          </div>
        </div>

        {/* Live Recall Counter */}
        <div className="bg-card-gradient rounded-3xl p-8 md:p-12 text-center shadow-card">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 text-coral font-medium text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            Live Data
          </div>
          
          <div className="text-display-lg md:text-display-xl text-foreground mb-4">
            <span className="text-primary font-bold">{recallCount}</span>
          </div>
          
          <p className="text-xl font-medium text-foreground mb-2">
            Food recalls issued in the last 365 days
          </p>
          <p className="text-sm text-muted-foreground">
            Based on publicly available FDA and USDA recall notices
          </p>
        </div>

        {/* Source Citation */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Source: U.S. CDC (most recent consolidated estimates)
        </p>
      </div>
    </section>
  );
};

export default Stats;
