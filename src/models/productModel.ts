import { Schema, model } from 'mongoose';

interface IProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
});

const Product = model<IProduct>('Product', productSchema);

export default Product;
