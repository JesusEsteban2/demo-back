export type WithId = { id: string };

export type Item = WithId & { name: string };
// equivalente a type Item = { id: string; name: string; }

// Creamos una interfaz ODM genérica
// que recibe el nombre de la colección
// como el conjunto de datos que se va a leer y escribir
// del conjunto total de datos
export interface TypeODM<T extends WithId> {

    read: (collection: string) => Promise<T[]>;
    readById: (collection: string, id: T['id']) => Promise<T>; // Errores => throw Error
    create: (collection: string, data: Omit<T, 'id'>) => Promise<T>;
    updateById: (
        collection: string,
        id: T['id'],
        data: Omit<Partial<T>, 'id'>,
    ) => Promise<T>;
    deleteById: (collection: string, id: T['id']) => Promise<T>;

}

export interface repository<T>