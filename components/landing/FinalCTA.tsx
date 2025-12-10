import Button from '../Button'

export default function FinalCTA() {
  return (
    <section className="bg-gradient-sky py-20 md:py-32 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Ready to Transform Your Listings?
        </h2>
        <p className="text-xl text-white/80 mb-8">
          Join 50,000+ agents creating stunning property photos
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button
            variant="primary"
            size="lg"
            className="bg-white text-navy-dark hover:bg-gray-100 shadow-xl"
          >
            Upload Your First Photo
          </Button>
          <Button variant="ghost" size="lg" className="border-white text-white hover:bg-white/10">
            View Pricing
          </Button>
        </div>

        <p className="text-sm text-white/70">
          No credit card required for free trial
        </p>
      </div>
    </section>
  )
}

