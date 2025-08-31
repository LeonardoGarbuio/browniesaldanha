import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UrgencySection = () => {
  const [inventory, setInventory] = useState({
    classico: 12,
    doceLeite: 8,
    vegano: 15,
    prestigio: 6
  });

  const [timeUntilNextBatch, setTimeUntilNextBatch] = useState({
    hours: 4,
    minutes: 32,
    seconds: 45
  });

  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      setTimeUntilNextBatch(prev => {
        if (prev?.seconds > 0) {
          return { ...prev, seconds: prev?.seconds - 1 };
        } else if (prev?.minutes > 0) {
          return { ...prev, minutes: prev?.minutes - 1, seconds: 59 };
        } else if (prev?.hours > 0) {
          return { hours: prev?.hours - 1, minutes: 59, seconds: 59 };
        }
        // Reset for next day
        return { hours: 8, minutes: 0, seconds: 0 };
      });
    }, 1000);

    // Simulate inventory updates
    const inventoryTimer = setInterval(() => {
      setInventory(prev => {
        const newInventory = { ...prev };
        const products = Object.keys(newInventory);
        const randomProduct = products?.[Math.floor(Math.random() * products?.length)];
        
        if (newInventory?.[randomProduct] > 0 && Math.random() > 0.7) {
          newInventory[randomProduct] -= 1;
          setLastUpdate(new Date());
        }
        
        return newInventory;
      });
    }, 30000); // Update every 30 seconds

    return () => {
      clearInterval(timer);
      clearInterval(inventoryTimer);
    };
  }, []);

  const products = [
    {
      id: 'classico',
      name: 'Brownie Clássico',
      price: '3.50',
      stock: inventory?.classico,
      maxStock: 20,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'doceLeite',
      name: 'Brownie Doce de Leite',
      price: '4.00',
      stock: inventory?.doceLeite,
      maxStock: 15,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'vegano',
      name: 'Brownie Vegano',
      price: '4.50',
      stock: inventory?.vegano,
      maxStock: 18,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 'prestigio',
      name: 'Brownie Prestígio',
      price: '4.25',
      stock: inventory?.prestigio,
      maxStock: 12,
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const getStockStatus = (stock, maxStock) => {
    const percentage = (stock / maxStock) * 100;
    if (percentage <= 20) return { status: 'critical', color: 'text-red-600', bg: 'bg-red-100' };
    if (percentage <= 50) return { status: 'low', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { status: 'good', color: 'text-green-600', bg: 'bg-green-100' };
  };

  const handleQuickOrder = (product) => {
    const message = encodeURIComponent(
      `🚨 ENCOMENDA URGENTE 🚨\n\n${product?.name} - €${product?.price}\nStock atual: ${product?.stock} unidades\n\nGostaria de reservar antes que esgote!`
    );
    window.open(`https://wa.me/351912345678?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="AlertTriangle" size={16} className="mr-2" />
            STOCK LIMITADO - LOTES DIÁRIOS
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            Brownies Frescos Hoje
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Fazemos lotes frescos todos os dias. Quando acabam, só amanhã! Reserve já o seu.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center mb-12">
          <Icon name="Clock" size={48} className="mx-auto mb-4 text-accent" />
          <h3 className="font-heading font-bold text-2xl mb-4">
            Próximo Lote Fresco em:
          </h3>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent">
                {String(timeUntilNextBatch?.hours)?.padStart(2, '0')}
              </div>
              <div className="text-sm opacity-80">Horas</div>
            </div>
            <div className="text-4xl font-bold text-accent">:</div>
            <div>
              <div className="text-4xl font-bold text-accent">
                {String(timeUntilNextBatch?.minutes)?.padStart(2, '0')}
              </div>
              <div className="text-sm opacity-80">Minutos</div>
            </div>
            <div className="text-4xl font-bold text-accent">:</div>
            <div>
              <div className="text-4xl font-bold text-accent">
                {String(timeUntilNextBatch?.seconds)?.padStart(2, '0')}
              </div>
              <div className="text-sm opacity-80">Segundos</div>
            </div>
          </div>
        </div>

        {/* Real-time Inventory */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-bold text-xl text-primary">
              Stock em Tempo Real
            </h3>
            <div className="text-sm text-muted-foreground">
              Última atualização: {lastUpdate?.toLocaleTimeString('pt-PT')}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.map((product) => {
              const stockStatus = getStockStatus(product?.stock, product?.maxStock);
              return (
                <div key={product?.id} className="border rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={product?.image} 
                      alt={product?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{product?.name}</h4>
                  <div className="text-lg font-bold text-primary mb-3">€{product?.price}</div>
                  {/* Stock Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-muted-foreground">Stock:</span>
                      <span className={`text-sm font-semibold ${stockStatus?.color}`}>
                        {product?.stock} unidades
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          stockStatus?.status === 'critical' ? 'bg-red-500' :
                          stockStatus?.status === 'low' ? 'bg-orange-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${(product?.stock / product?.maxStock) * 100}%` }}
                      />
                    </div>
                  </div>
                  {/* Stock Warning */}
                  {stockStatus?.status === 'critical' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-2 mb-3">
                      <div className="flex items-center text-red-600 text-xs">
                        <Icon name="AlertTriangle" size={14} className="mr-1" />
                        <span>Últimas unidades!</span>
                      </div>
                    </div>
                  )}
                  {stockStatus?.status === 'low' && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 mb-3">
                      <div className="flex items-center text-orange-600 text-xs">
                        <Icon name="Clock" size={14} className="mr-1" />
                        <span>Stock baixo</span>
                      </div>
                    </div>
                  )}
                  <Button
                    variant={stockStatus?.status === 'critical' ? 'destructive' : 'default'}
                    size="sm"
                    fullWidth
                    onClick={() => handleQuickOrder(product)}
                    disabled={product?.stock === 0}
                    iconName={product?.stock === 0 ? 'X' : 'MessageCircle'}
                    iconPosition="left"
                    className={product?.stock === 0 ? '' : 'bg-[#25D366] hover:bg-[#128C7E] text-white'}
                  >
                    {product?.stock === 0 ? 'Esgotado' : 'Reservar Já'}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Urgency CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
            <Icon name="Zap" size={48} className="mx-auto mb-4 text-yellow-300" />
            <h3 className="font-heading font-bold text-2xl mb-4">
              Não Perca os Seus Brownies Favoritos!
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Quando o stock acaba, só voltamos a ter amanhã. Reserve já os seus brownies fresquinhos 
              e garanta que não fica sem o seu sabor favorito.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const message = encodeURIComponent('Olá! Gostaria de fazer uma encomenda antes que o stock esgote. Podem ajudar-me?');
                window.open(`https://wa.me/351912345678?text=${message}`, '_blank');
              }}
              iconName="MessageCircle"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-red-500"
            >
              Encomendar Antes que Esgote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;