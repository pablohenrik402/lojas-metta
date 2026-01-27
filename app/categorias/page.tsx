import Link from 'next/link'
import { FaCar, FaOilCan, FaCogs, FaBolt, FaTools, FaTachometerAlt } from 'react-icons/fa'

const categories = [
  { 
    name: 'Motor', 
    icon: FaCogs, 
    count: 150,
    description: 'Peças e componentes para motor',
    subcategories: ['Filtros', 'Velas', 'Correias', 'Bombas']
  },
  { 
    name: 'Suspensão', 
    icon: FaCar, 
    count: 89,
    description: 'Amortecedores e componentes',
    subcategories: ['Amortecedores', 'Molas', 'Buchas', 'Bandejas']
  },
  { 
    name: 'Freios', 
    icon: FaTachometerAlt, 
    count: 120,
    description: 'Sistema de frenagem completo',
    subcategories: ['Pastilhas', 'Discos', 'Tambores', 'Fluidos']
  },
  { 
    name: 'Elétrica', 
    icon: FaBolt, 
    count: 200,
    description: 'Componentes elétricos e eletrônicos',
    subcategories: ['Baterias', 'Alternadores', 'Cabos', 'Sensores']
  },
  { 
    name: 'Lubrificantes', 
    icon: FaOilCan, 
    count: 45,
    description: 'Óleos e fluidos automotivos',
    subcategories: ['Óleo Motor', 'Óleo Câmbio', 'Aditivos', 'Graxas']
  },
  { 
    name: 'Ferramentas', 
    icon: FaTools, 
    count: 78,
    description: 'Ferramentas profissionais',
    subcategories: ['Kits', 'Chaves', 'Alicates', 'Scanners']
  },
]

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
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Subcategorias:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((sub) => (
                      <span 
                        key={sub} 
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
                
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
