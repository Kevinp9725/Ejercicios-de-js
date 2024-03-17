//Ejercicio 1
//. Convierta la siguiente función, en una función asíncrona para retornar la data
//usando async/await

const url = 'https://fakestoreapi.com/products'

const getData = async ({ url }) => {
    try {
        
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new Error('Error al obtener los datos')
            }
            const data = await response.json();
            return data;
    } catch (error) {
        console.log(error)
    };
}
    (async () => {
        const data = await getData({url});
        console.log(data);
    })();




//Ejercicio 2
// Dado un array de números, utilice el método map para obtener un nuevo array
// donde cada elemento sea el cuadrado del elemento original. Luego, utiliza el
// método filter para obtener otro array que solo contenga los números pares del
// array original.

const numeros = [7,3,8,2,4,5,5,30]
const cuadrado =[]
const pares =[]

cuadrado.push(numeros.map(num => Math.pow(num, 2)));
pares.push( numeros.filter(num => num % 2 === 0));

console.log("Original ["+numeros+"]");
console.log("Cuadrado ["+cuadrado+"]");
console.log("Pares ["+pares+"]");


//Ejercicio 3
// Crear una función que devuelva el promedio de un arreglo, en caso de que el
// arreglo esté vacío debe devolver cero.
function promArreglo(arreglo) {
    if (arreglo.length === 0) {
        return 0;
    }

    const suma = arreglo.reduce((acumulador, elemento) => acumulador + elemento, 0);

    const prom = suma / arreglo.length;

    return prom;
}

const arreglo1 = [4,45,3,2,5];
console.log("Promedio del arreglo1:", promArreglo(arreglo1));



//Ejercicio 4
// Cree una función que reciba 3 argumentos numéricos y retorne el numero más
// alto.
function biggest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

const resul = biggest(7, 15, 3);
console.log("El número más alto es:", resul);



//Ejercicio 5
// Crear una función que reciba un arreglo como parámetro y devuelva una copia del
// arreglo (este debe ser una copia integra y no solo una referencia al arreglo
// original).
function copiarArreglo(arreglo) {
    return [...arreglo];
}

const original = [1, 2, 3, 4, 5];
const copia = copiarArreglo(original);

console.log("Original:", original);
console.log("Copia:", copia);