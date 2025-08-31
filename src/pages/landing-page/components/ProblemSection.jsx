import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      location: "Brasileira no Porto há 5 anos",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "Sentia tanta falta dos brownies da minha infância no Rio. Aqui em Portugal é impossível encontrar o sabor autêntico que eu conhecia.",
      emotion: "Saudade"
    },
    {
      id: 2,
      name: "João Silva",
      location: "Português curioso",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "Sempre ouvi falar dos doces brasileiros, mas nunca encontrei um lugar que fizesse com a receita original. Só encontro versões europeias.",
      emotion: "Curiosidade"
    },
    {
      id: 3,
      name: "Ana Rodrigues",
      location: "Brasileira em Matosinhos",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      quote: "Tentei fazer em casa várias vezes, mas nunca fica igual. Falta aquele toque especial das confeitarias do Brasil.",
      emotion: "Frustração"
    }
  ];

  const problems = [
    {
      icon: "Search",
      title: "Difícil de Encontrar",
      description: "Brownies autênticos brasileiros são raros no Porto"
    },
    {
      icon: "X",
      title: "Receitas Incorretas",
      description: "Versões europeias não capturam o sabor original"
    },
    {
      icon: "Clock",
      title: "Falta de Tempo",
      description: "Fazer em casa demanda tempo e técnica específica"
    },
    {
      icon: "Heart",
      title: "Saudade do Sabor",
      description: "Brasileiros sentem falta dos doces da terra natal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            O Problema que Conhecemos Bem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabemos como é difícil encontrar doces brasileiros autênticos em Portugal. 
            Ouvimos essas histórias todos os dias...
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems?.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={problem?.icon} size={24} className="text-red-600" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                {problem?.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="font-heading font-bold text-2xl text-center text-primary mb-8">
            Histórias Reais dos Nossos Clientes
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-primary">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial?.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
                    "{testimonial?.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <Icon name="Heart" size={16} className="text-red-500 mr-2" />
                    <span className="text-sm font-medium text-red-600">{testimonial?.emotion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Teaser */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <Icon name="Lightbulb" size={48} className="mx-auto mb-4 text-accent" />
            <h3 className="font-heading font-bold text-2xl mb-4">
              Mas Agora Temos a Solução!
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Brownies autênticos do Brasil, feitos com receitas tradicionais e ingredientes premium portugueses, 
              entregues fresquinhos na sua porta através do Glovo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;