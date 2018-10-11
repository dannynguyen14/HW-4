var xmlhttp = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/users";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(mail){
    var out =[];
    var resp = '';
    var i;
    for(i = 0; i < mail.length; i++){
        out.push(mail[i].email)
    }
    out.sort();
    for (i = 0; i < out.length; i++){
        resp +='"'+out[i]+'",  <br>';
    }
    document.getElementById('response').innerHTML = resp;
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        fetchSort(myJson);
    });
function fetchSort(data){
    let usernames = new Array();
    for (let i=0, len=data.length; i<len; i++){
        usernames.push(' '+'"'+data[i].username+'"<br>')
    }
    usernames.sort(function(a, b){
    return a.length - b.length;
    });
    document.getElementById('response2').innerHTML = usernames;
}