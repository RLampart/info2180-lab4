document.addEventListener("DOMContentLoaded",function(){
    list = "superheroes.php";
    var button = document.getElementsByClassName("btn")[0];
    console.groupCollapsed(button);
    button.onclick = function(event){
        event.preventDefault();
        const httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState == XMLHttpRequest.DONE){
               if (httpRequest.status == 200){
                  var response = httpRequest.responseText;
                  alert(response);
            }     
               else
                  alert("error");}
        }
        httpRequest.open("GET",list);
        httpRequest.send();
    }

})