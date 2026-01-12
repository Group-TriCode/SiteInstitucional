import React from 'react';
import Card from '../Components/Card';

const Sobre: React.FC = () => {
  const values = [
    {
      title: 'Inovação',
      description: 'Sempre buscando as melhores tecnologias e metodologias para entregar soluções de ponta.',
      icon: '🚀'
    },
    {
      title: 'Qualidade',
      description: 'Comprometidos com código limpo, testes rigorosos e padrões de excelência em cada projeto.',
      icon: '⭐'
    },
    {
      title: 'Transparência',
      description: 'Comunicação clara e honesta em todas as etapas do desenvolvimento.',
      icon: '💎'
    },
    {
      title: 'Compromisso',
      description: 'Dedicação total ao sucesso dos nossos clientes e entrega dentro dos prazos estabelecidos.',
      icon: '🤝'
    }
  ];

  const team = [
    {
      name: 'Equipe Especializada',
      role: 'Desenvolvedores Full Stack',
      description: 'Profissionais experientes em diversas tecnologias e frameworks modernos.'
    },
    {
      name: 'Metodologia Ágil',
      role: 'Scrum & Kanban',
      description: 'Trabalhamos com metodologias ágeis para garantir entregas rápidas e eficientes.'
    },
    {
      name: 'Suporte Contínuo',
      role: 'Manutenção & Evolução',
      description: 'Oferecemos suporte técnico e evolução contínua dos sistemas desenvolvidos.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-purple-950 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-purple-500">TriCode</span>
            </h1>
            <p className="text-xl text-gray-300">
              Somos uma empresa de software dedicada a transformar desafios em soluções tecnológicas inovadoras
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A TriCode nasceu com o propósito de democratizar o acesso a soluções de software de alta qualidade. 
                Acreditamos que toda empresa, independente do tamanho, merece tecnologia de ponta para impulsionar 
                seu crescimento. Combinamos expertise técnica, criatividade e comprometimento para entregar projetos 
                que superam expectativas e geram resultados reais para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600">
              Princípios que guiam cada projeto e relacionamento
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Methodology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-lg text-gray-600">
              Processo estruturado para garantir o sucesso do seu projeto
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((item, index) => (
              <Card key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">{item.role}</p>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Análise e Planejamento',
                  description: 'Entendemos profundamente suas necessidades e objetivos para criar um plano de ação estratégico.'
                },
                {
                  step: '2',
                  title: 'Desenvolvimento',
                  description: 'Desenvolvemos a solução seguindo as melhores práticas, com código limpo e arquitetura escalável.'
                },
                {
                  step: '3',
                  title: 'Testes e Qualidade',
                  description: 'Realizamos testes rigorosos para garantir que tudo funcione perfeitamente antes da entrega.'
                },
                {
                  step: '4',
                  title: 'Entrega e Suporte',
                  description: 'Entregamos o projeto e oferecemos suporte contínuo para evolução e manutenção.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;

