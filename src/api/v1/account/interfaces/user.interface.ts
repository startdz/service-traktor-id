import { Document } from 'mongoose';

export interface User extends Document {
  readonly nama: string;
  readonly age: number;
  readonly address: string;
}
