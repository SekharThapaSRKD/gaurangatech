import Link from 'next/link'

export default function PrivacyPage() {
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
          <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Your Trust Matters</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">We respect your privacy and are committed to protecting your personal information.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="mb-8 p-4 bg-spiritual/5 border-l-4 border-spiritual rounded-lg">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Last Updated:</span> May 15, 2026
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12 space-y-8">
            <div className="bg-white border-2 border-spiritual/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Gauranga Tech, we believe in building digital experiences with integrity and transparency. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and services.
              </p>
            </div>

            {/* Information Collection */}
            <div className="bg-white border-2 border-spiritual/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
                  <p>When you use our contact forms or reach out via email, we collect:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name and email address</li>
                    <li>Phone number (optional)</li>
                    <li>Message content and inquiries</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Automatically Collected Data</h3>
                  <p>We may collect:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Browser type and IP address</li>
                    <li>Pages visited and time spent</li>
                    <li>Referral sources</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-white border-2 border-spiritual/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                How We Use Your Information
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-spiritual font-bold">✓</span>
                  <span>Respond to your inquiries and provide requested services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-spiritual font-bold">✓</span>
                  <span>Send updates about our services and offerings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-spiritual font-bold">✓</span>
                  <span>Improve our website and user experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-spiritual font-bold">✓</span>
                  <span>Comply with legal obligations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-spiritual font-bold">✓</span>
                  <span>Analyze website traffic and performance</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="bg-white border-2 border-spiritual/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-3xl">🔐</span>
                Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
              <div className="bg-warning/10 border-l-4 border-warning p-4 rounded">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Note:</span> While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Third-Party Sharing */}
            <div className="bg-white border-2 border-spiritual/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-3xl">🔗</span>
                Third-Party Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information only:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                <li>With service providers who assist in our operations</li>
                <li>As required by law or legal process</li>
                <li>To protect our rights and security</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="bg-white border-2 border-spiritual/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-3xl">⚖️</span>
                Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-spiritual font-bold">→</span>
                  <span>Access the personal information we hold about you</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-spiritual font-bold">→</span>
                  <span>Request correction or deletion of your information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-spiritual font-bold">→</span>
                  <span>Object to certain types of processing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-spiritual font-bold">→</span>
                  <span>Request restriction of processing</span>
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="bg-white border-2 border-spiritual/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-3xl">🍪</span>
                Cookies & Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies to enhance your experience. Cookies are small files stored on your browser that help us remember preferences and improve functionality. You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-spiritual/10 to-primary/10 border-2 border-spiritual/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="text-3xl">💬</span>
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about this Privacy Policy or our privacy practices, please don't hesitate to reach out.
              </p>
              <div className="space-y-2">
                <p className="text-foreground">
                  <span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:contact.gaurangatech@gmail.com" className="text-spiritual hover:underline">
                    contact.gaurangatech@gmail.com
                  </a>
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">Location:</span> Tinkune, Butwal, Nepal
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="bg-white border-2 border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically to stay informed of how we protect your information.
              </p>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="flex justify-center pt-8 border-t border-border">
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
