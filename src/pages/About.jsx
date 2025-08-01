const About = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-12">About</h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-secondary-600 text-center mb-12">
              This is where your full story will live - your journey, values, and what drives your work.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2>My Journey</h2>
                <p>
                  Placeholder content for your personal story. Share your background, 
                  what led you to this work, and the experiences that shaped your philosophy.
                </p>
                <p>
                  Talk about your transition from traditional business to fractional work, 
                  your discovery of slow living principles, and how these inform your approach today.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-secondary-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-secondary-500">Your Photo Here</span>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2>Values & Philosophy</h2>
              <p>
                Expand on your core beliefs and how they guide your work and life choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About