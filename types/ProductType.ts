export interface ProductType {
  _id: string,
  category: string,
  colors: Array<string>,
  createdAt: string,
  description: string,
  extraImages: Array<string>,
  image: string,
  name: string,
  price: number,
  sizes: Array<string>
  updatedAt: string
}

export interface ProductStateType {
  product: ProductType,
  showModal: Boolean
}
export interface categoryType {
  _id: string;
  name: string;
  image: string;
}