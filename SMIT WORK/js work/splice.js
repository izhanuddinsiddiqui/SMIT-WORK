function mySplice(){
    let array = ["orange","banana", "apple","grapes"]
    console.log(array);
    

    array.splice(prompt("enter a index number"),prompt("enter deleting number"),prompt("enter new value"))
    return array
}
let result = mySplice();
console.log("final array: ",result);

