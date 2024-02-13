// for loop,for while, loop, do while, while loop, map, foreach, for in

// let j= prompt('enter:')
// let x = +j;
// for ( let i = 1; i<=10; i++){
//     console.log(x + "x"; + i +"=" + x*i );
// }
// let arr = [1,2,3,4,5,6,7,'fldiji']
// for(let i=0; i<arr.length;i++){
//     if(arr[i]=='rofiq'){
//         arr[i]="noman";
        

//     }
//     console.log(arr[i]);

// function summaker(n25,m30){
//     let sum = n25+m30
//     return sum
// }
// let sumreturnvalue = summaker(25,30)


// function aker(n25){
//     let ta = n25 / 100
//     console.log(ta);
// }
// aker(sumreturnvalue)


// function summaker(a30,b40){
//     let res =a30*b40
//     return res
// }
// let resreturnvalue = summaker(30,40)

// function ner(a30) {
//     let ne = a30+400
//     console.log(ne);
// }

    


// ner(resreturnvalue)



function addprice (intiprice,Qunatity){
let totalprice = intiprice*Qunatity;
console.log(otalprice);
return totalprice
    
}
function addvat (returnTotalprice,vat){
    let addingVat = (returnTotalprice * vat) / (100+vat);
    console.log(addingVat +Math.ceil (returnTotalprice));
    return addingVat + returnTotalprice;
}

function makediscount (addingVat,dis){
   let descountPrice = addingVat- (addingVat*dis)/100;
   console.log(descountPrice);
    

}




let price = prompt("enter your price.")
let intiprice = Number(price);

let product= prompt("enter product Qunatity.")
let Qunatity= parseInt(product);




// argument pass
let returnTotalprice = addprice (intiprice,Qunatity)
let vat =30;
let addingVat = addvat (returnTotalprice,vat)
console.log(addingVat);
let dis = 10
  makediscount (addingVat,dis)

// argument pass
