import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Fernanda",
      location: "Cedofeita, Porto",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Finalmente encontrei brownies que me lembram da minha infância no Brasil! O sabor é exatamente como eu lembrava. A entrega pelo Glovo é super rápida e chegam sempre fresquinhos.",
      date: "Há 2 dias",
      verified: true
    },
    {
      id: 2,
      name: "João Pedro Santos",
      location: "Matosinhos",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Sou português e nunca tinha provado brownies brasileiros autênticos. Que diferença! São muito mais cremosos e saborosos que os que encontro noutros sítios. Já sou cliente habitual!",
      date: "Há 1 semana",
      verified: true
    },
    {
      id: 3,
      name: "Ana Beatriz",
      location: "Campanhã, Porto",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      text: "Encomendei um bolo de brigadeiro para o aniversário da minha filha e foi um sucesso total! Todas as crianças adoraram e os adultos também. Qualidade impecável!",
      date: "Há 3 dias",
      verified: true
    },
    {
      id: 4,
      name: "Carlos Rodrigues",
      location: "Paranhos, Porto",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      text: "Como brasileiro no Porto há 8 anos, posso garantir que estes brownies são os mais autênticos que já provei aqui. O doce de leite então... é igual ao do Brasil!",
      date: "Há 5 dias",
      verified: true
    },
    {
      id: 5,
      name: "Luísa Mendes",
      location: "Aldoar, Porto",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg",
      rating: 5,
      text: "Descobri através do Instagram e não me arrependo! Os brownies chegaram em 25 minutos, bem embalados e com um sabor incrível. Já recomendei a todos os amigos.",
      date: "Há 1 dia",
      verified: true
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      likes: 127,
      comments: 23
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      likes: 156,
      comments: 31
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      likes: 203,
      comments: 45
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-6">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500 clientes satisfeitos no Porto e arredores. Veja o que dizem sobre os nossos brownies!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg min-h-[300px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonials?.[currentTestimonial]?.avatar}
                    alt={testimonials?.[currentTestimonial]?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-lg text-foreground">
                      {testimonials?.[currentTestimonial]?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials?.[currentTestimonial]?.location}
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                      {testimonials?.[currentTestimonial]?.verified && (
                        <div className="flex items-center ml-2">
                          <Icon name="CheckCircle" size={16} className="text-green-500" />
                          <span className="text-xs text-green-600 ml-1">Verificado</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  {testimonials?.[currentTestimonial]?.date}
                </span>
              </div>

              <blockquote className="text-muted-foreground leading-relaxed text-lg italic mb-6">
                "{testimonials?.[currentTestimonial]?.text}"
              </blockquote>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon name="ChevronLeft" size={20} className="text-primary" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon name="ChevronRight" size={20} className="text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram Feed */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Instagram" size={24} className="text-pink-600" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      @browniesaldanha
                    </h3>
                    <p className="text-sm text-muted-foreground">4.174 seguidores • 305 posts</p>
                  </div>
                </div>
                <button
                  onClick={() => window.open('https://instagram.com/browniesaldanha', '_blank')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Seguir
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {instagramPosts?.map((post) => (
                  <div key={post?.id} className="relative group cursor-pointer">
                    <Image
                      src={post?.image}
                      alt="Instagram post"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="flex items-center space-x-4 text-white">
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={16} />
                          <span className="text-sm">{post?.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" size={16} />
                          <span className="text-sm">{post?.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Partilhe os seus momentos com #BrowniesPorto
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="font-bold text-lg text-primary">4.9</div>
                    <div className="text-xs text-muted-foreground">Avaliação</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-primary">30min</div>
                    <div className="text-xs text-muted-foreground">Entrega</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;