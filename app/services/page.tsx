'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: '🌐',
      shortDesc: 'Modern, scalable web applications built with cutting-edge technologies.',
      fullDesc: 'Our web development team specializes in creating responsive, high-performance web applications using the latest frameworks and best practices. From single-page applications to complex full-stack systems, we deliver solutions that are both beautiful and functional.',
      features: [
        'Frontend Development (React, Next.js)',
        'Backend Development (Node.js, Python)',
        'Full-Stack Solutions',
        'Progressive Web Apps',
        'Performance Optimization',
        'SEO-Friendly Architectures'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'MongoDB'],
      benefits: [
        'Faster Time to Market',
        'Scalable Architecture',
        'Improved User Experience',
        'Better Performance',
        'Maintainable Code'
      ]
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      icon: '📱',
      shortDesc: 'Native and cross-platform mobile solutions for iOS and Android.',
      fullDesc: 'We create engaging mobile applications that users love. Whether you need a native app or a cross-platform solution, our team has the expertise to deliver exceptional mobile experiences with intuitive interfaces and powerful functionality.',
      features: [
        'Native iOS Development',
        'Native Android Development',
        'Cross-Platform Solutions',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'REST APIs'],
      benefits: [
        'Wide Audience Reach',
        'Offline Functionality',
        'Push Notifications',
        'App Store Integration',
        'Native Performance'
      ]
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      icon: '☁️',
      shortDesc: 'Robust cloud infrastructure, deployment, and management services.',
      fullDesc: 'Our cloud expertise helps you build, deploy, and scale applications efficiently. We provide comprehensive cloud solutions including infrastructure setup, deployment automation, monitoring, and optimization to ensure your applications run smoothly and cost-effectively.',
      features: [
        'Cloud Architecture Design',
        'Infrastructure as Code',
        'Continuous Integration/Deployment',
        'Cloud Security',
        'Auto-Scaling Solutions',
        'Cost Optimization'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      benefits: [
        'Scalability',
        'High Availability',
        'Cost Efficiency',
        'Security & Compliance',
        'Easy Disaster Recovery'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="space-y-20">
            {serviceDetails.map((service) => (
              <div key={service.id} className="border-b border-border pb-20 last:border-b-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.fullDesc}</p>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-card border border-border rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span key={tech} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary text-xl">→</span>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and find the perfect solution for your business.
            </p>
            <Link href="/#contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">
              Schedule a Consultation
            </Link>
          </div>

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

      <Footer />
    </main>
  )
}
