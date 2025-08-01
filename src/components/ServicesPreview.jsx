import { Link } from 'react-router-dom'

const ServicesPreview = () => {
  const services = [
    {
      title: 'Fractional Partner',
      description: 'Strategic guidance and hands-on support for growing businesses seeking sustainable expansion.',
      features: [
        'Strategic planning & execution',
        'Team development & culture',
        'Process optimization',
        'Growth strategy consulting'
      ],
      link: '/fractional',
      bgColor: 'from-primary-50 to-primary-100',
      iconColor: 'text-primary-600'
    },
    {
      title: 'Slow Living Consultancy',
      description: 'Helping individuals and organizations embrace intentional practices for sustainable well-being.',
      features: [
        'Mindful productivity systems',
        'Work-life integration',
        'Sustainable habits design',
        'Intentional living practices'
      ],
      link: '/slow-living',
      bgColor: 'from-sage-50 to-earth-100',
      iconColor: 'text-sage-600'
    }
  ]

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">How I Can Support You</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Whether you're building a business or seeking more intentional living, 
            I offer specialized guidance rooted in sustainable practices and mindful growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className={`h-4 bg-gradient-to-r ${service.bgColor} rounded-t-xl`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.bgColor} flex items-center justify-center mr-4`}>
                    <svg className={`w-6 h-6 ${service.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {index === 0 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-900">{service.title}</h3>
                </div>
                
                <p className="text-secondary-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary-500' : 'bg-sage-500'}`}></div>
                      <span className="text-secondary-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.link} 
                  className={`inline-flex items-center font-medium transition-colors duration-200 ${
                    index === 0 ? 'text-primary-600 hover:text-primary-700' : 'text-sage-600 hover:text-sage-700'
                  }`}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview