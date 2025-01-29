import { TypeODM, WithId } from './repo/type';

export class ODMLite<T> implements TypeODM <T extends WithId> {
    file: string;
    collection: string;

    constructor(file:string,collection:string) {
        this.file=file
        this.collection=collection
    }

    read() {
        const retData:T[]=null;

        return retData;
    }

    readById(T['id']) {

    }

    create: (data: Omit<T, 'id'>) => T;
    updateById: (id: T['id'], data: Omit<Partial<T>, 'id'>) => T;
    deleteById: (id: T['id']) => T;
}
