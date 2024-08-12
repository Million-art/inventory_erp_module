import { Request, Response } from 'express';
import Product from '../models/productModel';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, quantity, category } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      quantity,
      category,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product', error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (deletedProduct) {
      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};
