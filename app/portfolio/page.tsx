'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react'
import Link from 'next/link'

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 0,
      title: 'Aoking NP',
      category: 'Web Development',
      shortDesc: 'Aoking NP production website',
      fullDesc: 'Built the Aoking NP website delivering a clean marketing presence and CMS-driven content.',
      image: '/aoking/Screenshot 2026-05-15 at 14.00.56.png',
      challenge: 'Polished responsive design and fast load times',
      solution: 'Optimized images, accessible markup, and performant build',
      results: ['Launched to production', 'Stable performance metrics'],
      technologies: ['Next.js', 'Tailwind CSS'],
      year: '2026',
      link: 'https://aoking-np.com/',
      featured: true
    },
    {
      id: 8,
      title: 'KeepSecure Password Manager',
      category: 'Web Development',
      shortDesc: 'Password manager UI for a client',
      fullDesc: 'Designed and implemented a secure, easy-to-use password manager interface.',
      image: '/keepsecure/Screenshot 2026-05-15 at 14.07.41.png',
      challenge: 'Designing intuitive password management flows',
      solution: 'Clear UX with strong focus on security and performance',
      results: ['Client launch', 'Positive usability feedback'],
      technologies: ['Next.js', 'Tailwind CSS'],
      year: '2026',
      link: 'https://password-manager-lilac-one.vercel.app/',
      featured: true
    },
    {
      id: 7,
      title: 'Sekhar Portfolio',
      category: 'Web Development',
      shortDesc: 'Personal portfolio for Sekhar',
      fullDesc: 'Created a clean, responsive portfolio site showcasing Sekhar’s work and contact information.',
      image: '/sekhar/Screenshot 2026-05-15 at 14.04.50.png',
      challenge: 'Showcase projects clearly with performant images',
      solution: 'Optimized imagery and streamlined content sections',
      results: ['Portfolio launched', 'Improved client presentation'],
      technologies: ['Next.js', 'Tailwind CSS'],
      year: '2026',
      link: 'https://srkdsekhar.netlify.app/',
      featured: true
    },
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      shortDesc: 'Full-stack e-commerce solution',
      fullDesc: 'Built a complete e-commerce platform with product catalog, shopping cart, payment processing via Stripe, and an admin dashboard for inventory management.',
      image: '🛒',
      challenge: 'Complex inventory management and real-time payment processing',
      solution: 'Implemented microservices architecture with real-time inventory sync',
      results: ['40% increase in conversion rate', '3x faster checkout', '99.9% uptime'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      year: '2023'
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'Mobile Development',
      shortDesc: 'Cross-platform fitness tracking application',
      fullDesc: 'Developed a comprehensive fitness tracking app with workout routines, progress tracking, social sharing, and integration with popular wearables.',
      image: '💪',
      challenge: 'Real-time data sync across devices and wearable integration',
      solution: 'Used Firebase for real-time sync and native APIs for wearable data',
      results: ['100K+ downloads', '4.8/5 app rating', '2M+ workouts logged'],
      technologies: ['React Native', 'Firebase', 'Wearables', 'Push Notifications'],
      year: '2023'
    },
    {
      id: 3,
      title: 'Cloud Migration Project',
      category: 'Cloud Solutions',
      shortDesc: 'Legacy system migration to AWS',
      fullDesc: 'Successfully migrated a legacy monolithic application to AWS cloud with containerization, auto-scaling, and zero-downtime deployment.',
      image: '☁️',
      challenge: 'Complex migration with zero downtime requirement',
      solution: 'Implemented blue-green deployment strategy with Docker and Kubernetes',
      results: ['70% cost reduction', 'Zero downtime migration', '10x better scalability'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      year: '2022'
    },
    {
      id: 4,
      title: 'SaaS Analytics Dashboard',
      category: 'Web Development',
      shortDesc: 'Real-time analytics dashboard for B2B SaaS',
      fullDesc: 'Created an advanced analytics dashboard with real-time data visualization, custom reports, and machine learning-powered insights.',
      image: '📊',
      challenge: 'Handling large datasets and real-time updates',
      solution: 'Implemented WebSocket connections and data aggregation pipelines',
      results: ['500+ enterprise clients', '99.99% SLA', '10M+ daily events'],
      technologies: ['Next.js', 'PostgreSQL', 'Recharts', 'WebSockets'],
      year: '2023'
    },
    {
      id: 5,
      title: 'Healthcare Portal',
      category: 'Web Development',
      shortDesc: 'HIPAA-compliant patient management system',
      fullDesc: 'Developed a secure healthcare portal for patient-doctor interaction with appointment scheduling, medical records, and telemedicine features.',
      image: '🏥',
      challenge: 'HIPAA compliance and secure data handling',
      solution: 'Implemented end-to-end encryption and role-based access control',
      results: ['5000+ active patients', '99.95% uptime', 'Zero security incidents'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS KMS', 'TLS'],
      year: '2022'
    },
    {
      id: 6,
      title: 'IoT Management System',
      category: 'Cloud Solutions',
      shortDesc: 'IoT device management and monitoring platform',
      fullDesc: 'Built an IoT platform for managing thousands of devices with real-time monitoring, automated alerts, and predictive maintenance features.',
      image: '🔌',
      challenge: 'Managing thousands of concurrent device connections',
      solution: 'Used AWS IoT Core with MQTT protocol and Apache Kafka for streaming',
      results: ['10K+ devices managed', 'Real-time monitoring', '40% maintenance cost reduction'],
      technologies: ['AWS IoT', 'MQTT', 'Kafka', 'TimescaleDB'],
      year: '2023'
    }
  ]

  const categories = ['all', 'Web Development', 'Mobile Development', 'Cloud Solutions']
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Showcasing successful projects and case studies that delivered real impact
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary/50'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredProjects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8 min-h-64 lg:min-h-auto">
                    <div className="text-center">
                      {project.image && typeof project.image === 'string' && project.image.startsWith('/') ? (
                        <img src={project.image} alt={`${project.title} screenshot`} className="w-48 h-48 object-cover rounded-md mx-auto mb-4" />
                      ) : (
                        <div className="text-8xl mb-4">{project.image}</div>
                      )}
                        <span className="text-primary font-semibold text-sm">{project.category}</span>
                        {project.link && (
                          <div className="mt-2">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline">Visit site</a>
                          </div>
                        )}
                      <p className="text-muted-foreground text-xs mt-2">{project.year}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.fullDesc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">Challenge</h4>
                        <p className="text-muted-foreground text-sm">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">Solution</h4>
                        <p className="text-muted-foreground text-sm">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-2">Results</h4>
                        <ul className="space-y-1">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="text-primary text-sm">✓ {result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
