import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#0B0B0B] flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0  bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }
      }
      >

      </div>

      {/* Dark Premium Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent"></div>

      {/* Gold Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.12),transparent_40%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        
        <div className="max-w-3xl">
          
          {/* Subtitle */}
          <p className="text-[#D4AF37] uppercase tracking-[6px] text-xs sm:text-sm md:text-base mb-5 font-medium">
            Authentic Indian Heritage
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-[#FFF8E7] mb-8">
            Brew The{" "}
            <span className="text-[#D4AF37]">
              Royal
            </span>{" "}
            Tradition
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-8 max-w-2xl mb-10">
            Discover handcrafted luxury chai inspired by India’s royal culture,
            blended with premium spices and timeless traditions for a truly
            elegant tea experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            
            <Link
              to="/menu"
              className="bg-[#D4AF37] hover:bg-[#E6C068] text-black font-semibold px-8 py-4 rounded-full transition duration-300 w-fit shadow-[0_10px_40px_rgba(212,175,55,0.25)]"
            >
              Explore Collection
            </Link>

            <Link
              to="/about"
              className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 rounded-full transition duration-300 w-fit"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#0B0B0B] to-transparent"></div>
    </section>
  );
}

export default Hero;