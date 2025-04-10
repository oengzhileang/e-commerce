// ./types/DataType.ts
export interface ProductsType {
  key: string;
  name?: string;
  image?: string; // 🖼️ New field
  price?: number;
  category?: string;
  stock?: number;
  status?: string;
  tags: string[];
  sales?: number;
}
