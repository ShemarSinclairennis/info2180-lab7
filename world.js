window.onload=function(){
    var httpRequest;
    httpRequest = new XMLHttpRequest();
    
    function searchAll() {

              if(httpRequest.readyState===XMLHttpRequest.DONE){

                 if(httpRequest.status===200){

            

                    var response=httpRequest.responseText;

                    var output=document.getElementById('result');

            

                    output.innerHTML="<h1> Search Result<h1/><br>"+response;

                }

                else{

                 alert("There was a problem with the request");

                }

             }

             

         }
    function searchCountry() {

             if(httpRequest.readyState===XMLHttpRequest.DONE){

                 if(httpRequest.status===200){


                    var response=httpRequest.responseText;

                    var output=document.getElementById('result');

            

                    output.innerHTML="<h1> Search Result<h1/><br>"+response;

                }

                else{

                 

                 alert("There was a problem with the request");

                }

             }

             

         }
};