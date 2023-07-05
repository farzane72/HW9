function find(array){
    for(let i=0;i< array.length;i++){
    if(array[i]==="ali"){
        console.log("find function:")
       console.log(array[i])
       break; 
    }
    }
    //--------with find----
// console.log( array.find(item=> item==="ali"))  
}
function filter(array){
    let newArray=[];
    for(let i=0;i< array.length;i++){
        if(array[i]==="ali"){
            newArray.push(array[i]) 
        }
        }
        console.log("filter function:")
        console.log( newArray)
        
}
function map(array){
    let newArray=[];
    for(let i=0;i< array.length;i++){
            newArray.push(array[i].length) 
            //newArray.push(i) 
        }
        console.log("map function:")
        console.log( newArray)
}


let array=["ali","farzane","reza","pari","ali"];
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
find(array);
filter(array);
map(array);
