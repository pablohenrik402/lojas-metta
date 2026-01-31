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
}))

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Categorias
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer text-center"
            >
              <category.icon className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.count} produtos</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
