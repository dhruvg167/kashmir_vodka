"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Award, Droplet, Mountain } from "lucide-react";

const KashmirVodka = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxSpeed = scrollY * 0.5;

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrollY > 50
            ? "bg-black/90 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div
            className={`text-2xl font-bold tracking-wider transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            KASHMIR
            <span className="block text-xs tracking-[0.3em] text-amber-400">
              VODKA
            </span>
          </div>
          <div
            className={`hidden md:flex space-x-8 transition-all duration-700 delay-200 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <a
              href="#heritage"
              className="text-sm tracking-wider hover:text-amber-400 transition-colors duration-300"
            >
              HERITAGE
            </a>
            <a
              href="#craft"
              className="text-sm tracking-wider hover:text-amber-400 transition-colors duration-300"
            >
              CRAFT
            </a>
            <a
              href="#experience"
              className="text-sm tracking-wider hover:text-amber-400 transition-colors duration-300"
            >
              EXPERIENCE
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wider hover:text-amber-400 transition-colors duration-300"
            >
              CONTACT
            </a>
          </div>
          <button
            className={`bg-amber-400 text-black px-6 py-2 text-sm tracking-wider hover:bg-amber-300 transition-all duration-300 hover:scale-105 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            } delay-300`}
          >
            LOCATE
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1920&q=80)",
            transform: `translateY(${parallaxSpeed}px)`,
            filter: "brightness(0.3)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-amber-400 text-sm tracking-[0.3em] mb-4">
              PURE · CRAFTED · EXCEPTIONAL
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              KASHMIR
              <span className="block text-amber-400 mt-2">VODKA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto font-light tracking-wide">
              Born from the pristine Himalayan peaks, crafted for those who
              demand excellence
            </p>
            <button className="bg-transparent border-2 border-amber-400 text-amber-400 px-10 py-4 text-sm tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-amber-400/50">
              DISCOVER THE LEGACY
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-amber-400" size={32} />
        </div>
      </section>

      {/* Heritage Section */}
      <section id="heritage" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="text-amber-400 text-xs tracking-[0.3em] mb-4">
              HERITAGE
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Forged in the
              <span className="block text-amber-400">Himalayas</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Kashmir Vodka is more than a spirit—it's a testament to purity,
              precision, and passion. Distilled from the finest grains and
              filtered through ancient Himalayan mineral deposits, every drop
              embodies the essence of nature's perfection.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our master distillers have spent decades perfecting a process that
              honors tradition while embracing innovation, creating a vodka of
              unparalleled smoothness and character.
            </p>
            <div className="flex items-center space-x-4">
              <div className="border-l-2 border-amber-400 pl-4">
                <div className="text-3xl font-bold">1947</div>
                <div className="text-sm text-gray-500 tracking-wider">
                  ESTABLISHED
                </div>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <div className="text-3xl font-bold">7X</div>
                <div className="text-sm text-gray-500 tracking-wider">
                  DISTILLED
                </div>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-gray-500 tracking-wider">PURE</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80"
                alt="Kashmir Vodka Bottle"
                className="w-full h-[600px] object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Craft Process */}
      <section id="craft" className="relative py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-amber-400 text-xs tracking-[0.3em] mb-4">
              THE PROCESS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Perfection in
              <span className="block text-amber-400">Every Drop</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplet className="w-12 h-12" />,
                title: "Pristine Water",
                desc: "Sourced from glacial springs at 4,000 meters, our water is naturally filtered through ancient rock formations.",
              },
              {
                icon: <Mountain className="w-12 h-12" />,
                title: "Seven Times Distilled",
                desc: "Each batch undergoes seven meticulous distillations, removing every impurity while preserving character.",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Master Crafted",
                desc: "Our master distillers blend tradition with precision, ensuring every bottle meets our exacting standards.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-black p-10 border border-zinc-800 hover:border-amber-400 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="text-amber-400 mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Taste the
              <span className="block text-amber-400 mt-2">Impossible</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A symphony of smoothness, clarity, and unparalleled taste that
              redefines luxury
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80"
                alt="Premium Experience"
                className="w-full h-[500px] object-cover rounded-sm"
              />
            </div>
            <div>
              <div className="text-amber-400 text-xs tracking-[0.3em] mb-4">
                EXPERIENCE
              </div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Beyond a<span className="block text-amber-400">Spirit</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Kashmir Vodka isn't just consumed—it's experienced. Each sip
                reveals layers of complexity: the crisp, clean entry, the
                velvety mid-palate, and the impossibly smooth finish that
                lingers just long enough to leave you wanting more.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Whether enjoyed neat, on the rocks, or as the foundation of your
                signature cocktail, Kashmir Vodka elevates every moment into an
                occasion.
              </p>
              <button className="border-2 border-amber-400 text-amber-400 px-8 py-3 text-sm tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-105">
                EXPLORE COCKTAILS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-xs tracking-[0.3em] mb-4">
              ACCOLADES
            </div>
            <h2 className="text-5xl font-bold">Recognition & Awards</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                year: "2025",
                award: "Best Premium Vodka",
                org: "World Spirits Competition",
              },
              {
                year: "2024",
                award: "Double Gold Medal",
                org: "San Francisco Spirits",
              },
              {
                year: "2023",
                award: "Distiller of the Year",
                org: "International Wine & Spirit",
              },
              {
                year: "2022",
                award: "Platinum Award",
                org: "Beverage Testing Institute",
              },
            ].map((award, i) => (
              <div
                key={i}
                className="border border-zinc-800 p-8 hover:border-amber-400 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  {award.year}
                </div>
                <div className="text-lg font-semibold mb-2">{award.award}</div>
                <div className="text-sm text-gray-500">{award.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="collection" className="relative py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-amber-400 text-xs tracking-[0.3em] mb-4">
              THE COLLECTION
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our Exceptional
              <span className="block text-amber-400 mt-2">Range</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each expression in our collection represents the pinnacle of vodka
              craftsmanship, designed for discerning connoisseurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                name: "Kashmir Classic",
                subtitle: "Original",
                desc: "Our signature blend. Seven times distilled for unparalleled smoothness and clarity.",
                volume: "750ml",
                abv: "40% ABV",
                image:
                  "https://images.unsplash.com/photo-1558346547-4439467fca90?w=600&q=80",
                badge: "SIGNATURE",
              },
              {
                name: "Kashmir Reserve",
                subtitle: "Premium",
                desc: "Aged in oak barrels for subtle complexity. A refined expression of our craft.",
                volume: "750ml",
                abv: "42% ABV",
                image:
                  "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&q=80",
                badge: "AGED",
              },
              {
                name: "Kashmir Platinum",
                subtitle: "Ultra-Premium",
                desc: "Nine times distilled through diamond filters. The epitome of purity and elegance.",
                volume: "750ml",
                abv: "40% ABV",
                image:
                  "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&q=80",
                badge: "ULTRA PREMIUM",
              },
              {
                name: "Kashmir Black",
                subtitle: "Limited Edition",
                desc: "Infused with rare Himalayan minerals. A bold statement of luxury and distinction.",
                volume: "750ml",
                abv: "43% ABV",
                image:
                  "https://images.unsplash.com/photo-1564758866565-6f9de6e864b1?w=600&q=80",
                badge: "LIMITED",
              },
              {
                name: "Kashmir Royale",
                subtitle: "Exclusive",
                desc: "Hand-numbered bottles. Our masterpiece reserved for true connoisseurs.",
                volume: "750ml",
                abv: "45% ABV",
                image:
                  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
                badge: "EXCLUSIVE",
              },
            ].map((product, i) => (
              <div
                key={i}
                className="group relative bg-zinc-950 border border-zinc-800 overflow-hidden hover:border-amber-400 transition-all duration-700 hover:transform hover:scale-105"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20 bg-amber-400 text-black text-xs px-3 py-1 tracking-wider font-bold">
                  {product.badge}
                </div>

                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-zinc-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-amber-400 text-xs tracking-[0.3em] mb-2">
                    {product.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[60px]">
                    {product.desc}
                  </p>

                  {/* Specs */}
                  <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                    <span>{product.volume}</span>
                    <span className="text-amber-400">{product.abv}</span>
                  </div>

                  {/* CTA */}
                  <button className="w-full border border-amber-400 text-amber-400 py-3 text-xs tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300">
                    LEARN MORE
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 border-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Experience
            <span className="block text-amber-400 mt-2">Excellence?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Find Kashmir Vodka at select premium retailers and luxury
            establishments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-400 text-black px-10 py-4 text-sm tracking-widest hover:bg-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/50">
              FIND NEAR YOU
            </button>
            <button className="border-2 border-amber-400 text-amber-400 px-10 py-4 text-sm tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-105">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold tracking-wider mb-2">
                KASHMIR
              </div>
              <div className="text-xs tracking-[0.3em] text-amber-400 mb-4">
                VODKA
              </div>
              <p className="text-sm text-gray-500">
                Crafted for excellence since 1947
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider mb-4">EXPLORE</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="hover:text-amber-400 cursor-pointer transition-colors">
                  Heritage
                </div>
                <div className="hover:text-amber-400 cursor-pointer transition-colors">
                  Our Craft
                </div>
                <div className="hover:text-amber-400 cursor-pointer transition-colors">
                  Cocktails
                </div>
                <div className="hover:text-amber-400 cursor-pointer transition-colors">
                  Locate
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider mb-4">FOLLOW</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="hover:text-amber-400 cursor-pointer transition-colors">
                  Instagram
                </div>
                <div className="hover:text-amber-400 cursor-pointer transition-colors">
                  Facebook
                </div>
                <div className="hover:text-amber-400 cursor-pointer transition-colors">
                  Twitter
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider mb-4">LEGAL</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="hover:text-amber-400 cursor-pointer transition-colors">
                  Privacy Policy
                </div>
                <div className="hover:text-amber-400 cursor-pointer transition-colors">
                  Terms of Use
                </div>
                <div className="hover:text-amber-400 cursor-pointer transition-colors">
                  Drink Responsibly
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 text-center text-sm text-gray-600">
            <p>
              © 2026 Kashmir Vodka. All rights reserved. Please drink
              responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KashmirVodka;