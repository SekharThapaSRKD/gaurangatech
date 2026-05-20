import Link from 'next/link'

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-spiritual transition-colors">
            <span className="text-2xl">🙏</span>
            <span>Gauranga Tech</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-muted-foreground hover:text-spiritual transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/#contact" className="text-muted-foreground hover:text-spiritual transition-colors text-sm font-medium">
              Contact
            </Link>
            <Link href="/services" className="text-muted-foreground hover:text-spiritual transition-colors text-sm font-medium">
              Services
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-spiritual-light via-secondary/20 to-background py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-spiritual/8 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Visit Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Location</h1>
          <p className="text-lg text-muted-foreground">We'd love to meet you in person. Visit us at our Kathmandu office by appointment.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Information Cards */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white border-2 border-spiritual/20 rounded-2xl p-8 hover:border-spiritual/60 transition-all duration-300">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  Address
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-lg font-semibold text-foreground">Gauranga Tech</p>
                  <p>Tinkune, Butwal</p>
                  <p>Nepal</p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/60 transition-all duration-300">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="text-3xl">🕐</span>
                  Working Hours
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex justify-between">
                    <span>Sunday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">Closed</span>
                  </p>
                  <p className="text-sm italic mt-4">*By appointment preferred</p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border-2 border-warning/20 rounded-2xl p-8 hover:border-warning/60 transition-all duration-300">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="text-3xl">📞</span>
                  Contact
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:contact.gaurangatech@gmail.com" className="text-spiritual hover:underline font-medium">
                      contact.gaurangatech@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:+9779800000000" className="text-spiritual hover:underline font-medium">
                      +977 9800000000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-8">
              <div className="bg-white border-2 border-spiritual/20 rounded-2xl p-8 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="text-3xl">🗺️</span>
                    How to Reach Us
                  </h2>
                  <div className="space-y-4 text-muted-foreground mb-6">
                    <p className="leading-relaxed">
                      Located in the heart of Butwal, our office is easily accessible and welcoming. We're situated in a thriving tech and business hub with plenty of parking available.
                    </p>
                    <div className="bg-spiritual/5 border-l-4 border-spiritual p-4 rounded">
                      <p className="text-sm font-semibold text-foreground mb-2">Pro Tip:</p>
                      <p className="text-sm">We recommend scheduling an appointment in advance to ensure we're available for your visit.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="#contact"
                    className="block w-full bg-spiritual text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-spiritual/40 transition-all duration-300 text-center"
                  >
                    Schedule a Meeting
                  </a>
                  <a
                    href="mailto:contact.gaurangatech@gmail.com?subject=Meeting%20Request"
                    className="block w-full border-2 border-spiritual text-spiritual px-6 py-3 rounded-lg font-semibold hover:bg-spiritual/10 transition-all duration-300 text-center"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gradient-to-r from-spiritual/10 to-primary/10 border-2 border-spiritual/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">What to Expect</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <li className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Personalized Consultation</p>
                  <p className="text-sm text-muted-foreground">Discuss your project needs with our team</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Collaborative Space</p>
                  <p className="text-sm text-muted-foreground">Modern facilities for brainstorming</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">☕</span>
                <div>
                  <p className="font-semibold text-foreground mb-1">Comfortable Environment</p>
                  <p className="text-sm text-muted-foreground">Refreshments and relaxing atmosphere</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Back Navigation */}
          <div className="mt-12 flex justify-center border-t border-border pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-spiritual text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-spiritual/40 transition-all duration-300 hover:scale-105"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
