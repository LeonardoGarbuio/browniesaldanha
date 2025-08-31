import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['hero', 'story', 'products', 'reviews', 'order'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element?.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de encomendar brownies autênticos do Brasil. Podem ajudar-me?');
    window.open(`https://wa.me/351912345678?text=${message}`, '_blank');
  };

  const navigationItems = [
    { id: 'story', label: 'Nossa História', icon: 'Heart' },
    { id: 'products', label: 'Produtos', icon: 'Cookie' },
    { id: 'reviews', label: 'Avaliações', icon: 'Star' },
    { id: 'order', label: 'Encomendar', icon: 'ShoppingCart' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-medium border-b border-border/20' 
          : 'bg-transparent'
      }`}>
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Cookie" size={24} color="white" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-heading font-bold text-xl text-primary">
                  Brownie Saldanha
                </h1>
                <p className="text-xs text-muted-foreground font-accent">
                  Sabor Autêntico do Brasil
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => scrollToSection(item?.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-250 font-heading font-medium ${
                    activeSection === item?.id
                      ? 'text-accent bg-accent/10' :'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </button>
              ))}
            </nav>

            {/* WhatsApp CTA & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="default"
                onClick={handleWhatsAppClick}
                iconName="MessageCircle"
                iconPosition="left"
                className="hidden sm:flex bg-[#25D366] hover:bg-[#128C7E] text-white cta-elevation"
              >
                Encomende Já
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-background/95 backdrop-blur-md border-t border-border/20">
            <div className="container-max section-padding py-4">
              <nav className="flex flex-col space-y-2">
                {navigationItems?.map((item) => (
                  <button
                    key={item?.id}
                    onClick={() => scrollToSection(item?.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-250 font-heading font-medium text-left ${
                      activeSection === item?.id
                        ? 'text-accent bg-accent/10' :'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    <Icon name={item?.icon} size={20} />
                    <span>{item?.label}</span>
                  </button>
                ))}
                
                <div className="pt-4 border-t border-border/20">
                  <Button
                    variant="default"
                    onClick={handleWhatsAppClick}
                    iconName="MessageCircle"
                    iconPosition="left"
                    fullWidth
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white cta-elevation"
                  >
                    Encomende pelo WhatsApp
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-20 left-0 right-0 z-90 h-1 bg-muted">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
          style={{
            width: `${Math.min(100, (window.scrollY / (document.documentElement?.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-100">
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-strong hover:shadow-xl transition-all duration-300 animate-bounce-gentle"
          aria-label="Contactar via WhatsApp"
        >
          <Icon name="MessageCircle" size={24} color="white" />
        </button>
      </div>
    </>
  );
};

export default Header;