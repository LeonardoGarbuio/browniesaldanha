import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [timeUntilNextBatch, setTimeUntilNextBatch] = useState({
    hours: 4,
    minutes: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntilNextBatch(prev => {
        if (prev?.minutes > 0) {
          return { ...prev, minutes: prev?.minutes - 1 };
        } else if (prev?.hours > 0) {
          return { hours: prev?.hours - 1, minutes: 59 };
        }
        return { hours: 8, minutes: 0 }; // Reset for next day
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent('Olá! Gostaria de encomendar brownies autênticos do Brasil. Podem ajudar-me com o menu e preços?');
    window.open(`https://wa.me/351912345678?text=${message}`, '_blank');
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
          alt="Delicious Brazilian brownies with chocolate drizzle"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-primary mb-6 text-shadow">
            Brownies Autênticos do Brasil
            <span className="block text-2xl md:text-3xl lg:text-4xl text-secondary mt-2">
              no Coração do Porto
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Do Rio para Portugal: Feitos artesanalmente todos os dias com receitas tradicionais e ingredientes premium portugueses
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppOrder}
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8 py-4 cta-elevation"
            >
              Encomendar via WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToProducts}
              iconName="ChefHat"
              iconPosition="left"
              className="text-primary border-primary hover:bg-primary/10 text-lg px-8 py-4"
            >
              Ver Menu
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Instagram Metrics */}
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Instagram" size={24} className="text-pink-600" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">4.174 Seguidores</p>
                  <p className="text-sm text-muted-foreground">305 Posts</p>
                </div>
              </div>

              {/* Glovo Partnership */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={16} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Parceiro Glovo</p>
                  <p className="text-sm text-muted-foreground">Entrega em 30min</p>
                </div>
              </div>

              {/* Fresh Batch Timer */}
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Clock" size={24} className="text-accent" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Próximo Lote</p>
                  <p className="text-sm text-accent font-medium">
                    {timeUntilNextBatch?.hours}h {timeUntilNextBatch?.minutes}min
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;