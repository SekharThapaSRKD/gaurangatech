import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-spiritual-light via-background to-secondary/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-spiritual/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-warning/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="inline-block">
            <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Guided by Purpose</p>
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
              Transform with Tech & Innovation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We blend technology with expertise to create solutions that elevate human connection and drive meaningful change. Building with heart, creating with purpose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link href="#contact" className="bg-spiritual text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:shadow-lg hover:shadow-spiritual/40 transition-all duration-300 hover:scale-105 inline-block text-center transform">
              Begin Your Journey
            </Link>
            <Link href="#services" className="border-2 border-spiritual text-spiritual px-8 py-4 rounded-lg text-base font-semibold hover:bg-spiritual/10 transition-all duration-300 inline-block text-center">
              Explore Services
            </Link>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-4 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-spiritual mb-2">✨</div>
              <p className="text-sm text-muted-foreground">Deep Expertise</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-spiritual mb-2">💡</div>
              <p className="text-sm text-muted-foreground">Dedicated Work</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-spiritual mb-2">💫</div>
              <p className="text-sm text-muted-foreground">Transformative Change</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
