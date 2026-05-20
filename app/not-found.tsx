import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-spiritual-light to-background flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-spiritual/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="text-center max-w-2xl mx-auto space-y-8">
        {/* 404 Large Text */}
        <div className="relative">
          <h1 className="text-9xl md:text-[150px] font-black text-spiritual/20 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-4">
              <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Page Not Found</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Oops! Lost in the Universe
              </h2>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
          The path you&apos;re seeking doesn&apos;t exist in our realm. Don&apos;t worry, we can help you find your way back to enlightenment.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/"
            className="bg-spiritual text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:shadow-xl hover:shadow-spiritual/40 transition-all duration-300 hover:scale-105 transform inline-block"
          >
            Back Home
          </Link>
          <Link
            href="/services"
            className="border-2 border-spiritual text-spiritual px-8 py-4 rounded-lg text-base font-semibold hover:bg-spiritual/10 transition-all duration-300 inline-block"
          >
            Explore Services
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-12 border-t border-spiritual/20">
          <p className="text-sm text-muted-foreground mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="text-spiritual hover:underline transition-colors">Home</Link>
            <span className="text-spiritual/30">•</span>
            <Link href="/about" className="text-spiritual hover:underline transition-colors">About</Link>
            <span className="text-spiritual/30">•</span>
            <Link href="/portfolio" className="text-spiritual hover:underline transition-colors">Portfolio</Link>
            <span className="text-spiritual/30">•</span>
            <Link href="/services" className="text-spiritual hover:underline transition-colors">Services</Link>
            <span className="text-spiritual/30">•</span>
            <Link href="/#contact" className="text-spiritual hover:underline transition-colors">Contact</Link>
          </div>
        </div>

        {/* Spiritual Message */}
        <div className="mt-12 p-6 bg-white border-2 border-spiritual/30 rounded-2xl">
          <p className="text-sm text-muted-foreground italic">
            ✨ <span className="text-spiritual font-semibold">Remember:</span> Every wrong turn is an opportunity to find a better path. Let us guide you.
          </p>
        </div>
      </div>
    </main>
  )
}
