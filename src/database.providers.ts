import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://fuaddzakwan26:ClH7iDca6ZPrd5uZ@cluster0.qkpf0zs.mongodb.net/db_traktor_id?retryWrites=true&w=majority',
      ),
  },
];
