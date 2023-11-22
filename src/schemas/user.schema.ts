import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  nama: String,
  age: Number,
  address: String,
});
