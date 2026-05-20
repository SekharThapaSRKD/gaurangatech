export default function Clients() {
  const clients = [
    {
      name: 'TechStart Nepal',
      category: 'Startup & Innovation',
      logo: '🚀',
      description: 'Digital transformation solutions for emerging tech companies',
      industry: 'Technology',
      testimonial: 'Excellent partnership that transformed our digital presence.'
    },
    {
      name: 'Spiritual Wellness Co',
      category: 'Wellness & Mindfulness',
      logo: '🧘',
      description: 'Mindfulness platform development and wellness tech solutions',
      industry: 'Health & Wellness',
      testimonial: 'They understood our mission and built it with heart.'
    },
    {
      name: 'Local Education Hub',
      category: 'EdTech',
      logo: '📚',
      description: 'Learning management system and educational platform solutions',
      industry: 'Education',
      testimonial: 'Transformed how we deliver learning to students worldwide.'
    },
    {
      name: 'Green Living Initiative',
      category: 'Sustainability',
      logo: '🌱',
      description: 'Community engagement platform for environmental advocacy',
      industry: 'Environmental',
      testimonial: 'Helped us reach thousands of people passionate about sustainability.'
    },
    {
      name: 'Artisan Collective',
      category: 'E-Commerce',
      logo: '🎨',
      description: 'Online marketplace solution for artisan and handmade goods',
      industry: 'Retail & E-Commerce',
      testimonial: 'Perfect platform to showcase and sell our artisan products.'
    },
    {
      name: 'Healthcare Connect',
      category: 'Healthcare',
      logo: '❤️',
      description: 'Patient management and appointment scheduling system',
      industry: 'Healthcare',
      testimonial: 'Streamlined our operations and improved patient experience significantly.'
    }
  ]

  return (
    <section id="clients" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-80 h-80 bg-spiritual/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Our Partners</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've partnered with diverse organizations across multiple sectors, delivering solutions that drive growth and transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-background border-2 border-spiritual/20 rounded-2xl p-8 hover:border-spiritual/60 hover:shadow-xl hover:shadow-spiritual/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-spiritual/5 rounded-full group-hover:bg-spiritual/10 transition-colors duration-300"></div>
              
              <div className="relative z-10 space-y-5">
                {/* Logo */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <p className="text-xs font-semibold text-spiritual uppercase tracking-widest">{client.industry}</p>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-spiritual transition-colors duration-300">
                      {client.name}
                    </h3>
                  </div>
                  <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300 ml-4">
                    {client.logo}
                  </div>
                </div>

                {/* Category Badge */}
                <div>
                  <span className="inline-block bg-spiritual/10 text-spiritual px-4 py-2 rounded-full text-xs font-semibold">
                    {client.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {client.description}
                </p>

                {/* Testimonial */}
                <div className="bg-spiritual/5 border-l-4 border-spiritual rounded-lg p-4">
                  <p className="text-sm italic text-foreground">
                    "{client.testimonial}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-spiritual/10 to-background border-2 border-spiritual/30 rounded-2xl p-8 text-center hover:border-spiritual/60 transition-colors duration-300">
            <p className="text-5xl font-bold text-spiritual mb-2">6+</p>
            <p className="text-lg font-semibold text-foreground">Active Clients</p>
            <p className="text-sm text-muted-foreground mt-2">Across diverse industries</p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary/30 rounded-2xl p-8 text-center hover:border-primary/60 transition-colors duration-300">
            <p className="text-5xl font-bold text-primary mb-2">100%</p>
            <p className="text-lg font-semibold text-foreground">Satisfaction Rate</p>
            <p className="text-sm text-muted-foreground mt-2">Client retention & success</p>
          </div>
          <div className="bg-gradient-to-br from-warning/10 to-background border-2 border-warning/30 rounded-2xl p-8 text-center hover:border-warning/60 transition-colors duration-300">
            <p className="text-5xl font-bold text-warning mb-2">5+</p>
            <p className="text-lg font-semibold text-foreground">Years of Partnership</p>
            <p className="text-sm text-muted-foreground mt-2">Long-term relationships built on trust</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-spiritual/10 to-primary/10 border-2 border-spiritual/20 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Join Our Family of Clients?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a startup, enterprise, or non-profit, we're ready to partner with you on your next big project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-spiritual text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-spiritual/40 transition-all duration-300 hover:scale-105"
          >
            Let's Partner Together
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
