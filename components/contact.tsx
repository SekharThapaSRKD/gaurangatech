'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-spiritual-light to-background">
      <div className="absolute top-0 right-0 w-96 h-96 bg-spiritual/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center space-y-4">
          <p className="text-spiritual font-semibold text-sm tracking-widest uppercase">Begin Your Transformation</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">Share Your Vision</h2>
          <p className="text-lg text-muted-foreground">We&apos;re here to listen with an open heart. Tell us your dreams, and together we&apos;ll manifest them into reality.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white border-2 border-spiritual/30 rounded-2xl p-8 shadow-lg h-fit">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-spiritual uppercase tracking-wide">Email</p>
                  <a href="mailto:contact.gaurangatech@gmail.com" className="text-foreground hover:text-spiritual transition-colors text-base font-medium">
                    contact.gaurangatech@gmail.com
                  </a>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-spiritual uppercase tracking-wide">Location</p>
                  <p className="text-foreground text-base">Tinkune, Butwal</p>
                  <p className="text-sm text-muted-foreground">Nepal</p>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-spiritual uppercase tracking-wide">Phone</p>
                  <a href="tel:+9779800000000" className="text-foreground hover:text-spiritual transition-colors text-base font-medium">
                    +977 9800000000
                  </a>
                </div>

                {/* Working Hours */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-spiritual uppercase tracking-wide">Working Hours</p>
                  <p className="text-foreground text-base">Sun - Fri: 9:00 AM - 6:00 PM</p>
                </div>

                {/* Social Links */}
                <div className="space-y-3 pt-4 border-t border-spiritual/20">
                  <p className="text-sm font-semibold text-spiritual uppercase tracking-wide">Connect With Us</p>
                  <div className="flex flex-col gap-2">
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-spiritual transition-colors font-medium flex items-center gap-2 text-sm">
                      <span>𝕏</span> Twitter
                    </a>
                    <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-spiritual transition-colors font-medium flex items-center gap-2 text-sm">
                      <span>in</span> LinkedIn
                    </a>
                    <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-spiritual transition-colors font-medium flex items-center gap-2 text-sm">
                      <span>📷</span> Instagram
                    </a>
                  </div>
                </div>

                {/* Message */}
                <div className="pt-4 border-t border-spiritual/20">
                  <p className="text-xs text-muted-foreground italic">
                    🙏 We believe in responding with love and purpose. Your message matters to us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white border-2 border-spiritual/30 rounded-2xl p-8 shadow-lg">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-spiritual/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-spiritual focus:border-spiritual bg-spiritual/5 transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-spiritual/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-spiritual focus:border-spiritual bg-spiritual/5 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Your Vision</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-2 border-spiritual/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-spiritual focus:border-spiritual resize-none bg-spiritual/5 transition-all duration-200"
                  placeholder="Share your dreams, goals, and vision with us..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-spiritual text-primary-foreground px-6 py-4 rounded-lg text-base font-semibold hover:shadow-xl hover:shadow-spiritual/40 transition-all duration-300 hover:scale-105 transform"
              >
                Begin Our Journey Together
              </button>

              {submitted && (
                <div className="bg-success/20 border-2 border-success rounded-lg px-4 py-4 text-success text-sm font-semibold text-center">
                  🙏 Namaste! Thank you for sharing your vision. We&apos;ll reach out with love and purpose.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
