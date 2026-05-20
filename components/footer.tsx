import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t-2 border-border py-12 px-6 bg-gradient-to-r from-secondary/60 to-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Gauranga Tech</h3>
            <p className="text-sm text-muted-foreground max-w-sm">We craft meaningful digital experiences with care. Reach out for thoughtful web and product design.</p>
            <p className="text-xs text-muted-foreground">&copy; 2024 Gauranga Tech</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/trainings" className="hover:text-primary transition-colors">Trainings</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact & Social</h4>
            <p className="text-sm text-muted-foreground">Email: <a href="mailto:contact.gaurangatech@gmail.com" className="text-primary hover:underline">contact.gaurangatech@gmail.com</a></p>
            <p className="text-sm text-muted-foreground mt-2">Location: <span className="text-primary">Tinkune Butwal</span></p>

            <div className="mt-4 flex items-center gap-3">
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Twitter</a>
              <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</a>
              <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <div className="mb-4">
            <span className="text-spiritual font-semibold italic">Innovating the Future</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span>All rights reserved.</span>
            <span>Built with care.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
