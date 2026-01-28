export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating?: number
  reviews?: number
  description?: string
  features?: string[]
  specifications?: Record<string, string>
  inStock?: boolean
  stockQuantity?: number
}

export interface Category {
  name: string
  icon: any
  count: number
}

export interface ContactFormData {
  nome: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
}

export interface CartItem {
  product: Product
  quantity: number
}
