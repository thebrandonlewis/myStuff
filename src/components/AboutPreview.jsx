import { Link } from 'react-router-dom'

const AboutPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6">A Journey of Intentional Growth</h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From corporate strategist to fractional partner, my path has been shaped by 
              a commitment to sustainable practices and meaningful relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-4 text-secondary-900">My Philosophy</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                I believe that true success comes from balancing ambition with sustainability, 
                growth with reflection, and innovation with wisdom. This philosophy guides 
                everything I do, from business partnerships to personal practices.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">Sustainable business practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-secondary-700">Thoughtful design solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warm-500 rounded-full"></div>
                  <span className="text-secondary-700">Meaningful partnerships</span>
                </div>
              </div>
              
              <Link to="/about" className="btn-outline">
                Read My Full Story →
              </Link>
            </div>
            
            <div className="relative">
              <div className="card p-8">
                <blockquote className="text-lg italic text-secondary-700 mb-4">
                  "The best solutions emerge when we take time to listen, reflect, 
                  and design with both purpose and compassion."
                </blockquote>
                <cite className="text-primary-600 font-medium">— Your Name</cite>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-sage-200 to-earth-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview