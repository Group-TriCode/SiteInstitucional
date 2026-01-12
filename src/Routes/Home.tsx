import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import Card from '../Components/Card';

const Home: React.FC = () => {
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Soluções web modernas e responsivas utilizando as melhores tecnologias do mercado.',
      icon: '🌐'
    },
    {
      title: 'Sistemas Personalizados',
      description: 'Desenvolvimento de sistemas sob medida para atender às necessidades específicas do seu negócio.',
      icon: '⚙️'
    },
    {
      title: 'Consultoria em TI',
      description: 'Orientação estratégica para transformação digital e otimização de processos tecnológicos.',
      icon: '💡'
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
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-purple-950 to-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transformando <span className="text-purple-500">ideias</span> em{' '}
              <span className="text-purple-500">soluções</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em desenvolvimento de software para empresas de todos os tamanhos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} hover className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Por que escolher a TriCode?
              </h2>
              <p className="text-lg text-gray-600">
                Comprometidos com a excelência em cada projeto
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
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

