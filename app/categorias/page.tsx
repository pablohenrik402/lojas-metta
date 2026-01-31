import Link from 'next/link'
import {
  FaTools,
  FaLightbulb,
  FaCog,
  FaCouch,
  FaHeartbeat,
  FaFish,
  FaHome,
  FaMicrochip,
  FaBoxOpen,
} from 'react-icons/fa'
import { mockProducts } from '@/data/products'

const categoryIcons: Record<string, any> = {
  Iluminação: FaLightbulb,
  Acessórios: FaTools,
  Arrefecimento: FaCog,
  Interior: FaCouch,
  'Bem-estar': FaHeartbeat,
  Pesca: FaFish,
  Casa: FaHome,
  Tecnologia: FaMicrochip,
  Diversos: FaBoxOpen,
}

const categories = Array.from(
  mockProducts.reduce((map, product) => {
    const current = map.get(product.category)
    map.set(product.category, (current ?? 0) + 1)
    return map
  }, new Map<string, number>())
).map(([name, count]) => ({
  name,
  count,
  icon: categoryIcons[name] ?? FaBoxOpen,
  description: 'Produtos disponíveis nesta categoria',
}))

export default function CategoriasPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Categorias de Produtos</h1>
          <p className="text-xl text-gray-600">
            Explore nossa ampla variedade de peças automotivas organizadas por categoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={`/produtos?categoria=${category.name.toLowerCase()}`}
              className="group"
            >
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <category.icon size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 text-sm">{category.count} produtos</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{category.description}</p>
                
                <div className="mt-4 text-primary font-semibold flex items-center">
                  Ver produtos
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-secondary to-blue-900 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Não encontrou o que procura?</h2>
          <p className="text-xl mb-6">
            Nossa equipe está pronta para ajudar você a encontrar a peça ideal!
          </p>
          <Link 
            href="/contato"
            className="inline-block bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </div>
  )
}
