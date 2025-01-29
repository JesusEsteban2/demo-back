export type WithId = { id: string };

export interface TypeODM<T extends WithId> {
    read: () => T[];
    readById: (id: T['id']) => T | null;
    create: (data: Omit<T, 'id'>) => T;
    updateById: (id: T['id'], data: Omit<Partial<T>, 'id'>) => T;
    deleteById: (id: T['id']) => T;
}
