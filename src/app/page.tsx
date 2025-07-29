'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.title = "Vše pro stavby | Stavební práce Liberecký kraj";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2ECC71" /><stop offset="100%" stop-color="#111827" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${typeof window !== 'undefined' ? window.btoa(faviconSvg) : ''}`;

    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;

    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#uvod', label: 'Úvod' },
    { href: '#sluzby', label: 'Služby' },
    { href: '#projekty', label: 'Projekty' },
    { href: '#onas', label: 'O nás' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const services = [
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/wall.svg', name: 'Zateplení fasád' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/layout-grid.svg', name: 'Zámková dlažba' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/home-cog.svg', name: 'Rekonstrukce a dostavby' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/tractor.svg', name: 'Výkopové a zemní práce' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/key.svg', name: 'Stavby na klíč' },
    { icon: 'https://api.iconify.design/solar/roofing-bold-duotone.svg', name: 'Klempířské a pokrývačské práce' },
  ];

  const projects = [
    {
      imgSrc: '/images/project-chalet-renovation-tanvald.jpg',
      title: 'OMLAZENÍ CHALUPY U TANVALDU',
    },
    {
      imgSrc: '/images/project-house-renovation-exterior.jpg',
      title: 'KOMPLETNÍ REKONTRUKCE RODINNÉHO DOMU',
    },
  ];

  return (
    <>
      <style jsx global>{`html { scroll-behavior: smooth; }`}</style>
      <div className="bg-gray-50 text-gray-900 font-sans">
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isHeaderScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#uvod" className="text-2xl font-bold text-gray-800">Vše pro <span className="text-green-500">stavby</span></a>
            <nav className="hidden md:flex space-x-6">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-gray-600 hover:text-green-500 transition-colors">{link.label}</a>
              ))}
            </nav>
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                <img src={`https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/${isMenuOpen ? 'x' : 'menu-2'}.svg`} alt="Menu Icon" className="w-7 h-7 text-gray-800" />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-40 bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full pt-20">
            <nav className="flex flex-col space-y-8 text-center">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={closeMenu} className="text-2xl text-gray-800 hover:text-green-500 transition-colors font-medium">{link.label}</a>
              ))}
            </nav>
          </div>
        </div>

        <main>
          {/* Hero Section */}
          <section id="uvod" className="relative h-[70vh] min-h-[400px] flex items-center justify-center text-white text-center">
            <div className="absolute inset-0">
                <Image 
                    src="/images/project-house-renovation-exterior.jpg" 
                    alt="Exteriér zrekonstruovaného domu" 
                    layout="fill" 
                    objectFit="cover" 
                    quality={85} 
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 p-6">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">STAVEBNÍ PRÁCE V LIBERECKÉM KRAJI</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">Rekonstrukce, dostavby, novostavby, zateplování fasád i pokládka zámkové dlažby.</p>
              <a href="#kontakt" className="mt-8 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">Kontaktujte nás</a>
            </div>
          </section>

          {/* Services Section */}
          <section id="sluzby" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Naše služby</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Nabízíme komplexní stavební a řemeslné práce s důrazem na kvalitu a spolehlivost.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(service => (
                  <div key={service.name} className="bg-gray-50 p-8 rounded-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
                    <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                        <img src={service.icon} alt={`${service.name} icon`} className="w-8 h-8 text-green-600"/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projekty" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Naše poslední projekty</h2>
                <p className="mt-4 text-lg text-gray-600">Podívejte se na ukázky naší nedávné práce.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map(project => (
                  <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                    <div className="relative h-64">
                       <Image src={project.imgSrc} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="onas" className="py-20 bg-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Kdo jsme?</h2>
                <div className="space-y-4 text-gray-600">
                    <p>S více než 15 lety zkušeností v oboru stavebnictví a rekonstrukcí jsme spolehlivým partnerem pro váš projekt. Působíme především v Libereckém kraji a jeho okolí.</p>
                    <p>Naším hlavním cílem je spokojenost zákazníka, které dosahujeme díky používání kvalitních materiálů, moderních technologií a preciznímu provedení práce. Každý projekt je pro nás jedinečný a přistupujeme k němu s maximální péčí a profesionalitou.</p>
                </div>
              </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 bg-green-100 rounded-full flex items-center justify-center p-4 shadow-inner">
                        <Image src="/images/logo-line-house.png" alt="Logo Vše pro stavby" width={200} height={200} objectFit="contain" />
                    </div>
                </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="kontakt" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontaktujte nás</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">Máte dotaz nebo zájem o naše služby? Neváhejte se nám ozvat.</p>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                 <div className="bg-gray-700/50 p-6 rounded-lg flex items-start space-x-4">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" alt="Phone" className="w-6 h-6 mt-1 text-green-400"/>
                    <div>
                      <h3 className="font-semibold">Telefon</h3>
                      <a href="tel:+420775054661" className="text-gray-300 hover:text-green-400">+420 775 054 661</a>
                    </div>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-lg flex items-start space-x-4">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" alt="Email" className="w-6 h-6 mt-1 text-green-400"/>
                     <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:info@vseprostavby.cz" className="text-gray-300 hover:text-green-400">info@vseprostavby.cz</a>
                    </div>
                </div>
                 <div className="bg-gray-700/50 p-6 rounded-lg flex items-start space-x-4">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" alt="Address" className="w-6 h-6 mt-1 text-green-400"/>
                    <div>
                      <h3 className="font-semibold">Adresa</h3>
                      <p className="text-gray-300">Vše pro stavby s.r.o.<br/>V TISÍCH 836, 463 31, Chrastava</p>
                      <p className="text-gray-400 text-sm mt-2">IČ: 01775191, DIČ: CZ01775191</p>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 py-6">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Vše pro stavby s.r.o. Všechna práva vyhrazena.</p>
            <p className="mt-2 text-sm">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">DigitalFusion</a></p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
