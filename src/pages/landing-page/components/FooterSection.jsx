import React from 'react';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/browniesaldanha', color: 'hover:text-pink-600' },
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/browniesaldanha', color: 'hover:text-blue-600' },
    { name: 'WhatsApp', icon: 'MessageCircle', url: 'https://wa.me/351912345678', color: 'hover:text-green-600' }
  ];

  const quickLinks = [
    { name: 'Nossa História', href: '#story' },
    { name: 'Produtos', href: '#products' },
    { name: 'Avaliações', href: '#reviews' },
    { name: 'Menu e Preços', href: '#pricing' },
    { name: 'Perguntas Frequentes', href: '#faq' },
    { name: 'Contactos', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Política de Privacidade', href: '#privacy' },
    { name: 'Termos e Condições', href: '#terms' },
    { name: 'Política de Cookies', href: '#cookies' },
    { name: 'Informações Nutricionais', href: '#nutrition' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId?.replace('#', ''));
    if (element) {
      const headerHeight = 80;
      const elementPosition = element?.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-secondary text-white">
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Cookie" size={24} color="#2D1810" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Brownie Saldanha</h3>
                <p className="text-sm opacity-80 font-accent">Sabor Autêntico do Brasil</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Trazemos o sabor autêntico dos brownies brasileiros para o Porto, 
              feitos com receitas tradicionais e ingredientes premium portugueses.
            </p>
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social?.color} hover:bg-white/20`}
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.name}>
                  <button
                    onClick={() => scrollToSection(link?.href)}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link?.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contactos</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>Rua das Flores, 123</p>
                  <p>4000-123 Porto, Portugal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="flex-shrink-0" />
                <a href="tel:+351912345678" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  +351 912 345 678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MessageCircle" size={16} className="flex-shrink-0" />
                <a 
                  href="https://wa.me/351912345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={16} className="flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>Ter-Dom: 10:00 - 22:00</p>
                  <p>Seg: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Trust */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Certificações</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Shield" size={16} className="text-green-400" />
                <span className="text-sm opacity-90">Certificação HACCP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Award" size={16} className="text-yellow-400" />
                <span className="text-sm opacity-90">Parceiro Glovo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Leaf" size={16} className="text-green-400" />
                <span className="text-sm opacity-90">Ingredientes Biológicos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Heart" size={16} className="text-red-400" />
                <span className="text-sm opacity-90">Feito com Amor</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="font-bold text-lg text-accent">4.174</div>
                  <div className="text-xs opacity-80">Seguidores</div>
                </div>
                <div>
                  <div className="font-bold text-lg text-accent">500+</div>
                  <div className="text-xs opacity-80">Clientes/Mês</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks?.map((link) => (
              <a
                key={link?.name}
                href={link?.href}
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                {link?.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © {currentYear} Brownie Saldanha. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-sm opacity-80">
              <span>Desenvolvido com</span>
              <Icon name="Heart" size={16} className="text-red-400" />
              <span>no Porto</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-xs opacity-70 max-w-2xl mx-auto">
              Brownie Saldanha é uma marca registada. Todos os brownies são feitos frescos diariamente 
              com ingredientes premium. Para alergénios e informações nutricionais, consulte as nossas FAQ 
              ou contacte-nos diretamente.
            </p>
          </div>
        </div>
      </div>
      {/* Floating WhatsApp Button - Mobile Only */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="https://wa.me/351912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          aria-label="Contactar via WhatsApp"
        >
          <Icon name="MessageCircle" size={24} color="white" />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;