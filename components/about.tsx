export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-gradient-to-br from-spiritual-light via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-spiritual/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-warning/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
          <div className="inline-block">
            <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Our Story</p>
          </div>
          <h2 className="text-4xl font-bold text-foreground">
            Built on Excellence, Driven by Purpose
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            At Gauranga Tech, we're more than developers—we're innovative technologists committed to creating solutions that drive business growth. Inspired by the principles of excellence, user-centric design, and transformative change, we build digital experiences that elevate brands and create lasting positive impact.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Every project is a commitment. Every solution is an innovation. We blend industry best practices with modern technology to serve businesses and communities with integrity, professionalism, and dedication.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="group bg-card border-2 border-border rounded-xl p-6 text-center hover:border-spiritual/60 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-spiritual mb-3 group-hover:scale-125 transition-transform duration-300">50+</div>
            <p className="text-sm font-semibold text-foreground">Clients Served</p>
          </div>
          <div className="group bg-card border-2 border-border rounded-xl p-6 text-center hover:border-spiritual/60 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-spiritual mb-3 group-hover:scale-125 transition-transform duration-300">10Y</div>
            <p className="text-sm font-semibold text-foreground">Service & Growth</p>
          </div>
          <div className="group bg-card border-2 border-border rounded-xl p-6 text-center hover:border-spiritual/60 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-spiritual mb-3 group-hover:scale-125 transition-transform duration-300">∞</div>
            <p className="text-sm font-semibold text-foreground">Limitless Potential</p>
          </div>
        </div>
      </div>
    </section>
  )
}
