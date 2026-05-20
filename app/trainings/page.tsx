import Link from 'next/link'

export default function TrainingsPage() {
  const trainings = [
    {
      title: 'Web Development Bootcamp',
      duration: '2 weeks',
      level: 'Intermediate',
      format: 'in-person',
      icon: '💻',
      description: 'Intensive bootcamp covering modern web development with React, TypeScript, and best practices.',
      topics: ['React & Next.js', 'TypeScript', 'Databases', 'Deployment'],
      participants: 'Individual & Groups',
      price: 'Custom pricing'
    },
    {
      title: 'UX/UI Design Workshop',
      duration: '2 days',
      level: 'Beginner to Intermediate',
      format: 'in-person',
      icon: '🎨',
      description: 'Hands-on workshop on user-centered design, prototyping, and design systems.',
      topics: ['Design Thinking', 'Figma', 'Prototyping', 'User Testing'],
      participants: 'Individual & Teams',
      price: 'Custom pricing'
    },
    {
      title: 'Live Zoom Workshops',
      duration: 'Flexible',
      level: 'All Levels',
      format: 'online',
      icon: '📹',
      description: 'Interactive live sessions with real-time Q&A, suitable for remote teams and individuals.',
      topics: ['Custom Topics', 'Real-time Q&A', 'Recording Provided', 'Flexible Hours'],
      participants: 'Distributed Teams',
      price: 'Custom pricing'
    },
    {
      title: 'Self-Paced Courses',
      duration: 'Self-directed',
      level: 'All Levels',
      format: 'online',
      icon: '📚',
      description: 'Recorded course materials and modules you can complete at your own pace.',
      topics: ['Video Lessons', 'Code Examples', 'Assignments', 'Lifetime Access'],
      participants: 'Individual',
      price: 'Custom pricing'
    },
    {
      title: 'Corporate Training',
      duration: 'Custom',
      level: 'Tailored',
      format: 'hybrid',
      icon: '🏢',
      description: 'Custom curriculum designed for your company\'s specific needs and goals.',
      topics: ['Custom Curriculum', 'On-site or Remote', 'Dedicated Support', 'Team Building'],
      participants: 'Companies',
      price: 'Custom pricing'
    },
    {
      title: 'Product Strategy Bootcamp',
      duration: '1 week',
      level: 'Advanced',
      format: 'hybrid',
      icon: '🚀',
      description: 'Learn to build products from idea to launch with strategic insights and frameworks.',
      topics: ['Product Strategy', 'Market Research', 'Launch Planning', 'Metrics & Analytics'],
      participants: 'Startups & Teams',
      price: 'Custom pricing'
    }
  ]

  const bookingSteps = [
    {
      step: 1,
      title: 'Get in Touch',
      description: 'Reach out via email or contact form with your training needs'
    },
    {
      step: 2,
      title: 'Consultation',
      description: 'We discuss your goals, timeline, and custom requirements'
    },
    {
      step: 3,
      title: 'Proposal',
      description: 'Receive a tailored proposal with curriculum and pricing'
    },
    {
      step: 4,
      title: 'Begin Learning',
      description: 'Start your transformative training journey with us'
    }
  ]

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

      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-spiritual-light via-secondary/20 to-background py-24 px-4 sm:px-6">
        <div className="absolute top-0 left-0 w-96 h-96 bg-spiritual/8 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Elevate Your Skills</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-foreground">Master Web & Product Design</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert-led trainings designed to transform your career. Whether in-person in Kathmandu or online, we provide hands-on learning with real-world projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#courses" className="bg-spiritual text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-spiritual/40 transition-all duration-300 hover:scale-105 inline-block">
              Explore Trainings
            </a>
            <a href="#booking" className="border-2 border-spiritual text-spiritual px-8 py-4 rounded-lg font-semibold hover:bg-spiritual/10 transition-all duration-300 inline-block">
              How to Book
            </a>
          </div>
        </div>
      </section>

      {/* Format Comparison */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Choose Your Format</p>
            <h2 className="text-4xl font-bold text-foreground">Learning Options</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* In-Person */}
            <div className="group bg-white border-2 border-spiritual/20 rounded-3xl p-10 hover:border-spiritual/60 hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">🏫</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">In-Person Training</h3>
              <p className="text-muted-foreground mb-6">Hands-on workshops at our Kathmandu office or partner venues.</p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-spiritual font-bold">✓</span>
                  <span>Face-to-face mentoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-spiritual font-bold">✓</span>
                  <span>Collaborative environment</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-spiritual font-bold">✓</span>
                  <span>Real-time feedback</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-spiritual font-bold">✓</span>
                  <span>Networking opportunities</span>
                </li>
              </ul>
            </div>

            {/* Online */}
            <div className="group bg-white border-2 border-primary/20 rounded-3xl p-10 hover:border-primary/60 hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Online Training</h3>
              <p className="text-muted-foreground mb-6">Live remote sessions and self-paced courses for your schedule.</p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Learn from anywhere</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Flexible timing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Recorded sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Lifetime access</span>
                </li>
              </ul>
            </div>

            {/* Corporate */}
            <div className="group bg-white border-2 border-warning/20 rounded-3xl p-10 hover:border-warning/60 hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Corporate Training</h3>
              <p className="text-muted-foreground mb-6">Customized programs tailored to your organization's needs.</p>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-warning font-bold">✓</span>
                  <span>Custom curriculum</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-warning font-bold">✓</span>
                  <span>Team-focused learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-warning font-bold">✓</span>
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-warning font-bold">✓</span>
                  <span>Flexible delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Courses */}
      <section id="courses" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-white to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Available Programs</p>
            <h2 className="text-4xl font-bold text-foreground">Training Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our curated selection of trainings or let us design a custom program for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-border rounded-2xl p-8 hover:border-spiritual/60 hover:shadow-xl hover:shadow-spiritual/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{training.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    training.format === 'in-person' ? 'bg-spiritual/20 text-spiritual' :
                    training.format === 'online' ? 'bg-primary/20 text-primary' :
                    'bg-warning/20 text-warning'
                  }`}>
                    {training.format === 'in-person' ? '📍 In-Person' :
                     training.format === 'online' ? '🌐 Online' :
                     '🔄 Hybrid'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{training.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-background px-3 py-1.5 rounded-lg text-muted-foreground">
                    ⏱️ {training.duration}
                  </span>
                  <span className="text-xs bg-background px-3 py-1.5 rounded-lg text-muted-foreground">
                    📊 {training.level}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{training.description}</p>

                <div className="mb-5 pb-5 border-b border-border">
                  <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Topics Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {training.topics.map((topic, i) => (
                      <span key={i} className="text-xs bg-spiritual/10 text-spiritual px-2.5 py-1 rounded-lg font-medium">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">👥 For:</span> {training.participants}</p>
                  <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">💰 Price:</span> {training.price}</p>
                </div>

                <a href="#booking" className="w-full bg-spiritual/10 text-spiritual px-4 py-3 rounded-lg font-semibold hover:bg-spiritual hover:text-primary-foreground transition-all duration-300 text-center block">
                  Request Details →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section id="booking" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-spiritual-light to-background">
        <div className="absolute top-0 right-0 w-96 h-96 bg-spiritual/8 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Simple Process</p>
            <h2 className="text-4xl font-bold text-foreground">How to Book Your Training</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {bookingSteps.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white border-3 border-spiritual rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-spiritual">{item.step}</span>
                  </div>
                  {index < bookingSteps.length - 1 && (
                    <div className="hidden md:block absolute w-12 h-1 bg-gradient-to-r from-spiritual to-transparent ml-20"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white border-2 border-spiritual/30 rounded-3xl p-10 text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Ready to Transform Your Skills?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact us today to discuss your training needs and get a custom proposal tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:contact.gaurangatech@gmail.com" className="bg-spiritual text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-spiritual/40 transition-all duration-300 hover:scale-105 inline-block">
                Email: contact.gaurangatech@gmail.com
              </a>
              <a href="/#contact" className="border-2 border-spiritual text-spiritual px-8 py-4 rounded-lg font-semibold hover:bg-spiritual/10 transition-all duration-300 inline-block">
                Use Contact Form →
              </a>
            </div>
          </div>
        </div>

        {/* Back Navigation */}
        <div className="mt-12 flex justify-center border-t border-border pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-spiritual text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-spiritual/40 transition-all duration-300 hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}
