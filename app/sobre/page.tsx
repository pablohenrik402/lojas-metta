import Image from 'next/image'
import { FaAward, FaClock, FaUsers, FaShippingFast, FaHandshake, FaTools } from 'react-icons/fa'

export default function SobrePage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-secondary mb-6">Sobre a Lojas Metta</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de 15 anos fornecendo peças automotivas de qualidade com os melhores preços do mercado.
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">Nossa História</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  A Lojas Metta nasceu em 2008 com o objetivo de revolucionar o mercado de peças automotivas, 
                  oferecendo produtos de alta qualidade a preços acessíveis.
                </p>
                <p>
                  Começamos com uma pequena loja física em São Paulo e, ao longo dos anos, expandimos 
                  nossa operação para o e-commerce, atendendo clientes em todo o Brasil.
                </p>
                <p>
                  Hoje, somos referência no setor, com mais de 50 mil clientes satisfeitos e um catálogo 
                  com mais de 10 mil produtos das melhores marcas do mercado.
                </p>
              </div>
            </div>
            <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
                alt="Loja Metta"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-gray-600">Anos de Experiência</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">50k+</div>
            <p className="text-gray-600">Clientes Satisfeitos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
            <p className="text-gray-600">Produtos Disponíveis</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-600">Satisfação Garantida</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-secondary text-center mb-8">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaAward size={24} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Qualidade</h3>
              <p className="text-gray-600">
                Trabalhamos apenas com produtos originais e de marcas reconhecidas no mercado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaHandshake size={24} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Confiança</h3>
              <p className="text-gray-600">
                Transparência e honestidade em todas as nossas relações com clientes e parceiros.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaUsers size={24} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Atendimento</h3>
              <p className="text-gray-600">
                Equipe especializada pronta para ajudar você a encontrar a peça ideal.
              </p>
            </div>
          </div>
        </div>

        {/* Differentials */}
        <div className="bg-gradient-to-r from-secondary to-blue-900 text-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Por que escolher a Lojas Metta?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaShippingFast className="text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
              <p className="text-gray-200">
                Entregamos em todo o Brasil com os melhores prazos do mercado.
              </p>
            </div>

            <div className="text-center">
              <FaClock className="text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Experiência</h3>
              <p className="text-gray-200">
                Mais de 15 anos de conhecimento em peças automotivas.
              </p>
            </div>

            <div className="text-center">
              <FaTools className="text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Suporte Técnico</h3>
              <p className="text-gray-200">
                Equipe especializada para tirar todas as suas dúvidas.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">Missão</h3>
            <p className="text-gray-600">
              Fornecer peças automotivas de qualidade com preços justos, garantindo a satisfação 
              e segurança de nossos clientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">Visão</h3>
            <p className="text-gray-600">
              Ser a maior e mais confiável loja de peças automotivas do Brasil, reconhecida pela 
              excelência no atendimento.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary mb-3">Valores</h3>
            <p className="text-gray-600">
              Qualidade, transparência, compromisso com o cliente, inovação e responsabilidade social 
              e ambiental.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
