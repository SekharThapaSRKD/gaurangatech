import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function AboutPage() {
  const topLeader = { name: 'HG Nabin Krishna Prabhu' }
  const secondLeader = { name: 'HG Taptahema Gaur Sundar Prabhu' }
  const team = [
    { name: 'Manohar Prabhu' },
    { name: 'Santosh Prabhu' },
    { name: 'Dikshat Prabhu' },
    { name: 'Sekhar Prabhu' }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              About Gauranga Tech
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building innovative digital solutions that transform businesses and create lasting impact
            </p>
          </div>

          {/* Company Story */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2014, Gauranga Tech emerged from a simple vision: to bridge the gap between ambitious ideas and technological excellence. What started as a small team of passionate developers has grown into a recognized leader in digital innovation.
                </p>
                <p>
                  Over the past decade, we&apos;ve had the privilege of working with startups, scale-ups, and enterprises across diverse industries. Every project has taught us valuable lessons and reinforced our commitment to excellence.
                </p>
                <p>
                  Today, with a talented team of 30+ professionals, we continue to push the boundaries of what&apos;s possible in web, mobile, and cloud technologies.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-8 border border-border">
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-primary font-bold text-3xl mb-2">10+</div>
                  <div className="text-foreground font-semibold">Years in Business</div>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-primary font-bold text-3xl mb-2">50+</div>
                  <div className="text-foreground font-semibold">Projects Completed</div>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-primary font-bold text-3xl mb-2">30+</div>
                  <div className="text-foreground font-semibold">Team Members</div>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-primary font-bold text-3xl mb-2">99.9%</div>
                  <div className="text-foreground font-semibold">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative technology solutions that create sustainable value, drive digital transformation, and enable them to achieve their most ambitious goals in an increasingly digital world.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted partner for digital innovation, known for delivering exceptional results, fostering long-term relationships, and creating technology that makes a positive impact on people&apos;s lives.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Excellence', desc: 'We strive for excellence in everything we do' },
                { title: 'Innovation', desc: 'We embrace new ideas and technologies' },
                { title: 'Integrity', desc: 'We operate with honesty and transparency' },
                { title: 'Collaboration', desc: 'We believe in the power of teamwork' },
                { title: 'Client Success', desc: 'Your success is our success' },
                { title: 'Continuous Learning', desc: 'We never stop growing and improving' },
                { title: 'Responsibility', desc: 'We take pride in our work and impact' },
                { title: 'Passion', desc: 'We love what we do' }
              ].map((value, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Meet Our Leadership</h2>
            
            {/* Top Leader */}
            <div className="max-w-sm mx-auto mb-8">
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                <div className="h-40 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-5xl">
                  🙏
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground">{topLeader.name}</h3>
                </div>
              </div>
            </div>

            {/* Second Leader */}
            <div className="max-w-sm mx-auto mb-12">
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                <div className="h-40 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-5xl">
                  🙏
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground">{secondLeader.name}</h3>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="h-32 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-4xl">
                    🙏
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose Gauranga Tech</h2>
            <div className="space-y-4">
              {[
                'Proven track record with 10+ years of industry experience',
                'Expert team of full-stack developers and architects',
                'End-to-end solutions from consultation to deployment and support',
                'Commitment to quality, innovation, and client success',
                '99.9% uptime and SLA guarantees for all services',
                'Transparent communication and regular progress updates',
                '24/7 support for critical issues and urgent needs',
                'Competitive pricing with flexible engagement models'
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="text-primary text-2xl flex-shrink-0">✓</div>
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Partner With Us?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your vision into reality with innovative technology solutions.
            </p>
            <Link href="/#contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block">
              Get In Touch
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
