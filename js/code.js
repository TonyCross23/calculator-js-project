//hide error message

var firstNumerror = document.getElementById("first_num_error");
var secondNumerror = document.getElementById("second_num_error");
var operatorserror = document.getElementById("operators_error");
var form = document.getElementById("calculateForm");
var num1 = document.getElementById("fNumber");
var num2 = document.getElementById("sNumber");
var oper = document.getElementById("operators");
var result = document.getElementById("result");

firstNumerror.style.display = "none";
secondNumerror.style.display = "none";
operatorserror.style.display = "none";


function calculate(){
    //get user input

    var num1 = document.getElementById("fNumber").value;
    var num2 = document.getElementById("sNumber").value;
    var oper = document.getElementById("operators").value;
    var output;

     

        if(num1 == "" || num1 == null){
            firstNumerror.style.display = "block";
        } else{
            firstNumerror.style.display = "none";
        }


        if(num2 == "" || num2 == null){
            secondNumerror.style.display = "block";
        } else{
            secondNumerror.style.display = "none";
        }


        if(oper == "empty"){
            operatorserror.style.display = "block";
        } else{
            operatorserror.style.display = "none";
        }

        switch(oper){
            case 'add' : 
                 output = parseInt(num1) + parseInt(num2) ;
                 break;
            case 'minus' : 
                 output = parseInt(num1) - parseInt(num2) ;
                 break;
            case 'multiply' :
                 output = parseInt(num1) * parseInt(num2) ;
                break;
            case 'division' :
                 output = parseInt(num1) / parseInt(num2) ;
                 break;


        }

        result.innerHTML = output;
}

function clear_form(){
         form.reset()
         firstNumerror.style.display = "none";
         secondNumerror.style.display = "none";
         operatorserror.style.display = "none";
}
