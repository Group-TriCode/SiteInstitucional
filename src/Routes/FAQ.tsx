import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Quais tecnologias a TriCode utiliza?',
      answer: 'Trabalhamos com as principais tecnologias do mercado, incluindo React, Node.js, Python, TypeScript, e frameworks modernos. Escolhemos a stack tecnológica mais adequada para cada projeto específico, sempre priorizando performance, escalabilidade e manutenibilidade.'
    },
    {
      question: 'Quanto tempo leva para desenvolver um projeto?',
      answer: 'O prazo varia conforme a complexidade e escopo do projeto. Projetos simples podem levar algumas semanas, enquanto sistemas mais complexos podem levar alguns meses. Durante a fase de análise, apresentamos um cronograma detalhado com prazos realistas para cada etapa do desenvolvimento.'
    },
    {
      question: 'Vocês oferecem suporte após a entrega?',
      answer: 'Sim! Oferecemos planos de suporte e manutenção contínua. Isso inclui correção de bugs, atualizações de segurança, melhorias e evolução do sistema conforme suas necessidades mudam. Temos diferentes pacotes de suporte para atender seu orçamento e necessidades.'
    },
    {
      question: 'Como funciona o processo de orçamento?',
      answer: 'Após entender suas necessidades através de uma reunião inicial, elaboramos uma proposta detalhada com escopo, tecnologias, prazos e investimento. O orçamento é transparente e sem surpresas, com todas as etapas e entregas claramente definidas.'
    },
    {
      question: 'Como garantem a qualidade do código?',
      answer: 'Seguimos rigorosos padrões de qualidade, incluindo code reviews, testes automatizados, documentação completa e arquitetura bem estruturada. Utilizamos ferramentas de análise estática e boas práticas de desenvolvimento para garantir código limpo, manutenível e escalável.'
    },
    {
      question: 'Vocês trabalham com metodologias ágeis?',
      answer: 'Sim! Utilizamos metodologias ágeis como Scrum e Kanban, com sprints regulares, entregas incrementais e comunicação constante com o cliente. Isso permite maior flexibilidade, transparência e capacidade de adaptação durante o desenvolvimento.'
    },
    {
      question: 'Quais são as formas de pagamento?',
      answer: 'Trabalhamos com diferentes modelos de pagamento: pagamento único para projetos completos, pagamento por sprints/milestones, ou modelos de assinatura para projetos contínuos. Discutimos a melhor opção durante a negociação do contrato.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-purple-950 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas <span className="text-purple-500">Frequentes</span>
            </h1>
            <p className="text-xl text-gray-300">
              Encontre respostas para as principais dúvidas sobre nossos serviços
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Entre em contato conosco e teremos prazer em esclarecer qualquer questão
            </p>
            <a
              href="/contato"
              className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

