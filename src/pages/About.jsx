function About() {
  return (
    <section id="about" className="py-20 bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Image Section */}
          <div>
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86"
                alt="Chai Culture Story"
                className="w-full h-[500px] object-cover hover:scale-105 duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div>
            <p className="text-[#f0c436] tracking-[4px] uppercase font-semibold mb-4">
              Our Heritage
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Where Tradition Meets Artistry
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-5">
              Chai Culture was born from a deep love for India’s rich tea
              heritage. Chai is more than a beverage — it is ritual, warmth,
              and connection.
            </p>

            <p className="text-gray-600 text-lg leading-8">
              Inspired by royal kitchens filled with freshly ground spices and
              bubbling chai, our blends honor tradition while elevating it for
              the modern connoisseur.
            </p>

            <button className="mt-8 bg-[#f0c436] hover:bg-[#f1bb08] text-white px-8 py-3 rounded-full font-medium transition duration-300 shadow-lg">
              Explore Our Story
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About