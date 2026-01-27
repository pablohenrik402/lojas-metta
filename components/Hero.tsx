import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-secondary to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Peças Automotivas de Qualidade
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Encontre as melhores peças para o seu veículo com preços competitivos e entrega rápida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/produtos"
              className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Ver Produtos
            </Link>
            <Link
              href="/contato"
              className="bg-white hover:bg-gray-100 text-secondary px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
