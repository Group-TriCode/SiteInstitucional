import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import Card from '../Components/Card';

const Home: React.FC = () => {
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Soluções web modernas e responsivas utilizando as melhores tecnologias do mercado.',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Sistemas Personalizados',
      description: 'Desenvolvimento de sistemas sob medida para atender às necessidades específicas do seu negócio.',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Consultoria em TI',
      description: 'Orientação estratégica para transformação digital e otimização de processos tecnológicos.',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const features = [
    'Tecnologias de ponta',
    'Equipe especializada',
    'Suporte contínuo',
    'Entrega no prazo',
    'Código limpo e escalável',
    'Segurança em primeiro lugar'
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-black via-purple-950 to-black text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Transformando <span className="text-purple-500">ideias</span> em{' '}
              <span className="text-purple-500">soluções</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 px-4">
              Desenvolvemos software de alta qualidade que impulsiona o crescimento do seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button variant="primary" size="lg">
                  Começar Agora
                </Button>
              </Link>
              <Link to="/sobre">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Nossos Serviços
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Oferecemos soluções completas em desenvolvimento de software para empresas de todos os tamanhos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} hover className="text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Por que escolher a TriCode?
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Comprometidos com a excelência em cada projeto
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-purple-50 border border-purple-100"
                >
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-purple-100 max-w-2xl mx-auto px-4">
              Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos
            </p>
            <Link to="/contato">
              <button className="px-8 py-4 text-lg font-semibold rounded-lg bg-white text-purple-600 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-800">
                Solicitar Orçamento
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

