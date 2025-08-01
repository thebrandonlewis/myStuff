import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-100 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-gradient mb-6 animate-fade-in">
            Creating Meaningful Change Through Intentional Design
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            I help businesses and individuals navigate transformation through fractional partnerships, 
            slow living practices, and thoughtful design solutions that honor both growth and sustainability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link to="/about" className="btn-primary">
              Learn About My Journey
            </Link>
            <Link to="/contact" className="btn-secondary">
              Let's Connect
            </Link>
          </div>
          
          {/* Visual Element */}
          <div className="mt-16 relative">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full mx-auto opacity-20 animate-bounce-gentle"></div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-warm-400 to-earth-500 rounded-full opacity-30 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 translate-x-20 w-8 h-8 bg-gradient-to-br from-sage-400 to-primary-500 rounded-full opacity-40 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection