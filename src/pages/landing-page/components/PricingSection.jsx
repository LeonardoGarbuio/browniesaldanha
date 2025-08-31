import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const PricingSection = () => {
  const [activeCategory, setActiveCategory] = useState('individual');
  const [postalCode, setPostalCode] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState(null);

  const categories = [
    { id: 'individual', name: 'Brownies Individuais', icon: 'Cookie' },
    { id: 'cakes', name: 'Bolos Decorados', icon: 'Cake' },
    { id: 'boxes', name: 'Caixas Presente', icon: 'Gift' }
  ];

  const pricing = {
    individual: [
      {
        name: "Brownie Clássico",
        price: "3.50",
        description: "Chocolate meio amargo com nozes",
        popular: false
      },
      {
        name: "Brownie Doce de Leite",
        price: "4.00",
        description: "Recheado com doce de leite cremoso",
        popular: true
      },
      {
        name: "Brownie Vegano",
        price: "4.50",
        description: "Plant-based sem perder o sabor",
        popular: false
      },
      {
        name: "Brownie Prestígio",
        price: "4.25",
        description: "Chocolate com coco ralado",
        popular: false
      }
    ],
    cakes: [
      {
        name: "Bolo Brigadeiro (8-10 pessoas)",
        price: "25.00",
        description: "Massa de chocolate com brigadeiro",
        popular: true
      },
      {
        name: "Bolo Prestígio (8-10 pessoas)",
        price: "28.00",
        description: "Chocolate com coco e chocolate branco",
        popular: false
      },
      {
        name: "Bolo Personalizado (8-10 pessoas)",
        price: "35.00",
        description: "Design personalizado para ocasiões especiais",
        popular: false
      }
    ],
    boxes: [
      {
        name: "Caixa Família (6 unidades)",
        price: "18.00",
        description: "Mix de brownies variados",
        originalPrice: "21.00",
        popular: true
      },
      {
        name: "Caixa Presente (12 unidades)",
        price: "32.00",
        description: "Embalagem premium para presente",
        originalPrice: "36.00",
        popular: false
      },
      {
        name: "Caixa Festa (24 unidades)",
        price: "60.00",
        description: "Perfeita para eventos e celebrações",
        originalPrice: "72.00",
        popular: false
      }
    ]
  };

  const deliveryZones = {
    '4000': { zone: 'Centro do Porto', time: '20-30 min', fee: '2.50' },
    '4100': { zone: 'Cedofeita/Santo Ildefonso', time: '25-35 min', fee: '2.50' },
    '4200': { zone: 'Paranhos', time: '30-40 min', fee: '3.00' },
    '4300': { zone: 'Campanhã', time: '25-35 min', fee: '2.50' },
    '4400': { zone: 'Matosinhos', time: '35-45 min', fee: '3.50' },
    '4450': { zone: 'Leça da Palmeira', time: '40-50 min', fee: '4.00' }
  };

  const checkDelivery = () => {
    const code = postalCode?.substring(0, 4);
    const zone = deliveryZones?.[code];
    
    if (zone) {
      setDeliveryInfo({
        available: true,
        ...zone
      });
    } else {
      setDeliveryInfo({
        available: false,
        message: 'Ainda não entregamos nesta zona. Contacte-nos para mais informações.'
      });
    }
  };

  const handleOrder = (item) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de encomendar:\n\n${item?.name} - €${item?.price}\n${item?.description}\n\nCódigo Postal: ${postalCode}\n\nPode confirmar disponibilidade?`
    );
    window.open(`https://wa.me/351912345678?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            Menu e Preços
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Preços justos para brownies autênticos. Verifique se entregamos na sua zona!
          </p>
        </div>

        {/* Delivery Zone Checker */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-12 max-w-2xl mx-auto">
          <h3 className="font-heading font-bold text-xl text-center text-primary mb-6">
            Verificar Zona de Entrega
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Ex: 4000-123"
                value={postalCode}
                onChange={(e) => setPostalCode(e?.target?.value)}
                label="Código Postal"
                className="mb-0"
              />
            </div>
            <Button
              variant="default"
              onClick={checkDelivery}
              disabled={!postalCode}
              iconName="Search"
              iconPosition="left"
              className="sm:mt-6"
            >
              Verificar
            </Button>
          </div>

          {deliveryInfo && (
            <div className={`mt-4 p-4 rounded-lg ${
              deliveryInfo?.available 
                ? 'bg-green-50 border border-green-200' :'bg-red-50 border border-red-200'
            }`}>
              {deliveryInfo?.available ? (
                <div className="text-green-700">
                  <div className="flex items-center mb-2">
                    <Icon name="CheckCircle" size={20} className="mr-2" />
                    <span className="font-semibold">Entregamos na sua zona!</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                    <div>
                      <strong>Zona:</strong> {deliveryInfo?.zone}
                    </div>
                    <div>
                      <strong>Tempo:</strong> {deliveryInfo?.time}
                    </div>
                    <div>
                      <strong>Taxa:</strong> €{deliveryInfo?.fee}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-red-700">
                  <div className="flex items-center mb-2">
                    <Icon name="XCircle" size={20} className="mr-2" />
                    <span className="font-semibold">Zona não coberta</span>
                  </div>
                  <p className="text-sm">{deliveryInfo?.message}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary hover:bg-primary/10 shadow-md'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricing?.[activeCategory]?.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              {item?.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {item?.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item?.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2">
                  {item?.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      €{item?.originalPrice}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-primary">
                    €{item?.price}
                  </span>
                </div>

                {item?.originalPrice && (
                  <div className="mt-2">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                      Poupa €{(parseFloat(item?.originalPrice) - parseFloat(item?.price))?.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>

              <Button
                variant="default"
                fullWidth
                onClick={() => handleOrder(item)}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                disabled={!deliveryInfo?.available}
              >
                {deliveryInfo?.available ? 'Encomendar Agora' : 'Verificar Entrega'}
              </Button>
            </div>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Icon name="Truck" size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">
              Informações de Entrega
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Horário de Entrega</h4>
              <p className="text-sm text-muted-foreground">
                Terça a Domingo<br />
                10:00 - 22:00
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Euro" size={24} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Entrega Grátis</h4>
              <p className="text-sm text-muted-foreground">
                Em encomendas<br />
                acima de €15
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-yellow-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Garantia</h4>
              <p className="text-sm text-muted-foreground">
                Satisfação garantida<br />
                ou devolvemos o dinheiro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;