import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      category: 'Ingredientes',
      question: 'Que ingredientes usam nos brownies?',
      answer: `Usamos apenas ingredientes premium: chocolate belga 70%, ovos frescos de quinta biológica, manteiga artesanal portuguesa, açúcar mascavo brasileiro, farinha especial e nozes selecionadas. Todos os nossos produtos são feitos sem conservantes artificiais.`
    },
    {
      id: 2,
      category: 'Alergénios',
      question: 'Os brownies contêm alergénios?',
      answer: `Sim, os nossos brownies contêm glúten, ovos, leite e frutos secos (nozes). Temos opções veganas disponíveis que não contêm ovos nem leite. Todos os produtos são preparados numa cozinha que também processa amendoins.`
    },
    {
      id: 3,
      category: 'Entrega',
      question: 'Para onde fazem entregas?',
      answer: `Entregamos em toda a área metropolitana do Porto através do Glovo: Centro do Porto, Cedofeita, Santo Ildefonso, Paranhos, Campanhã, Matosinhos e Leça da Palmeira. O tempo de entrega varia entre 20-50 minutos dependendo da localização.`
    },
    {
      id: 4,
      category: 'Entrega',
      question: 'Qual é o valor mínimo para entrega?',
      answer: `O valor mínimo para entrega é de €10. Entregas gratuitas para encomendas acima de €15. Para encomendas abaixo de €15, aplicamos uma taxa de entrega que varia entre €2.50 e €4.00 dependendo da zona.`
    },
    {
      id: 5,
      category: 'Produtos',
      question: 'Fazem bolos personalizados?',
      answer: `Sim! Fazemos bolos decorados personalizados para aniversários, casamentos e eventos especiais. Precisamos de pelo menos 48 horas de antecedência. Entre em contacto connosco via WhatsApp para discutir o design e orçamento.`
    },
    {
      id: 6,
      category: 'Conservação',
      question: 'Como conservar os brownies?',
      answer: `Os brownies mantêm-se frescos por 3 dias à temperatura ambiente em recipiente hermético, ou até 7 dias no frigorífico. Para melhor sabor, retire do frigorífico 30 minutos antes de consumir. Podem ser congelados por até 1 mês.`
    },
    {
      id: 7,
      category: 'Pagamento',
      question: 'Que formas de pagamento aceitam?',
      answer: `Aceitamos pagamento através do Glovo (cartão de crédito/débito, MB Way, PayPal) ou dinheiro na entrega. Para encomendas personalizadas, pedimos 50% de sinal antecipado via transferência bancária ou MB Way.`
    },
    {
      id: 8,
      category: 'Horários',
      question: 'Qual é o horário de funcionamento?',
      answer: `Funcionamos de terça a domingo das 10:00 às 22:00. Fechamos às segundas para preparação. Os brownies são feitos frescos todas as manhãs às 8:30. Última entrega às 21:30.`
    },
    {
      id: 9,
      category: 'Vegano',
      question: 'Têm opções veganas?',
      answer: `Sim! O nosso Brownie Vegano é feito com chocolate 70%, leite de coco, açúcar de coco e farinha de amêndoa. Mantém todo o sabor e textura cremosa dos brownies tradicionais, sendo 100% plant-based.`
    },
    {
      id: 10,
      category: 'Qualidade',
      question: 'Como garantem a frescura dos produtos?',
      answer: `Fazemos lotes frescos diariamente de manhã. Nunca vendemos produtos do dia anterior. Todos os brownies são embalados individualmente em recipientes herméticos e entregues no máximo 2 horas após a preparação.`
    }
  ];

  const categories = ['Todos', 'Ingredientes', 'Alergénios', 'Entrega', 'Produtos', 'Conservação', 'Pagamento', 'Horários', 'Vegano', 'Qualidade'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredFAQs = faqs?.filter(faq => {
    const matchesSearch = faq?.question?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         faq?.answer?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || faq?.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo o que precisa de saber sobre os nossos brownies, entregas e serviços
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <Input
            type="search"
            placeholder="Pesquisar nas perguntas frequentes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="text-center"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-primary hover:bg-primary/10 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs?.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                Nenhuma pergunta encontrada
              </h3>
              <p className="text-muted-foreground">
                Tente pesquisar com outros termos ou contacte-nos diretamente.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs?.map((faq, index) => (
                <div key={faq?.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                        {faq?.category}
                      </span>
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {faq?.question}
                      </h3>
                    </div>
                    <Icon 
                      name={openFAQ === index ? 'ChevronUp' : 'ChevronDown'} 
                      size={20} 
                      className="text-primary flex-shrink-0" 
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq?.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-accent" />
            <h3 className="font-heading font-bold text-2xl mb-4">
              Não Encontrou a Sua Pergunta?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              A nossa equipa está sempre disponível para esclarecer todas as suas dúvidas via WhatsApp. 
              Resposta garantida em menos de 30 minutos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = encodeURIComponent('Olá! Tenho uma pergunta que não encontrei nas FAQ. Podem ajudar-me?');
                  window.open(`https://wa.me/351912345678?text=${message}`, '_blank');
                }}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Falar no WhatsApp</span>
              </button>
              <button
                onClick={() => window.open('tel:+351912345678', '_self')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Icon name="Phone" size={20} />
                <span>Ligar Agora</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;