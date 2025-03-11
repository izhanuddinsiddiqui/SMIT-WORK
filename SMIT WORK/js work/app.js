var matric = Number(prompt("enter your matric percentage"));
var test = Number(prompt("enter your entry test percentage"));

var average = (matric+ test)/2;
if(average<70){
    alert("you are not eligible for this course.your average is:"+ average);
    
}
else{
    alert("you are eligible for this course.your average is :"+average);
}