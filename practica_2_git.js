function Add(sum){
    return sum+sum;
}
console.log(Add(10));

const suma=(a,b)=>{
    return a+b;
}

console.log (suma(5,10));


// Objects
let cup= {
    color:"rojo",
    desing:"san valentin",
    weight:"5.1 kg",
    material: "marmol"
}



const Student= {
    firtName: "alid",
    lastName: "leon",
    age: 26,
    hubby: "dormir"
}

console.log(Student);

// arrays

let programmingLanguajes=["java","javascripts","c#"];
console.log(programmingLanguajes)

for(let i=0;i<programmingLanguajes.length;i++){
    console.log(`contenido ${i+1} ${programmingLanguajes[i]}` );

}
// acceder a un elemento de array mediante su indice:
const primero=programmingLanguajes[0];

console.log(primero)

const ultimo=programmingLanguajes[programmingLanguajes.length-1];

console.log(ultimo);


// recorrer un array

programmingLanguajes.forEach((elemento,indice,array)=>{
    console.log(elemento,indice)
})

// anadir un elemento al final de un array

programmingLanguajes.push("php");
console.log(programmingLanguajes);

// eliminar el ultimo elemento de un array

programmingLanguajes.pop();
console.log(programmingLanguajes);


// añadir un elemento al principio de un array

programmingLanguajes.unshift("python");
console.log(programmingLanguajes);

// eliminar el primer elemento de un array

programmingLanguajes.shift();
console.log(programmingLanguajes);


// encontrar el indice de un elemento del array

console.log(programmingLanguajes.indexOf("c#"));







// ejercicio


let trasnformarAtipos=[1,"casa",{} ,function(){}, false]
console.log(trasnformarAtipos);
let transformado=[];
for(let i=0;i<trasnformarAtipos.length;i++){
    
    //console.log(typeof(trasnformarAtipos[i]));
    transformado.push(typeof(trasnformarAtipos[i]));
}

console.log(transformado)


trasnformarAtipos= trasnformarAtipos.map(i=> typeof(i));

console.log(trasnformarAtipos);



// desestructurando objetos

const subject= {sigla:"sis-719",semestre:"7mo"};
const {sigla, semestre} = subject;
console.log(sigla);
console.log(semestre);

// Puedes desestructurar tan profundamente como quieras, siempre considerando si esa propiedad existe.

const computer ={
    processor: {
        transistor: { 
            silicon: { 
                thickness: '9nm' 
            }
        },
        ventilador:"Aura II" 
    }
} 
console.log(computer.processor.ventilador);


// Desestructurando un array

const numbers= [1,2,3,4,5,6];
const [uno, dos]= numbers;

console.log(uno);
console.log(dos);


Ejercicio

const person = {
    head:   {
        eyes: '8',
        mounth: {
            teeth: '7',
            tongue: '4'
        }
    },
    body: {
        shoulders: '10',
        chest: '9',
        arms: '8.5',
        hands: '9',
        legs: '10'
    }
}


// Obtenga la legs propiedad y dale el nombre de myLegs,
const {body} = person;

body.legs = "myLegs";

console.log(body);


// obtenga la eyes propiedad y dale el nombre de myEyes.

const {head} = person;
console.log(head);

head.eyes="myEyes";
console.log(head);

console.log(person);

// plantilla de cadenas

const nombre = "Edson" 
console.log(`mi nombre es: ${nombre}`);


// Ejercicio:
// Crear los siguientes variables : Name, FirstName, LastName, Age, hubby. y mostrar en una frase.

const Name= "alid";
const FirtName= "leon";
const LastName= "sacaca";
const Age= "26";
const hubby= "dormir";

console.log(`Hola, me llamo ${Name} ${FirtName} ${LastName} tengo ${Age} años y mi pasatiempo es ${hubby}`)


// Operator Ternary,
const num = 7; 
const result = (num % 2 == 0) ? "El numero es Par" : "El numero es Impar" 
console.log(result)



// Ejercicio:
// Utilice el operador ternario para almacenar "Adulto" en la variable Status si el valor de la variable Edad es mayor o igual que 18. De lo contrario, almacene "Menor" en la variable Status.
// Se utiliza console.log para mostrar el valor de la variable Status.


const Edad =18;
const Status = (Edad >=18) ? "Adulto" : "Menor";
console.log(Status);

