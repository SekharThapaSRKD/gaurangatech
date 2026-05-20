import { Globe, Smartphone, Cloud, Link, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Beautifully crafted web experiences that connect hearts and minds.',
      icon: Globe,
      accent: 'from-blue-500/20 to-purple-500/20',
      iconColor: 'text-blue-500',
      purpose: 'Digital Spaces'
    },
    {
      title: 'Mobile Apps',
      description: 'Thoughtfully designed mobile solutions for meaningful engagement.',
      icon: Smartphone,
      accent: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-500',
      purpose: 'Innovation'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable infrastructure that elevates your vision to the sky.',
      icon: Cloud,
      accent: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-500',
      purpose: 'Scalability'
    },
    {
      title: 'System Integration',
      description: 'Harmonious integration that unites your entire ecosystem.',
      icon: Link,
      accent: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500',
      purpose: 'Unity'
    }
  ];

  return (
    <section id="services" className="py-32 px-4 sm:px-6 relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Our Path
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Services with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Purpose</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We offer services rooted in excellence, designed to create positive transformation and meaningful impact in the digital realm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 hover:border-primary/50 transition-colors duration-500"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <Icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-muted-foreground uppercase tracking-wider">
                      {service.purpose}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground tracking-tight">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center text-sm font-medium text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
