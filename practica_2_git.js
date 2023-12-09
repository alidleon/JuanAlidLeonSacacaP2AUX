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
