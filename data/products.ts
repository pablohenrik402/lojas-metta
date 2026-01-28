import { Product } from '@/types'

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Filtro de Óleo Premium',
    price: 45.90,
    originalPrice: 59.90,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
    category: 'Motor',
    rating: 4.5,
    reviews: 127,
    description: 'Filtro de óleo de alta qualidade para motores de automóveis. Garante a limpeza ideal do óleo, prolongando a vida útil do motor.',
    features: [
      'Material de alta resistência',
      'Filtragem eficiente de impurezas',
      import { Product } from '@/types'

      const defaultImage = 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800'

      const buildProduct = (
        id: string,
        name: string,
        price: number,
        stockQuantity: number,
        category: string,
        status: 'Ativo' | 'Inativo' = 'Ativo'
      ): Product => ({
        id,
        name,
        price,
        image: defaultImage,
        category,
        description: name,
        inStock: status === 'Ativo' && stockQuantity > 0,
        stockQuantity,
      })

      export const products: Product[] = [
        buildProduct('MLB4000703085', 'Lanterna Pisca Seta Retrovisor Renault Master 12 13 14 A 25', 99.99, 15, 'Iluminação'),
        buildProduct('MLB4974355630', 'Luva Pino Manopla Cambio Mitsubishi Pajero Dakar 2010-2017', 79.99, 6, 'Interior'),
        buildProduct('MLB5091297102', 'Pisca Seta Retrovisor Para Ford Ranger 2012 Até 2017', 145.41, 1, 'Iluminação'),
        buildProduct('MLB4001336033', 'Tampa Radiador Honda New Civic City Fit Pressão De 1.1 Bar', 79.99, 497, 'Arrefecimento'),
        buildProduct('MLB3872508865', 'Par Espelho Retrovisor Auxiliar Ponto Cego Universal 50mm', 42.99, 1000, 'Acessórios'),
        buildProduct('MLB5335399136', 'Par Lanterna Pisca Seta Retrovisor Renault Master 12 13 A 25', 176.98, 19, 'Iluminação'),
        buildProduct('MLB3893924597', 'Suporte Para Fone De Ouvido Sem Fio Anti-perda Gancho Fone', 36.9, 2, 'Acessórios'),
        buildProduct('MLB5321868778', 'Cabo Adaptador Camera De Ré Jetta Golf Polo Virtus Tcross', 79.99, 3, 'Acessórios'),
        buildProduct('MLB5382117072', 'Par Lanterna Pisca Paralama Civic G10 2017 18 19 20 21', 199, 11, 'Iluminação'),
        buildProduct('MLB3789970341', 'Pisca Seta Retrovisor Corolla Led 2014-2019', 79.99, 2, 'Iluminação'),
        buildProduct('MLB5385810108', 'Lanterna Pisca Páralama Civic G10 2016 17 18 19 A 23 Fume', 99.99, 9, 'Iluminação'),
        buildProduct('MLB3857546757', 'Pisca Seta Retrovisor Etios 2014 2015 2016 2017 2018', 79.99, 13, 'Iluminação'),
        buildProduct('MLB3864777179', 'Tampão De Ouvido Silicone Imebobo Para Dormir Reduz Ruído Branco', 39.9, 16, 'Bem-estar'),
        buildProduct('MLB5205458876', 'Pisca Seta Retrovisor Hyundai Ix35 Direito 10 11 12 Ate 2019', 179.9, 6, 'Iluminação'),
        buildProduct('MLB3915857453', 'Pisca Seta Retrovisor Ford Ranger Esquerdo 2012 A 2023', 145.41, 99, 'Iluminação'),
        buildProduct('MLB4039374939', 'Pisca Seta Retrovisor Hyundai Ix35 10 11 12 13 14 Ate 2019', 179.9, 6, 'Iluminação'),
        buildProduct('MLB5418432294', 'Pisca Seta Retrovisor Jeep Renegade 2015 16 17 18 19 20 2021', 149, 8, 'Iluminação'),
        buildProduct('MLB3864724557', 'Tampão Ouvido Silicone Preto Imebobo Protetor Auditivo Dormir', 29.9, 10, 'Bem-estar'),
        buildProduct('MLB3916341109', 'Pisca Seta Retrovisor Corolla Esquerdo 2020 A 2024', 78.9, 100, 'Iluminação'),
        buildProduct('MLB5006945988', '20 Isca Artificial Aromatizada Camarão Silicone Anzol Pesca', 29.68, 5, 'Pesca'),
        buildProduct('MLB3915905573', 'Pisca Seta Retrovisor Ford Ranger Direito 2012 A 2023', 149, 98, 'Iluminação'),
        buildProduct('MLB5397867764', 'Pisca Seta Retrovisor Hilux Srv Srx Sw4 2016 17 18 19 A 25', 219.99, 17, 'Iluminação'),
        buildProduct('MLB3870418109', 'Par Pisca Seta Retrovisor Hyundai Ix35 10 11 12 13 Ate 2019', 299.9, 100, 'Iluminação'),
        buildProduct('MLB5192325264', 'Pisca Seta Retrovisor Corolla Direito 2020 A 2024', 79.99, 6, 'Iluminação'),
        buildProduct('MLB3975929703', 'Tampa Do Eixo Traseiro Byd Dolphin Mini Anti Sujeira Par', 149.9, 9999, 'Acessórios'),
        buildProduct('MLB5057960978', 'Lanterna Pisca Yaris 2016 Corolla 2014-2019 Lado Direito', 79.9, 20, 'Iluminação'),
        buildProduct('MLB5262174732', 'Pisca Seta Retrovisor Corolla 2014 2015 2016 2017 2018 2019', 79.99, 5, 'Iluminação'),
        buildProduct('MLB4032508767', 'Pisca Seta Retrovisor Ford Ranger Direito 2012 Até 2022', 145.41, 100, 'Iluminação'),
        buildProduct('MLB4001244017', 'Pisca Seta Retrovisor Hyundai Ix35 Esquerdo 10 11 Ate 2019', 179.9, 5, 'Iluminação'),
        buildProduct('MLB5109077962', 'Par Indicador De Seta 14 Leds Retrovisor Universal Espelho', 39.9, 10001, 'Iluminação'),
        buildProduct('MLB3802621977', 'Pisca Seta Retrovisor Toyota Corolla 2014 15 16 17 18 2019', 79.99, 7, 'Iluminação'),
        buildProduct('MLB4060689049', 'Lanterna Pisca Páralama Civic G10 2016 17 18 19 A 23 Ambar', 149.9, 6, 'Iluminação'),
        buildProduct('MLB3820858855', 'Par Pisca Seta Retrovisor P/ Ford Ranger 2013 14 15 A 2023', 299, 2, 'Iluminação'),
        buildProduct('MLB5386058926', 'Par Lanterna Pisca Páralama Civic G10 2016 A 2023 Laranja', 199.98, 10, 'Iluminação'),
        buildProduct('MLB4544419370', 'Kit 12 Forminhas Silicone Hbmix Antiaderente Cupcake Muffin Colorido', 22.99, 10000, 'Casa'),
        buildProduct('MLB5075581166', 'Lanterna Pisca Seta Original Toyota Yaris 2016 Lado Direito', 59.9, 200, 'Iluminação'),
        buildProduct('MLB3965174269', 'Tampa Reservatorio Agua Radiador Onix Spin Cobalt Cruze S10', 49.9, 10000, 'Arrefecimento'),
        buildProduct('MLB5385827952', 'Lanterna Pisca Páralama Civic G10 2016 17 18 19 A 23 Cristal', 149.99, 21998, 'Iluminação'),
        buildProduct('MLB5385978586', 'Lanterna Pisca Páralama Civic G10 2016 17 18 19 A 23 Laranja', 99.99, 6, 'Iluminação'),
        buildProduct('MLB5111057008', 'Seta Retrovisor Led Ford Ranger 2012-2019 Raptor 2015-2019', 369.9, 10000, 'Iluminação'),
        buildProduct('MLB5247644258', 'Lanterna Pisca Seta Original Corolla 2014-2019 Lado Direito', 79.9, 10096, 'Iluminação'),
        buildProduct('MLB5274329948', 'Tampa Do Radiador Toyota Corolla 2003 A 2019 Original Denso', 79, 10000, 'Arrefecimento'),
        buildProduct('MLB3849464555', 'Par Pisca Seta Retrovisor Toyota Etios 2014 15 16 17 18 2019', 158.19, 8, 'Iluminação'),
        buildProduct('MLB3864713103', 'Tampão De Ouvido Protetor Abafador Auditivo Auricular Dormir', 39.9, 16, 'Bem-estar'),
        buildProduct('MLB3921729735', 'Refletor Traseiro Moldura Direito Honda Civic G10 2016 2021', 549, 10000, 'Iluminação'),
        buildProduct('MLB5386088044', 'Par Lanterna Pisca Páralama Civic G10 2016 A 2023 Amarela', 199.15, 10008, 'Iluminação'),
        buildProduct('MLB3863788667', 'Par Seta Dinâmica Retrovisor Bmw Serie 1 2 3 4 F20 F30 320', 289, 10001, 'Iluminação'),
        buildProduct('MLB3864737239', 'Tampão De Ouvido Protetor Abafador Auditivo Dormir Estudar', 29.9, 10, 'Bem-estar'),
        buildProduct('MLB5181881832', 'Seta Dinâmica Pisca Retrovisor Bmw Serie 1 2 3 4 F20 F30 320', 136.04, 1, 'Iluminação'),
        buildProduct('MLB3924017989', 'Par Pisca Seta Retrovisor Corolla Sequencial 2020 A 2024', 349, 10000, 'Iluminação'),
        buildProduct('MLB4018666671', 'Lanterna Pisca Seta Retrovisor Renault Master 12 13 14 A 24', 75, 998, 'Iluminação'),
        buildProduct('MLB5878953980', 'Pisca Seta Retrovisor Corolla Sequencial 2020 2021 2022 2023', 149, 10000, 'Iluminação'),
        buildProduct('MLB3932382641', 'Seta Retrovisor Led Ford Ranger 2012-2019 Raptor 2015-2019', 349.9, 10000, 'Iluminação'),
        buildProduct('MLB3977763531', 'Pisca Seta Led Sequencial Retrovisor Vw Golf 2013 A 2019 Par', 199.99, 10000, 'Iluminação'),
        buildProduct('MLB4060949111', 'Lanterna Pisca Seta Paralama Para Honda Civic G10 2016 A 23', 149.9, 20, 'Iluminação'),
        buildProduct('MLB5878953982', 'Pisca Seta Retrovisor Corolla Sequencial 2020 2021 2022 2023', 149, 10000, 'Iluminação'),
        buildProduct('MLB5007009510', '10 Isca Artificial Aromatizada Camarão Silicone Anzol Pesca', 29.68, 5, 'Pesca'),
        buildProduct('MLB5713145420', 'Tampão De Ouvido Protetor Abafador Auditivo Dormir Estudar', 29.9, 5, 'Bem-estar'),
        buildProduct('MLB5713249188', 'Tampão De Ouvido Protetor Abafador Auditivo Dormir Estudar', 29.9, 5, 'Bem-estar'),
        buildProduct('MLB5089778648', 'Pisca Seta Retrovisor Corolla Sequencial 2020 2021 2022 2023', 290, 20000, 'Iluminação', 'Inativo'),
        buildProduct('MLB5225548364', 'Par Lanterna Pisca Páralama Civic G10 2017-18-19-20 Fume', 196.17, 0, 'Iluminação', 'Inativo'),
        buildProduct('MLB3863854135', 'Par Refletor Led Do Parachoque Traseiro Corolla 2019 A 2022', 349, 9999, 'Iluminação', 'Inativo'),
        buildProduct('MLB5382279482', 'Par Lanterna Pisca Páralama Civic G10 2017-18-19-20 Ambar', 199, 0, 'Iluminação', 'Inativo'),
        buildProduct('MLB4974249540', 'Par Pisca Seta Retrovisor Corolla 2014 2015 2016 2017 2018', 168.1, 97, 'Iluminação', 'Inativo'),
        buildProduct('MLB4953633298', 'Cabo De Reposição Starlink 15m - Antena/roteador', 799, 10146, 'Tecnologia', 'Inativo'),
      ]
      'Marca': 'Sport Air',
      'Código': 'FA-SPORT',
      'Tipo': 'Lavável',
      'Material': 'Algodão',
      'Garantia': 'Vitalício',
    },
    inStock: true,
    stockQuantity: 42,
  },
]

export function getProductById(id: number): Product | undefined {
  return mockProducts.find(product => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'Todos') return mockProducts
  return mockProducts.filter(product => product.category === category)
}

export function getFeaturedProducts(limit: number = 6): Product[] {
  return mockProducts.slice(0, limit)
}
