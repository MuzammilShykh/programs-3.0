// program 1

var div = document.getElementById("divProgram1");
var pTag = document.createElement("p");
div.appendChild(pTag)
pTag.style.color = "green"

function maximumNumber() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num1 > num2) {
       // console.log("Number 1 is greater than num2");
        pTag.innerHTML = "Number 1 is greater "
    }
    else if (num1 < num2) {
       // console.log("Number two is greater");
        pTag.innerHTML="Number 2 is greater"
    }
    else {
        //console.log("Both are equal");
        pTag.innerHTML ="Both are equal"
    }



}



// program 2
var div2 = document.getElementById("divProgram2");
var pTag2 = document.createElement("p");
div2.appendChild(pTag2)
pTag2.style.color = "green"
function maximumNumber3() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    console.log(num1);
    console.log(num2);
    console.log(num3);
    if ((num1 > num2) && (num1 > num3)) {
        //console.log("Number 1 is greater");
        pTag2.innerHTML = "Number 1 is greater "
    }
    else if (num2 > num1 && num2 > num3) {
       // console.log("Number 2 is greater");
        pTag2.innerHTML = "Number 2 is greater "
    }


    else {
       // console.log("number 3 is greater");
        pTag2.innerHTML = "Number 3 is greater "
    }




}
// program 3 
var div3 = document.getElementById("divProgram3");
var pTag3 = document.createElement("p");
div3.appendChild(pTag3)
pTag3.style.color = "green"



function signChecker() {
    var numInput = document.getElementById("numInput").value;

    if (numInput > 0) {
       // console.log("it is a positive number");
        pTag3.innerHTML = "Its is a positive number"
    }
    else if (numInput < 0) {
       // console.log("Its a negative number");
        pTag3.innerHTML = "Its a negative numberr"
    }
    else {
      //  console.log("its a zero");
        pTag3.innerHTML = "Its a zero"
    }

}





// program 4
var div4 = document.getElementById("divProgram4");
var pTag4 = document.createElement("p");
div4.appendChild(pTag4)
pTag4.style.color = "green"

function program4() {
    var inputNum = document.getElementById("program4").value;
    if (inputNum % 5 == 0) {
        //console.log("Its divisible by 5");
        pTag4.innerHTML = `Its divisible by 5`;
    }
    else if (inputNum % 11 == 0) {
       // console.log("It is divisble by 11");
        pTag4.innerHTML = `It is divisble by 11`;
    }
    else {
      //  console.log("It is niether divisible by 5 nor 11");
      pTag4.style.color = "red"
        pTag4.innerHTML = `It is niether divisible by 5 nor 11`;
    }
}

//program 5
var div5 = document.getElementById("divProgram5");
var pTag5 = document.createElement("p");
div5.appendChild(pTag5)
pTag5.style.color = "green"

function program5() {
    var inputNum = document.getElementById("program5").value;
    if (inputNum % 2 == 0) {
        //console.log(`${inputNum} is an even number`);
        pTag5.innerHTML = `${inputNum} is an even number`
    }
    else {
        //console.log(`${inputNum} is an odd number`);
        pTag5.innerHTML = `${inputNum} is an odd number`
    }

}

//program 6
var div6 = document.getElementById("divProgram6");
var pTag6 = document.createElement("p");
div6.appendChild(pTag6)
pTag6.style.color = "green"

function program6() {
    var inputNum = document.getElementById("program6").value;
    if (inputNum % 4 == 0 && inputNum % 100 !== 0 || inputNum % 400 == 0) {
       // console.log("it is leap year");
        pTag6.innerHTML = `It is leap year`
    }
    else {
       // console.log("It is not a leap year");
        pTag6.style.color = "red"
        pTag6.innerHTML = `It is not a leap year`
    }
}



//program 7 
var div7 = document.getElementById("divProgram7");
var pTag7 = document.createElement("p");
div7.appendChild(pTag7)
pTag7.style.color = "green"

function program7() {
    var inputChar = document.getElementById("program7").value;
    if ((/[a-zA-Z]/).test(inputChar)) {
        //console.log("It is an alphabet");
        pTag7.innerHTML = `It is an alphabet`
    }
    else {
        //console.log('Not an alphabet');
        pTag7.innerHTML = `Not an alphabet`
    }
}




// prgram 8 
var div8 = document.getElementById("divProgram8");
var pTag8= document.createElement("p");
div8.appendChild(pTag8)
pTag8.style.color = "green"

function program8() {
    let inputAlpha = document.getElementById("program8").value;
    if ((/[a-zA-Z]/).test(inputAlpha)) {
        if (inputAlpha === "a" || inputAlpha === "A" || inputAlpha === "e" || inputAlpha === "E" || inputAlpha === "i" || inputAlpha === "I" || inputAlpha === "o" || inputAlpha === "O" || inputAlpha === "u"
            || inputAlpha === "U") {
            //console.log(`${inputAlpha} is a vovel`);
            pTag8.innerHTML = `${inputAlpha} is a vovel`

        } else {
           // console.log(`${inputAlpha} is a consonant`);
            pTag8.innerHTML = `${inputAlpha} is a consonant`
        }

    }
    else {
        //console.log("please enter an alphabet");
        pTag8.style.color = "red"
        pTag8.innerHTML = `please enter an alphabet`
    }
}





// program 9 
var div9 = document.getElementById("divProgram9");
var pTag9 = document.createElement("p");
div9.appendChild(pTag9)
pTag9.style.color = "green"
function program9() {
    var inputChar = document.getElementById("program9").value;
    if ((/[a-zA-Z]/).test(inputChar)) {
       // console.log("It is an alphabet");
        pTag9.innerHTML = `It is an alphabet`
    }
    else if ((/^[0-9]+$/).test(inputChar)) {

        //console.log('it is a digit');
        pTag9.innerHTML = `It is a digit`;
    

    }
    else if ((/[!@#$%^&*(),.?":{}|<>]/g).test(inputChar)) {
        
      //  console.log("it is a special character");
        pTag9.innerHTML = `it is a special character`
    }
    else
    {
        pTag9.innerHTML = `Invalid Input` 
    }
    


}






// String Handling

//program 1 (10)
var div10 = document.getElementById("divProgram10");
var pTag10 = document.createElement("p");
div10.appendChild(pTag10)
pTag10.style.color = "green"


function program10() {
    var str = document.getElementById("program10").value;
    var str = str.length;
    console.log(str);
    pTag10.innerHTML = `length of a string: ${str}`
}


//program 2 (11)
var div11 = document.getElementById("divProgram11");
var pTag11 = document.createElement("p");
div11.appendChild(pTag11)
pTag11.style.color = "green"


function program11() {
    var str = document.getElementById("program11").value;
    var str2 = document.getElementById("inputProgram11").value;
str2 = str;

pTag11.innerHTML = `String 1: ${str} <br> String 2: ${str2} `
}









//program 3

var div12 = document.getElementById("divProgram12");
var pTag12 = document.createElement("p");
div12.appendChild(pTag12)
pTag12.style.color = "green"




function program12() {
    var firstName = document.getElementById("program12").value
    var lastName = document.getElementById("inputProgram12").value
    var fullName = `${firstName} ${lastName}`;
    //console.log(fullName);
    pTag12.innerHTML = `Full Name : ${fullName} `

}


//program 4

var div13 = document.getElementById("divProgram13");
var pTag13 = document.createElement("p");
div13.appendChild(pTag13)
pTag13.style.color = "green"


function program13() {
    var strInput1 = document.getElementById("program13").value;
    var strInput2 = document.getElementById("inputProgram13").value;
    if ((/[a-z]/).test(strInput1) && (/[a-z]/).test(strInput2) ) {
        if (strInput1 === strInput2) {
            //console.log("Both Strings are Same");
            pTag13.innerHTML = `Both Strings are Same`
        }  
        else {
           // console.log("Both Strings are Not Same");
            pTag13.innerHTML = `Both Strings are Not Same`
        }
        
    } 
    else 
    {
     // console.log("please Enter lowercase string");  
      pTag13.innerHTML = `please Enter lowercase string`
    }
    
}




// program 5


var div14 = document.getElementById("divProgram14");
var pTag14 = document.createElement("p");
div14.appendChild(pTag14)
pTag14.style.color = "green"



function program14() {
    
var strInput = document.getElementById("program14").value;
if ((/[a-z]/).test(strInput)) {
    strInput = strInput.toUpperCase()
   // console.log(strInput);
    pTag14.innerHTML = `Your Result : ${strInput} `
} 
else 
{
 //console.log("please Enter lowercase string");  
  pTag14.innerHTML = `please Enter lowercase string`
}


}







// program 6

var div15 = document.getElementById("divProgram15");
var pTag15 = document.createElement("p");
div15.appendChild(pTag15)
pTag15.style.color = "green"



function program15() {
    
    var strInput = document.getElementById("program15").value;
    if ((/[A-Z]/).test(strInput)) {
        strInput = strInput.toLowerCase()
       // console.log(strInput);
        pTag15.innerHTML = `Your Result : ${strInput} `
    } 
    else 
    {
    //  console.log("please Enter Uppercase string"); 
      pTag15.innerHTML = `please Enter Uppercase string` 
    }
    
    
    }

    // PROGRAM 7

    var div16 = document.getElementById("divProgram16");
    var pTag16 = document.createElement("p");
    div16.appendChild(pTag16)
    pTag16.style.color = "green"
    

    function program16() {
        var strInput = document.getElementById("program16").value;
        for (let i = 0; i < strInput.length-1; i++) {
           if ((/[a-z]/).test(strInput.charAt(i))) {
           var char1 = strInput.charAt(i)
            char1.toUpperCase() 
             console.log(char1);
           } 
           else if ((/[A-Z]/).test(strInput.charAt(i))) {
            
            var char1 = strInput.charAt(i)
            char1.toLowerCase() 
             console.log(char1);
           } 
               
           else
           {
               console.log("Not a string");
           }

            
        }
        console.log(strInput);
    }






// program 8 (17)
var div17 = document.getElementById("divProgram16");
    var pTag17 = document.createElement("p");
    div17.appendChild(pTag17)
    pTag17.style.color = "green"
    


function program17() {
    var strInput = document.getElementById("program17").value;
    var countNum = 0;
    var countNum2 = 0;
    var countNum3 = 0;
    for (let i = 0; i < strInput.length; i++) {
        if ((/[a-zA-Z]/g).test(strInput.charAt(i))) {
            countNum = countNum + 1;
        }
        else if ((/^[0-9]+$/g).test(strInput.charAt(i))) {
            countNum2 = countNum2 + 1
        }
        else if((/[!@#$%^&*(),.?":{}|<>]/g).test(strInput.charAt(i))) {
            countNum3 = countNum3 + 1;
        }
else{
    //console.log("error");
    pTag17.innerHTML = `Error`
}

    }
   // console.log("alphabets",countNum);
    pTag17.innerHTML = ` Total Alphabets : ${countNum}`
    //console.log(`Numbers`,countNum2 );
    pTag17.innerHTML = ` Total Numbers: ${countNum2}`
   // console.log(`Special Char`, countNum3);
    pTag17.innerHTML = ` Total Special Char : ${countNum3}`
}



// program 9 (18)
var div18 = document.getElementById("divProgram18");
    var pTag18 = document.createElement("p");
    div18.appendChild(pTag18)
    pTag18.style.color = "green"
    

function program18() {
    var strInput = document.getElementById("program18").value;
    var countNum = 0;
    var countNum2 = 0;
    
    for (let i = 0; i < strInput.length; i++) {
        if ( strInput.charAt(i) === "a" ||  strInput.charAt(i) === "A" || strInput.charAt(i)=== "e" ||  strInput.charAt(i) === "E" ||  strInput.charAt(i) === "i" || strInput.charAt(i)=== "I" ||  strInput.charAt(i) === "o" ||  strInput.charAt(i) === "O" ||  strInput.charAt(i)=== "u"
        ||  strInput.charAt(i)=== "U") {
            countNum = countNum + 1;
        }
        else if ( strInput.charAt(i) !== "a" ||  strInput.charAt(i) !== "A" || strInput.charAt(i) !=="e" ||  strInput.charAt(i)!== "E" || strInput.charAt(i)!== "i" ||  strInput.charAt(i)!== "I" ||  strInput.charAt(i)!=="o" ||  strInput.charAt(i) !== "O" ||  strInput.charAt(i) !== "u"
        ||  strInput.charAt(i) !== "U") {
            countNum2 = countNum2 + 1
        }
    
       
else{
    //console.log("error");
    pTag18.innerHTML = `Error`
}

    }
    //console.log("Vowels",countNum);
    pTag18.innerHTML = `Vowels : ${countNum}`
    //console.log(`Consonants`,countNum2 );
    pTag18.innerHTML = `Consonants : ${countNum2}`
   
}

// program 10 (19)..........


var div19 = document.getElementById("divProgram19");
var pTag19 = document.createElement("p");
div19.appendChild(pTag19)
pTag19.style.color = "green"


function program19() {
    var strInput = document.getElementById("program19").value;
    var countNum = 1;
for (let i = 0; i < strInput.length; i++) {
   if (strInput.charAt(i) == " ") {
       countNum = countNum + 1
      
   } 
  
      


    
}
//console.log(countNum);
pTag19.innerHTML = `Total Words ${countNum}`
}

// program 11 (20)
// program 12 (21)
// program 13 (22)







// program 14 (23)
var div23 = document.getElementById("divProgram23");
var pTag23 = document.createElement("p");
div23.appendChild(pTag23)
pTag23.style.color = "green"



function program23() {
    var strInput = document.getElementById("program23").value;
    var charInput = document.getElementById("inputProgram23").value;

    if (strInput.indexOf(charInput) != -1 ) {
        var indexNum = strInput.indexOf(charInput)
        //console.log("First Occurence is at Index ",indexNum);
        pTag23.innerHTML = `First Occurence is at Index : ${indexNum}`
    }
    else
    {
        //console.log(`character not Exists`);
        pTag23.style.color = "red"
        pTag23.innerHTML = `Character not Exists`
    }
}






// program 15 (24)

var div24 = document.getElementById("divProgram24");
var pTag24 = document.createElement("p");
div24.appendChild(pTag24)
pTag24.style.color = "green"


function program24() {
    var strInput = document.getElementById("program24").value;
    var charInput = document.getElementById("inputProgram24").value;

    if (strInput.indexOf(charInput) != -1 ) {
        var indexNum = strInput.lastIndexOf(charInput)
        pTag23.innerHTML = `Last Occurence is at Index : ${indexNum}`
    }
    else
    {
        //console.log(`character not Exists`);
        pTag23.style.color = "red"
        pTag23.innerHTML = `Character not Exists`
    }
}




// loopss............................................

// program 1 (25)

var div25 = document.getElementById("divProgram25");
var pTag25 = document.createElement("p");
div25.appendChild(pTag25)
pTag25.style.color = "green"



function program25() {
    numInput = document.getElementById("program25").value;
var num = ""
    if ((/^[0-9]+$/g).test(numInput)) {

        for (let i = 1; i <= numInput; i++) {

             num += " " + i
       //  console.log(i);
         pTag25.innerHTML = ` Natural Numbers are : ${num}` 
        }
      
            
    } 
    
    
    else {
       //console.log("please enter a number"); 
       pTag26.style.color = "red"
       pTag25.innerHTML = `please enter a number` 
    }
}


// program 2 (26)
var div26 = document.getElementById("divProgram26");
var pTag26 = document.createElement("p");
div26.appendChild(pTag26)
pTag26.style.color = "green"


function program26() {
    numInput = document.getElementById("program26").value;
    var num = ""
    if ((/^[0-9]+$/g).test(numInput)) {

        for (let i = numInput; i >= 1; i--) {
            num += " " + i
           // console.log(i);
           pTag26.innerHTML = ` Natural Numbers are : ${num}` 
        }
    } 
    
    
    else {
        pTag26.style.color = "red"
        pTag26.innerHTML = `please enter a number` 
    }
}




// program 3 (27)

var div27 = document.getElementById("divProgram27");
var pTag27 = document.createElement("p");
div27.appendChild(pTag27)
pTag27.style.color = "green"


function program27() {
    //charInput = document.getElementById("program27").value;
    
        for (let i = 'a'; i <= 'z'; i++) {

           

            
        }
    
    
    
   
}


// program 4 (28)

var div28 = document.getElementById("divProgram28");
var pTag28 = document.createElement("p");
div28.appendChild(pTag28)
pTag28.style.color = "green"


function program28() {
    var num = ""
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0 ) {
           // console.log(i);
            num += i + " "
            pTag28.innerHTML = `Odd Numbers Between 1 to 100 are : ${num}` 
        }
        
    }


}

// program 5 (29)
var div29 = document.getElementById("divProgram29");
var pTag29 = document.createElement("p");
div29.appendChild(pTag29)
pTag29.style.color = "green"


function program29() {
    var num = ""
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0 ) {
            //console.log(i);
            num += i + " "
            pTag29.innerHTML = `Odd Numbers Between 1 to 100 are : ${num}` 
        }
        
    }


}