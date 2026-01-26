import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-foreground">EatSure</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#stats"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Impact
          </a>
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#download"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Download
          </a>
        </nav>

        <Button variant="hero" size="sm" className="hidden md:inline-flex">
          Get the App
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>
    </header>
  )
}

export default Header
