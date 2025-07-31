const SubstackSignup = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Join the Conversation</h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to receive weekly insights on intentional living, sustainable business practices, 
            and the art of slowing down in a fast-paced world.
          </p>
          
          {/* Substack Embed Placeholder */}
          <div className="card bg-white text-secondary-900 p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">The Intentional Letter</h3>
            <p className="text-secondary-600 mb-6 text-sm">
              Weekly reflections delivered to your inbox
            </p>
            
            {/* Placeholder form - replace with actual Substack embed */}
            <form action="#substack-action-url" method="post" className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
              >
                Subscribe to Substack
              </button>
            </form>
            
            <p className="text-xs text-secondary-500 mt-3">
              Free to subscribe • Unsubscribe anytime
            </p>
          </div>
          
          <div className="mt-8 text-primary-200 text-sm">
            Join 500+ readers who start their week with intention
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubstackSignup