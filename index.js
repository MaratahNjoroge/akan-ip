//Business logic

var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var dateWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//userInterface

function getInfo(){
    var day = parseInt(document.getElementById("day").value);
    
    var month = parseInt(document.getElementById("month").value);
    
    var year = parseInt(document.getElementById("year").value);
    
    var gender = radioInfo();
    
    var dayWeek = new Date(year + "/" + month + "/" + day);
    var d = dayWeek.getDay();
    var name="" ;
    if (gender ==="male"){
       name = male[d];
    }
    else{
       name = female[d];
    }
    //concat the day born and the Akan name
    alert("You were born on "+ dateWeek[d] + " and your Akan name is "+ name);
document.getElementById('akan').innerHTML = "You were born on " + daysOfTheWeek[d] +  " and your Akan name is: " + maleNames[d] ;
}
function radioInfo (){
    var radio = document.getElementsByName('gender');
    for (var i = 0;  i<radio.length; i++)
    {
    if (radio[i].checked==true)
    {
        // generate output with the checked radio

        gender = radio[i].value;
        // only one radio can be logically checked

return gender;
}
}
}