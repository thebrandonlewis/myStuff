const PodcastTeaser = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-sage-50 to-earth-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-6">
              Coming Soon
            </span>
            <h2 className="mb-6">The Undoing Podcast</h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Intimate conversations about unraveling complexity, finding authentic purpose, 
              and creating sustainable change in our personal and professional lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-secondary-900">
                What to Expect
              </h3>
              <ul className="space-y-4 text-secondary-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sage-500 rounded-full mt-2"></div>
                  <span>Deep conversations with thought leaders in sustainability and wellness</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-earth-500 rounded-full mt-2"></div>
                  <span>Practical insights for integrating slow living into busy lives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <span>Stories of transformation and intentional business building</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-warm-500 rounded-full mt-2"></div>
                  <span>Reflections on finding balance in an accelerated world</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-sage-200 to-earth-200 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-medium">
                  <svg className="w-10 h-10 text-sage-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  First Episode
                </h4>
                <p className="text-secondary-600 text-sm">
                  Launching Winter 2024
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent-400 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-primary-400 rounded-full"></div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-soft">
              <svg className="w-5 h-5 text-sage-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h5v-5H4v5zM13 4h5v5h-5V4zM4 4h5v5H4V4z" />
              </svg>
              <span className="text-secondary-700 font-medium">
                Be the first to know when we launch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PodcastTeaser