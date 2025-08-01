const NewsletterSignup = () => {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6">Stay in the Loop</h2>
          <p className="text-xl text-secondary-600 mb-8">
            Get monthly updates on new offerings, insights, and resources 
            for intentional living and sustainable business practices.
          </p>
          
          {/* Mailchimp Embed Placeholder */}
          <div className="card p-8">
            <h3 className="text-xl font-semibold mb-6 text-secondary-900">
              The Monthly Intention
            </h3>
            
            {/* Replace this form with actual Mailchimp embed code */}
            <form 
              action="#mailchimp-action-url" 
              method="post"
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="newsletter-firstname" className="sr-only">First Name</label>
                  <input
                    type="text"
                    id="newsletter-firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="text-left">
                <p className="text-sm text-secondary-600 mb-4">I'm interested in: (optional)</p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" name="interests" value="fractional" className="mr-2 text-primary-600 focus:ring-primary-500" />
                    <span className="text-secondary-700">Fractional partnerships</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interests" value="slow-living" className="mr-2 text-primary-600 focus:ring-primary-500" />
                    <span className="text-secondary-700">Slow living practices</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interests" value="undoing" className="mr-2 text-primary-600 focus:ring-primary-500" />
                    <span className="text-secondary-700">The Undoing reflections</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interests" value="podcast" className="mr-2 text-primary-600 focus:ring-primary-500" />
                    <span className="text-secondary-700">Podcast updates</span>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Subscribe to Newsletter
              </button>
            </form>
            
            <p className="text-xs text-secondary-500 mt-4">
              We respect your privacy. No spam, ever. Unsubscribe anytime.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center space-x-8 text-sm text-secondary-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Monthly delivery
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Privacy protected
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              No spam
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup