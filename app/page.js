import React from "react";

const LeadBotAILanding = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">LEADBOT<span className="text-blue-400">AI</span></div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
          Early Access
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white -z-10 rounded-3xl mx-6"></div>
        <div className="text-center lg:text-left lg:flex items-center gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-600">Automated</span> Real Estate<br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Lead Generation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Our AI scours thousands of listings and forums to deliver <span className="font-semibold">high-intent leads</span> directly to your inbox daily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg">
                Get Started - It's Free
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
            </div>
            <div className="mt-10 flex justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white"></div>
                ))}
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white text-xs font-bold">
                  500+
                </div>
              </div>
              <div className="ml-3 text-left">
                <p className="text-sm font-medium">Trusted by top agents</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative bg-white p-1 rounded-2xl shadow-xl border border-gray-100">
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                LIVE DEMO
              </div>
              <div className="h-80 bg-gray-100 rounded-xl overflow-hidden">
                {/* Placeholder for dashboard image */}
                <div className="h-full flex items-center justify-center text-gray-400">
                  AI Lead Dashboard Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Trusted by top brokerages</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['Brokerage 1', 'Brokerage 2', 'Brokerage 3', 'Brokerage 4'].map((logo) => (
              <div key={logo} className="text-gray-400 font-bold text-xl">{logo}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop chasing leads.<br />Let them come to you.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our AI identifies and qualifies leads so you can focus on closing deals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              ),
              title: "Automated Lead Capture",
              description: "24/7 scanning of MLS, Zillow, Redfin, and niche forums for motivated sellers/buyers"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
              title: "AI Qualification",
              description: "Our algorithm scores leads based on urgency, budget, and likelihood to convert"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
              title: "Daily Delivery",
              description: "Get fresh, actionable leads delivered to your inbox every morning"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How LeadBotAI Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get from zero to qualified leads in minutes</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 -ml-0.5"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  step: "1",
                  title: "Connect Your Accounts",
                  description: "Link your CRM, email, and preferred lead sources (Zillow, Realtor.com, etc.)",
                  extra: "2-minute setup"
                },
                {
                  step: "2",
                  title: "Set Your Criteria",
                  description: "Tell us what makes your ideal lead - location, price range, property type",
                  extra: "AI learns your preferences"
                },
                {
                  step: "3",
                  title: "Receive Qualified Leads",
                  description: "Get daily notifications with vetted leads ready for your pitch",
                  extra: "50-100 leads/week average"
                }
              ].map((item, index) => (
                <div key={index} className="relative lg:flex lg:items-center lg:justify-between lg:odd:flex-row-reverse">
                  <div className="lg:w-5/12 mb-6 lg:mb-0">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg z-10">
                        {item.step}
                      </div>
                      <h3 className="ml-4 text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-gray-600">{item.description}</p>
                    <p className="mt-2 text-sm text-blue-600 font-medium">{item.extra}</p>
                  </div>
                  <div className="lg:w-5/12">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-48 flex items-center justify-center">
                      <div className="text-gray-400">Step {item.step} visualization</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join thousands of agents growing their business with LeadBotAI</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "LeadBotAI delivers 3x more qualified leads than my previous methods. Worth every penny.",
              name: "Sarah Johnson",
              title: "Top Producer, Keller Williams",
              stats: "125 deals closed"
            },
            {
              quote: "I went from spending hours on lead gen to having hot leads waiting each morning. Game changer.",
              name: "Michael Chen",
              title: "Broker/Owner",
              stats: "78% conversion rate"
            },
            {
              quote: "The AI really understands what makes a good lead for my specific market. Incredibly accurate.",
              name: "David Rodriguez",
              title: "Luxury Specialist",
              stats: "$4.2M avg. sale price"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  <p className="text-blue-600 text-xs font-medium mt-1">{testimonial.stats}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your lead generation?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Join our exclusive beta program and get 3 months free</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-200 shadow-md">
              Get Early Access
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">LEADBOT<span className="text-blue-400">AI</span></div>
              <p className="mb-4">The smartest way to grow your real estate business</p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                {['Features', 'How It Works', 'Pricing', 'Case Studies'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                {['Blog', 'Guides', 'Help Center', 'API Docs'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Contact', 'Legal'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 LeadBotAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeadBotAILanding;