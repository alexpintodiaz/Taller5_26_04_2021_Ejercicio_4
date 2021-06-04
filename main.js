let two= [];
let x, numb;

for( x=1; x<=2;x++){
    numb =  parseInt(prompt("Por favor digite un número"));
    two.push(numb);
}

function compare(y, z) {
    return y - z;
  }

  two = two.sort(compare);

  alert(`Ordenados de menor a mayor los números son: ${two}`);
  console.log('Ordenados de menor a mayor los números son:', two);
