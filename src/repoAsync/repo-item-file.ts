import { ODMLite } from '../repo/odm-lite';
import { Item, TypeODM } from './types';

export class RepoItemFile implements TypeODM<Item> {
    odm: ODMLite<Item>;
    collection: string;

    constructor(file = 'db.json', collection = 'items') {
        this.odm = new ODMLite<Item>(file);
        this.collection = collection;
    }

    read: (collection: string) => Promise<Item[]>;
    readById: (collection: string, id: string) => Promise<Item>;
    create: (collection: string, data: Omit<Item, 'id'>) => Promise<Item>;
    updateById: (
        collection: string,
        id: string,
        data: Omit<Partial<Item>, 'id'>,
    ) => Promise<Item>;
    deleteById: (collection: string, id: string) => Promise<Item>;
}
