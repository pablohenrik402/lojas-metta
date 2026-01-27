import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Filtro de Óleo Premium',
    price: 45.90,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500',
    category: 'Motor',
  },
  {
    id: 2,
    name: 'Pastilha de Freio Dianteira',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=500',
    category: 'Freios',
  },
  {
    id: 3,
    name: 'Bateria 60Ah',
    price: 389.90,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500',
    category: 'Elétrica',
  },
  {
    id: 4,
    name: 'Amortecedor Traseiro',
    price: 245.90,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500',
    category: 'Suspensão',
  },
  {
    id: 5,
    name: 'Óleo Motor 5W30 Sintético',
    price: 65.90,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    category: 'Lubrificantes',
  },
  {
    id: 6,
    name: 'Kit Ferramentas 100 Peças',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500',
    category: 'Ferramentas',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
