import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactSection = () => {
  const [selectedOption, setSelectedOption] = useState('whatsapp');

  const contactOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: 'MessageCircle',
      title: 'Encomenda Rápida',
      description: 'Resposta imediata para encomendas e dúvidas',
      action: 'Abrir WhatsApp',
      color: 'from-green-500 to-emerald-600',
      phone: '+351 912 345 678',
      available: '10:00 - 22:00 (Ter-Dom)'
    },
    {
      id: 'glovo',
      name: 'Glovo',
      icon: 'Truck',
      title: 'Entrega Rápida',
      description: 'Encomende através da app Glovo',
      action: 'Abrir Glovo',
      color: 'from-yellow-500 to-orange-600',
      deliveryTime: '20-45 minutos',
      coverage: 'Área Metropolitana do Porto'
    },
    {
      id: 'phone',
      name: 'Telefone',
      icon: 'Phone',
      title: 'Chamada Direta',
      description: 'Para encomendas personalizadas e eventos',
      action: 'Ligar Agora',
      color: 'from-blue-500 to-indigo-600',
      phone: '+351 912 345 678',
      available: '10:00 - 22:00 (Ter-Dom)'
    }
  ];

  const locationInfo = {
    address: 'Rua das Flores, 123\n4000-123 Porto, Portugal',
    coordinates: { lat: 41.1579, lng: -8.6291 },
    hours: {
      'Segunda': 'Fechado (Preparação)',
      'Terça-Domingo': '10:00 - 22:00'
    },
    deliveryZones: [
      'Centro do Porto',
      'Cedofeita',
      'Santo Ildefonso', 
      'Paranhos',
      'Campanhã',
      'Matosinhos',
      'Leça da Palmeira'
    ]
  };

  const handleContactAction = (option) => {
    switch (option?.id) {
      case 'whatsapp':
        const whatsappMessage = encodeURIComponent('Olá! Gostaria de fazer uma encomenda de brownies autênticos do Brasil. Podem ajudar-me?');
        window.open(`https://wa.me/351912345678?text=${whatsappMessage}`, '_blank');
        break;
      case 'glovo':
        window.open('https://glovoapp.com/pt/por/brownie-saldanha/', '_blank');
        break;
      case 'phone':
        window.open('tel:+351912345678', '_self');
        break;
      default:
        break;
    }
  };

  return (
    <section id="contact order" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            Como Encomendar
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha a forma mais conveniente para si. Estamos sempre prontos para servir!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactOptions?.map((option) => (
            <div
              key={option?.id}
              className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                selectedOption === option?.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedOption(option?.id)}
            >
              {/* Gradient Header */}
              <div className={`w-full h-2 bg-gradient-to-r ${option?.color} rounded-t-2xl absolute top-0 left-0`}></div>
              
              <div className="pt-4">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${option?.color} flex items-center justify-center mb-4`}>
                  <Icon name={option?.icon} size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {option?.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {option?.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  {option?.phone && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Phone" size={16} className="mr-2" />
                      <span>{option?.phone}</span>
                    </div>
                  )}
                  {option?.available && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} className="mr-2" />
                      <span>{option?.available}</span>
                    </div>
                  )}
                  {option?.deliveryTime && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Timer" size={16} className="mr-2" />
                      <span>{option?.deliveryTime}</span>
                    </div>
                  )}
                  {option?.coverage && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      <span>{option?.coverage}</span>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleContactAction(option)}
                  iconName={option?.icon}
                  iconPosition="left"
                  className={`${
                    option?.id === 'whatsapp' ? 'bg-[#25D366] hover:bg-[#128C7E]' :
                    option?.id === 'glovo'? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-500 hover:bg-blue-600'
                  } text-white`}
                >
                  {option?.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Delivery Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-80">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Brownie Saldanha Location"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${locationInfo?.coordinates?.lat},${locationInfo?.coordinates?.lng}&z=14&output=embed`}
                className="border-0"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl text-primary mb-4">
                Nossa Localização
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon name="MapPin" size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Endereço:</p>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {locationInfo?.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Horários:</p>
                    {Object.entries(locationInfo?.hours)?.map(([day, hours]) => (
                      <p key={day} className="text-muted-foreground">
                        <span className="font-medium">{day}:</span> {hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Zones */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-heading font-bold text-xl text-primary mb-6">
              Zonas de Entrega
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {locationInfo?.deliveryZones?.map((zone, index) => (
                <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                  <Icon name="CheckCircle" size={16} className="text-green-600 mr-3" />
                  <span className="text-foreground font-medium">{zone}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold text-foreground mb-4">Informações de Entrega:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="text-primary mr-3" />
                  <span className="text-muted-foreground">Tempo: 20-45 minutos</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Euro" size={16} className="text-primary mr-3" />
                  <span className="text-muted-foreground">Taxa: €2.50 - €4.00</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Gift" size={16} className="text-primary mr-3" />
                  <span className="text-muted-foreground">Grátis acima de €15</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" size={16} className="text-primary mr-3" />
                  <span className="text-muted-foreground">Garantia de frescura</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground text-center">
                Não vê a sua zona? Contacte-nos! Estamos sempre a expandir as nossas entregas.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <Icon name="Heart" size={48} className="mx-auto mb-4 text-accent" />
            <h3 className="font-heading font-bold text-2xl mb-4">
              Pronto para Saborear o Brasil?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Não espere mais! Os nossos brownies autênticos estão a apenas uma mensagem de distância. 
              Faça a sua encomenda agora e receba em casa em menos de 45 minutos.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const message = encodeURIComponent('🇧🇷 Olá! Estou pronto para experimentar os brownies autênticos do Brasil! Podem ajudar-me com uma encomenda?');
                window.open(`https://wa.me/351912345678?text=${message}`, '_blank');
              }}
              iconName="MessageCircle"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Fazer Encomenda Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;