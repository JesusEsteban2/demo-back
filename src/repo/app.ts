// DESARROLLO DEL CÓDIGO

// Creamos la interfaz ODM genérica
// ODM (Object Document Mapper) es un patrón de diseño que
// mapea objetos de datos en documentos de base de datos
// Modelando los métodos CRUD de un repositorio de datos
// Simplificando la forma en que los llevaría a cabo un ORM

// En types.d.ts

// Como mocks, generamos funciones de lectura escritura capaces de leer y escribir en un almacenamiento (e,g, Fichero)
// import { readFromDisk, writeToDisk } from './helpers';

// Creamos una clase que implementa la interfaz ORM
// import { ODMLite } from './orm-lite';

// Necesitaremos algunas utilidades de tipos de TypeScript
// Partial<T> para definir un tipo con todas las propiedades de T como opcionales
// Omit<T, K> para definir un tipo sin las propiedades de K

// Cream9os una interfaz Repository que define los métodos CRUD

// En types.d.ts

// Como mock de modelo de datos generamos una interfaz/tipo Item

// En types.d.ts

// Creamos una clase que implementa la interfaz Repository
// import { RepoItemFile } from './repo-item-file';

// Instanciamos la clase y leemos los datos

// const repo = new RepoItemFile();
// console.log(repo.read());

// Sustitución a dotenv
process.loadEnvFile('../data/.env');
console.log(process.env.DB_HOST);

// sustitucion de librería chalk
import { styleText } from 'node:util';

console.log(styleText('red', styleText('bold', 'Mensaje en negrita y rojo')));

// Ficheros asincronos
import fs from 'node:fs/promises';
import { resolve } from 'node:path';

const path = resolve('../data') + '/prueba.json';
const data = '{ "name":"pepe", "age":22}';
const promise = fs.writeFile(path, data);
promise.catch((err) => {
    console.error(err);
});
promise.then((response) => {
    console.log('response: ', response);
});
