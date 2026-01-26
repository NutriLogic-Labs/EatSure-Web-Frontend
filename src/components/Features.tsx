import { Search, Receipt, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'See recalls in one place',
    description:
      'Browse and search current food recalls issued by U.S. food safety agencies, with clear explanations of what each recall means.',
    color: 'bg-primary',
  },
  {
    icon: Receipt,
    title: 'Check products you buy',
    description:
      'Automatic tracking of your grocery through your shopping receipt. Snap a photo or connect your store account.',
    color: 'bg-coral',
  },
  {
    icon: ArrowRight,
    title: 'Know what to do next',
    description:
      'Get clear guidance on recommended actions such as discarding, returning, or monitoring a product.',
    color: 'bg-forest',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-md md:text-display-lg text-foreground mb-6 text-balance">
            Stay informed, <span className="text-primary">stay safe</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            EatSure brings food safety information to your fingertips with three powerful features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 md:p-10 hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/20"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features Visual */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint text-primary font-medium text-sm mb-6">
              Smart Alerts
            </div>

            <h3 className="text-display-sm md:text-display-md text-foreground mb-6">
              Get notified when it matters
            </h3>

            <p className="text-lg text-muted-foreground mb-8">
              EatSure monitors recalls 24/7 and sends you personalized alerts based on your shopping
              history and location. Never miss an important safety update.
            </p>

            <ul className="space-y-4">
              {[
                'Push notifications for relevant recalls',
                'Weekly safety digests',
                'Location-based alerts for local products',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-primary"
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
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Notification cards stack */}
              <div className="bg-background rounded-2xl p-5 shadow-card max-w-sm transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-coral"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Recall Alert</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Fresh Express salad kits recalled due to possible Listeria contamination.
                      Check your fridge.
                    </p>
                    <p className="text-xs text-primary mt-2 font-medium">2 min ago</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-5 shadow-soft max-w-sm absolute -bottom-4 -left-4 -z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">All Clear</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your recent purchases have been checked. No recalls found.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
