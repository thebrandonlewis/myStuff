import { Link } from 'react-router-dom'

const TheUndoingPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="mb-6 text-secondary-900">The Undoing</h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto mb-8">
              A collection of thoughts, reflections, and insights on unraveling complexity 
              to find clarity, purpose, and authentic connection in our modern world.
            </p>
          </div>
          
          <div className="card p-8 md:p-12 text-left">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-secondary-900">
                  Latest Reflection
                </h3>
                <h4 className="text-xl text-primary-600 mb-3 font-medium">
                  "On Slowing Down to Speed Up"
                </h4>
                <p className="text-secondary-700 leading-relaxed mb-6">
                  In a culture obsessed with acceleration, I've discovered that the most 
                  profound breakthroughs come when we pause, breathe, and allow ourselves 
                  to truly see what's been there all along...
                </p>
                <Link to="/the-undoing" className="btn-primary">
                  Explore The Undoing
                </Link>
              </div>
              
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-warm-100 to-earth-200 rounded-2xl mx-auto flex items-center justify-center">
                    <svg className="w-16 h-16 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheUndoingPreview