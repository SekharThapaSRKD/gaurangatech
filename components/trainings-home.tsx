import Link from 'next/link'

export default function Trainings() {
  const trainings = [
    {
      title: 'Web Development Bootcamp',
      duration: '2 weeks',
      icon: '💻',
      description: 'Intensive bootcamp covering modern web development with React, TypeScript, and best practices.',
      level: 'Intermediate'
    },
    {
      title: 'UX/UI Design Workshop',
      duration: '2 days',
      icon: '🎨',
      description: 'Hands-on workshop on user-centered design, prototyping, and design systems.',
      level: 'Beginner to Intermediate'
    },
    {
      title: 'Product Strategy Bootcamp',
      duration: '1 week',
      icon: '🚀',
      description: 'Learn to build products from idea to launch with strategic insights and frameworks.',
      level: 'Advanced'
    },
    {
      title: 'Self-Paced Courses',
      duration: 'Flexible',
      icon: '📚',
      description: 'Recorded course materials and modules you can complete at your own pace.',
      level: 'All Levels'
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-white via-spiritual-light/20 to-secondary/10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-spiritual/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Elevate Your Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Trainings & Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert-led programs designed to transform your career and unlock new opportunities in web development, design, and product strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trainings.map((training, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-spiritual/20 rounded-2xl p-8 hover:border-spiritual/60 hover:shadow-xl hover:shadow-spiritual/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-spiritual/5 rounded-full group-hover:bg-spiritual/10 transition-colors duration-300"></div>

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="text-4xl">{training.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-spiritual transition-colors duration-300">
                  {training.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {training.description}
                </p>

                {/* Meta */}
                <div className="pt-4 border-t border-spiritual/10 flex items-center justify-between text-xs">
                  <span className="bg-spiritual/10 text-spiritual px-3 py-1 rounded-full font-semibold">
                    ⏱️ {training.duration}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    {training.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Three Format Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group bg-white border-2 border-spiritual/30 rounded-2xl p-8 hover:border-spiritual/60 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl mb-4">🏫</div>
            <h3 className="text-xl font-bold text-foreground mb-3">In-Person Training</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Hands-on workshops at our Kathmandu office with direct mentoring and networking.
            </p>
            <p className="text-sm text-spiritual font-semibold">📍 Tinkune, Butwal</p>
          </div>

          <div className="group bg-white border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/60 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-foreground mb-3">Online Training</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Live remote sessions and self-paced courses for your schedule with lifetime access.
            </p>
            <p className="text-sm text-primary font-semibold">🌍 Learn from Anywhere</p>
          </div>

          <div className="group bg-white border-2 border-warning/30 rounded-2xl p-8 hover:border-warning/60 hover:shadow-lg transition-all duration-300">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-foreground mb-3">Corporate Training</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Custom programs tailored to your team's needs with dedicated support.
            </p>
            <p className="text-sm text-warning font-semibold">👥 Team-Focused</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-spiritual/10 to-primary/10 border-2 border-spiritual/30 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Transform Your Skills?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explore all our training programs and find the perfect course for your learning journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/trainings"
              className="bg-spiritual text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-spiritual/40 transition-all duration-300 hover:scale-105 inline-block"
            >
              View All Trainings →
            </Link>
            <Link
              href="/#contact"
              className="border-2 border-spiritual text-spiritual px-8 py-4 rounded-lg font-semibold hover:bg-spiritual/10 transition-all duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
