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
    //concatinating the day you were born and the Akan name