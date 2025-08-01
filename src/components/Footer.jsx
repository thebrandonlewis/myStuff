import { Link } from 'react-router-dom'

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Fractional', href: '/fractional' },
    { name: 'Slow Living', href: '/slow-living' },
    { name: 'The Undoing', href: '/the-undoing' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    {
      name: 'Substack',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.32-1.297L6.44 14.38c.61.61 1.449.978 2.372.978 1.847 0 3.344-1.497 3.344-3.344s-1.497-3.344-3.344-3.344S5.468 10.167 5.468 12.014c0 .923.368 1.762.978 2.372l-1.31 1.31c-.808-.872-1.297-2.023-1.297-3.32 0-2.695 2.186-4.881 4.881-4.881s4.881 2.186 4.881 4.881-2.186 4.881-4.881 4.881zm7.07-9.405h-1.711v6.844h1.711V7.583z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-semibold text-white mb-4">
              Your Name
            </h3>
            <p className="text-secondary-300 text-base leading-relaxed mb-6 max-w-md">
              Creating meaningful connections through thoughtful design, fractional partnerships, 
              and slow living practices. Join me on this journey of intentional growth.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-secondary-800 rounded-lg text-secondary-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            <p className="text-secondary-300 text-sm mb-4">
              Get updates on new content, insights, and offerings.
            </p>
            
            {/* Mailchimp Placeholder Form */}
            <form 
              action="#mailchimp-action-url" 
              method="post"
              className="space-y-3"
            >
              <div>
                <label htmlFor="email-footer" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email-footer"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-sm"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-secondary-400 mt-2">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-secondary-400 text-sm">
            © 2024 Your Name. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a 
              href="#" 
              className="text-secondary-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-secondary-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer