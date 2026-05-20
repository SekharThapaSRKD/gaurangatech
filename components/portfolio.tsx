export default function Portfolio() {
  const projects = [
    {
      title: 'Aoking NP',
      description: 'Production app for Aoking NP',
      image: '/aoking/Screenshot 2026-05-15 at 14.00.56.png',
      link: 'https://aoking-np.com/',
      featured: true
    },
    {
      title: 'Sekhar Portfolio',
      description: 'Personal portfolio for Sekhar',
      image: '/sekhar/Screenshot 2026-05-15 at 14.04.50.png',
      link: 'https://srkdsekhar.netlify.app/',
      featured: true
    },
    {
      title: 'KeepSecure Password Manager',
      description: 'Password manager UI built for a client',
      image: '/keepsecure/Screenshot 2026-05-15 at 14.07.41.png',
      link: 'https://password-manager-lilac-one.vercel.app/',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      image: '/placeholder.jpg'
    },
    {
      title: 'Fitness Mobile App',
      description: 'Cross-platform fitness tracking app with progress tracking',
      image: '/placeholder.jpg'
    },
    {
      title: 'Cloud Migration',
      description: 'Migrated legacy systems to AWS infrastructure',
      image: '/placeholder.jpg'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for B2B SaaS platform',
      image: '/placeholder.jpg'
    },
    {
      title: 'Healthcare Portal',
      description: 'Patient management system with appointment scheduling',
      image: '/placeholder.jpg'
    },
    {
      title: 'IoT Management System',
      description: 'Device management platform with real-time monitoring',
      image: '/placeholder.jpg'
    }
  ]

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-secondary/20 to-spiritual-light">
      <div className="absolute top-0 left-0 w-96 h-96 bg-spiritual/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-warning/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Our Creations</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Each project is a labor of love, created with intention to transform lives and elevate purpose.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={index} className="group bg-card border-2 border-border rounded-xl overflow-hidden hover:border-spiritual/70 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-spiritual/5">
              <div className="w-full h-44 bg-muted overflow-hidden">
                <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-spiritual transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-primary underline">
                    Visit site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
