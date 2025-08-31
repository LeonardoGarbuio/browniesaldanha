import React from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Clock",
      title: "Frescos Todos os Dias",
      description: "Preparamos os nossos brownies frescos todas as manhãs. Nunca servimos produtos de ontem.",
      timestamp: "Último lote: Hoje às 08:30",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "Award",
      title: "Receitas Autênticas",
      description: "Receitas tradicionais brasileiras passadas de geração em geração, sem alterações ou adaptações.",
      badge: "Certificado Tradicional",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "Truck",
      title: "Entrega Rápida",
      description: "Parceria com Glovo garante entrega em 30 minutos ou menos na área metropolitana do Porto.",
      guarantee: "Garantia de 30min",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const qualityFeatures = [
    {
      icon: "Leaf",
      title: "Ingredientes Premium",
      items: ["Chocolate Belga 70%", "Ovos de Quinta Biológicos", "Manteiga Artesanal", "Açúcar Mascavo Brasileiro"]
    },
    {
      icon: "Shield",
      title: "Qualidade Garantida",
      items: ["Certificação HACCP", "Controlo de Temperatura", "Embalagem Hermética", "Rastreabilidade Total"]
    },
    {
      icon: "Heart",
      title: "Feito com Amor",
      items: ["Processo Artesanal", "Atenção aos Detalhes", "Receitas Familiares", "Paixão Brasileira"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            Por Que Escolher-nos?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos a tradição brasileira com a qualidade portuguesa para criar a experiência perfeita
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits?.map((benefit, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit?.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={benefit?.icon} size={24} className="text-white" />
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {benefit?.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {benefit?.description}
                </p>

                {/* Additional Info */}
                {benefit?.timestamp && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center text-green-700">
                      <Icon name="CheckCircle" size={16} className="mr-2" />
                      <span className="text-sm font-medium">{benefit?.timestamp}</span>
                    </div>
                  </div>
                )}

                {benefit?.badge && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-center text-blue-700">
                      <Icon name="Badge" size={16} className="mr-2" />
                      <span className="text-sm font-medium">{benefit?.badge}</span>
                    </div>
                  </div>
                )}

                {benefit?.guarantee && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-center text-yellow-700">
                      <Icon name="Timer" size={16} className="mr-2" />
                      <span className="text-sm font-medium">{benefit?.guarantee}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="font-heading font-bold text-2xl text-center text-primary mb-8">
            O Nosso Compromisso com a Qualidade
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityFeatures?.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-heading font-bold text-lg text-foreground mb-4">
                  {feature?.title}
                </h4>
                <ul className="space-y-2">
                  {feature?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "4.174", label: "Seguidores Instagram", icon: "Instagram" },
            { number: "500+", label: "Brownies Vendidos/Mês", icon: "Cookie" },
            { number: "4.9", label: "Avaliação Glovo", icon: "Star" },
            { number: "30min", label: "Tempo Médio Entrega", icon: "Clock" }
          ]?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={20} className="text-accent" />
              </div>
              <div className="font-heading font-bold text-2xl text-primary mb-1">
                {stat?.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;