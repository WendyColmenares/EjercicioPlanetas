let nombrePlanetas = Array ('Tierra','Marte','Jupiter')
let distancia = [5,3,'67']
const tamaño = []

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)

let i = 0;

while( i <= nombrePlanetas.length -1){
    console.log(i)
    console.log(nombrePlanetas[i]);
    i = i+1
}

for (let index = 0; index < nombrePlanetas.length; index++){
    console.log(nombrePlanetas[index]);
}

/*Ciclo for In */
 /*for (const key in object){
    if (Object.hasOwnProperty.call(object,key)){
        const element = object[key];
    }
} */

for (const key in nombrePlanetas){
    console.log(nombrePlanetas[key])
}

/*Ciclo for Of */

/*for (const iterator of object){

}
 */

for (const planeta of nombrePlanetas){
    console.log(planeta)
}

//operador de igualdad
for (const key in distancia){
    if (distancia[key] == '5'){
        console.log('Se encontró la distancia')
    }else{
        console.log('No se encontró la distancia')
    }
}

for (const key in distancia){
    if (distancia[key] === '5'){
        console-log('Se encontró la distancia')
    }else{
        console.log('No se encontró la distancia')
    }
}