

// terinary
1
var score=1235;
score>=90?console.log("excellent"):score>=60?console.log("good"):console.log("need improvement")


//2

var day= "saturday"

day == "sunday" || day == "saturday"
? console.log("weekend")
: console.log("weekday")


//3 palindrome

str = ""
str1 = ""

for (i=str.length-1;i>=0;i--){
      str1+=str[i]
}
if(str==str1){
    console.log("palindrome")}
 else{
   console.log("not a palindrome")
 }



//4 
str = "hello"

str1 = ""
for(i=0;i<5;i++){
    str1+=str[i]
     console.log(str1)
}