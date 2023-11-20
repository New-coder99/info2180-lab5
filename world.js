window.onload = function(){
    var lookup = document.getElementById("lookup");
    var lookupcities = document.getElementById("lookupcities");
    var search = document.getElementById("country").value;
    var result = document.getElementById("result");
    
    lookup.addEventListener("click", function(){
        
        
        var request = new XMLHttpRequest();
        search = document.getElementById("country").value;
        var url = "http://localhost/info2180-lab5/world.php?country=" + search+"&lookup=countries";

        request.onreadystatechange = function(){
            if(request.readyState == XMLHttpRequest.DONE){
                if(request.status == 200){
                var text = request.responseText;
                
                result.innerHTML = text;
                
                }else{
                    alert("Error with request");
                }
            }
        }
        request.open("GET", url, true);
        request.send();
    
    });

    lookupcities.addEventListener("click", function(){
        
        var request = new XMLHttpRequest();
        search = document.getElementById("country").value;
        var url = "http://localhost/info2180-lab5/world.php?country=" + search + "&lookup=cities";

        request.onreadystatechange = function(){
            if(request.readyState == XMLHttpRequest.DONE){
                if(request.status == 200){
                    var text = request.responseText;
                    result.innerHTML = text;
                
                }else{
                    alert("Error with request");
                }
            }
        }
        request.open("GET", url, true);
        request.send();
    
    });
}