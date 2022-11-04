document.addEventListener("DOMContentLoaded",function(){
    var button = document.getElementsByClassName("btn")[0];
    var list = "superheroes.php?name=";
    var heading = "<h2>Result</h2>"
    button.onclick = function(event){
        event.preventDefault();
        const httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState == XMLHttpRequest.DONE){
               if (httpRequest.status == 200){
                  var response = httpRequest.responseText;
                  var result = document.getElementById("result");
                  result.innerHTML = heading + response;
            }     
               else
                  alert("error");}
        }
        query = document.getElementById("searchbox").value;
        query.trim();
        if((/^[a-zA-Z ]+$/).test(query)){
          list += query;
        }
        else if(query == ""){
          list = list;
        }
        else{
          list += "invalid";
        }
        httpRequest.open("GET",list);
        httpRequest.send();
        list = "superheroes.php?name="
    }

})