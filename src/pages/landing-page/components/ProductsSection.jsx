import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('brownies');

  const categories = [
    { id: 'brownies', name: 'Brownies Individuais', icon: 'Cookie' },
    { id: 'cakes', name: 'Bolos Decorados', icon: 'Cake' },
    { id: 'boxes', name: 'Caixas Presente', icon: 'Gift' }
  ];

  const products = {
    brownies: [
      {
        id: 1,
        name: "Brownie Clássico",
        description: "O tradicional brownie brasileiro com chocolate meio amargo e nozes",
        price: "3.50",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        ingredients: ["Chocolate Belga", "Nozes", "Açúcar Mascavo", "Ovos Frescos"],
        popular: true
      },
      {
        id: 2,
        name: "Brownie de Doce de Leite",
        description: "Brownie recheado com doce de leite argentino cremoso",
        price: "4.00",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        ingredients: ["Chocolate", "Doce de Leite", "Manteiga Artesanal", "Farinha Especial"]
      },
      {
        id: 3,
        name: "Brownie Vegano",
        description: "Versão plant-based sem perder o sabor autêntico",
        price: "4.50",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        ingredients: ["Chocolate 70%", "Leite de Coco", "Açúcar de Coco", "Farinha de Amêndoa"],
        special: "Vegano"
      }
    ],
    cakes: [
      {
        id: 4,
        name: "Bolo Brigadeiro",
        description: "Bolo de chocolate com cobertura de brigadeiro e granulado",
        price: "25.00",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        ingredients: ["Massa de Chocolate", "Brigadeiro Cremoso", "Granulado Belga", "Decoração Personalizada"],
        serves: "8-10 pessoas"
      },
      {
        id: 5,
        name: "Bolo Prestígio",
        description: "Bolo de chocolate com coco e cobertura de chocolate branco",
        price: "28.00",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        ingredients: ["Massa de Chocolate", "Recheio de Coco", "Chocolate Branco", "Coco Ralado"],
        serves: "8-10 pessoas"
      }
    ],
    boxes: [
      {
        id: 6,
        name: "Caixa Família",
        description: "6 brownies variados para compartilhar",
        price: "18.00",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        ingredients: ["2x Clássico", "2x Doce de Leite", "2x Especiais", "Embalagem Premium"],
        savings: "Poupa 3€"
      }
    ]
  };

  const handleQuickOrder = (product) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de encomendar:\n\n${product?.name} - €${product?.price}\n${product?.description}\n\nPode confirmar disponibilidade e tempo de entrega?`
    );
    window.open(`https://wa.me/351912345678?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            Nossos Produtos Especiais
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada brownie e bolo é feito com amor, usando receitas tradicionais brasileiras e ingredientes premium portugueses
          </p>
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.[activeCategory]?.map((product) => (
            <div key={product?.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product?.popular && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                {product?.special && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product?.special}
                  </div>
                )}
                {product?.savings && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product?.savings}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    {product?.name}
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    €{product?.price}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product?.description}
                </p>

                {product?.serves && (
                  <div className="flex items-center mb-4 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} className="mr-2" />
                    <span>Serve {product?.serves}</span>
                  </div>
                )}

                {/* Ingredients */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Ingredientes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product?.ingredients?.map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Order Button */}
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleQuickOrder(product)}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  Encomendar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Orders CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
          <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-accent" />
          <h3 className="font-heading font-bold text-2xl mb-4">
            Encomendas Personalizadas
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Precisa de algo especial? Fazemos bolos personalizados para aniversários, casamentos e eventos especiais. 
            Entre em contacto connosco!
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const message = encodeURIComponent('Olá! Gostaria de fazer uma encomenda personalizada. Podem ajudar-me?');
              window.open(`https://wa.me/351912345678?text=${message}`, '_blank');
            }}
            iconName="MessageCircle"
            iconPosition="left"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Falar Connosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;