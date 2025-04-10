import { Document } from 'mongoose';
export interface IProducts extends Document {
  readonly name: string;
  readonly category: string;
  readonly description: string;
  readonly price: number;
}
