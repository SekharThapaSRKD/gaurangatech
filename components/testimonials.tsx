'use client'

import { useState } from 'react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Poudel',
      role: 'CEO, TechStart Nepal',
      avatar: '👨‍💼',
      content:
        'Working with Gauranga Tech was a transformative experience. They didn\'t just build our platform; they understood our vision and brought it to life with incredible attention to detail and spiritual mindfulness.',
      rating: 5,
      highlight: 'Visionary partners'
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, Spiritual Wellness Co',
      avatar: '👩‍💼',
      content:
        'Their team brought a unique blend of technical excellence and human-centered design. The app we launched exceeded all expectations and our users absolutely love it. Truly a blessing to work with them.',
      rating: 5,
      highlight: 'Exceeds expectations'
    },
    {
      name: 'Amit Mishra',
      role: 'Director, Local Education Hub',
      avatar: '👨‍🏫',
      content:
        'From concept to launch, Gauranga Tech guided us every step of the way. Their expertise in EdTech combined with their compassionate approach made all the difference. Highly recommended!',
      rating: 5,
      highlight: 'Guided excellence'
    },
    {
      name: 'Sunita Gautam',
      role: 'Founder, Green Living Initiative',
      avatar: '👩‍🌾',
      content:
        'The platform they created for our community engagement initiative has impacted thousands of lives. Their commitment to our mission was evident in every line of code. Pure dedication.',
      rating: 5,
      highlight: 'Community impact'
    },
    {
      name: 'Dev Khatri',
      role: 'Artisan Collective Director',
      avatar: '👨‍🎨',
      content:
        'We needed a marketplace solution that reflected our artistic vision. Gauranga Tech not only delivered but enhanced our brand in ways we never imagined. They\'re true partners in success.',
      rating: 5,
      highlight: 'Brand elevation'
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-spiritual-light/50 via-secondary/20 to-background">
      <div className="absolute top-20 right-0 w-96 h-96 bg-spiritual/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Their Words</p>
          <h2 className="text-4xl font-bold text-foreground">Voices of Our Community</h2>
          <p className="text-lg text-muted-foreground">
            Hear how our partnerships have created meaningful transformation and lasting impact.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <div className="bg-white border-2 border-spiritual/30 rounded-3xl p-10 md:p-12 shadow-xl relative overflow-hidden group">
            {/* Decorative quote mark */}
            <div className="absolute top-6 right-8 text-6xl text-spiritual/10 font-serif">
              "
            </div>

            <div className="relative z-10 space-y-8">
              {/* Rating Stars */}
              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                {currentTestimonial.content}
              </p>

              {/* Highlight */}
              <div className="inline-block bg-spiritual/10 border-2 border-spiritual/30 rounded-full px-4 py-2">
                <p className="text-sm font-semibold text-spiritual">✨ {currentTestimonial.highlight}</p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t-2 border-spiritual/20">
                <div className="text-4xl">{currentTestimonial.avatar}</div>
                <div>
                  <p className="text-lg font-bold text-foreground">{currentTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-8 px-4">
            <button
              onClick={prevTestimonial}
              className="bg-spiritual text-white p-3 rounded-full hover:shadow-lg hover:shadow-spiritual/40 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous testimonial"
            >
              <span className="text-xl">←</span>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-spiritual w-8' : 'bg-spiritual/30 w-2 hover:bg-spiritual/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-spiritual text-white p-3 rounded-full hover:shadow-lg hover:shadow-spiritual/40 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Next testimonial"
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white border-2 border-spiritual/20 rounded-2xl hover:border-spiritual/60 transition-colors duration-300">
            <p className="text-4xl font-bold text-spiritual mb-2">5+</p>
            <p className="text-sm text-muted-foreground font-semibold">Years of Excellence</p>
          </div>
          <div className="text-center p-6 bg-white border-2 border-spiritual/20 rounded-2xl hover:border-spiritual/60 transition-colors duration-300">
            <p className="text-4xl font-bold text-spiritual mb-2">100%</p>
            <p className="text-sm text-muted-foreground font-semibold">Client Satisfaction</p>
          </div>
          <div className="text-center p-6 bg-white border-2 border-spiritual/20 rounded-2xl hover:border-spiritual/60 transition-colors duration-300">
            <p className="text-4xl font-bold text-spiritual mb-2">50+</p>
            <p className="text-sm text-muted-foreground font-semibold">Projects Delivered</p>
          </div>
        </div>
      </div>
    </section>
  )
}
