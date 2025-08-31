import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CulturalStorySection = () => {
  const ingredients = [
    { name: 'Chocolate Belga Premium', origin: 'Portugal' },
    { name: 'Açúcar Mascavo', origin: 'Brasil' },
    { name: 'Ovos de Quinta', origin: 'Portugal' },
    { name: 'Farinha Especial', origin: 'Brasil' },
    { name: 'Manteiga Artesanal', origin: 'Portugal' }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            Uma Jornada de Sabores
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Do Rio de Janeiro para o Porto, trazemos a autenticidade dos brownies brasileiros com a qualidade dos ingredientes portugueses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Rio de Janeiro Side */}
          <div className="space-y-6">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cristo Redentor no Rio de Janeiro"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-red-500" />
                  <span className="font-semibold text-sm">Rio de Janeiro, Brasil</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-heading font-bold text-xl text-primary mb-4">
                Receitas Tradicionais
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nascidas nas confeitarias cariocas, nossas receitas foram passadas de geração em geração. 
                O segredo está na combinação perfeita de chocolate, açúcar mascavo e o toque especial 
                que só o carinho brasileiro sabe dar.
              </p>
            </div>
          </div>

          {/* Porto Side */}
          <div className="space-y-6">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cidade do Porto com azulejos portugueses"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-blue-600" />
                  <span className="font-semibold text-sm">Porto, Portugal</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-heading font-bold text-xl text-primary mb-4">
                Ingredientes Premium
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Aqui no Porto, selecionamos os melhores ingredientes portugueses para elevar 
                ainda mais o sabor dos nossos brownies. Chocolate belga, ovos de quinta e 
                manteiga artesanal fazem toda a diferença.
              </p>
            </div>
          </div>
        </div>

        {/* Ingredient Flow */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="font-heading font-bold text-2xl text-center text-primary mb-8">
            A Fusão Perfeita de Ingredientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ingredients?.map((ingredient, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${
                  ingredient?.origin === 'Brasil' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <Icon 
                    name={ingredient?.origin === 'Brasil' ? 'Leaf' : 'Crown'} 
                    size={24} 
                    className={ingredient?.origin === 'Brasil' ? 'text-green-600' : 'text-red-600'} 
                  />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">
                  {ingredient?.name}
                </h4>
                <p className={`text-xs font-medium ${
                  ingredient?.origin === 'Brasil' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {ingredient?.origin}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalStorySection;