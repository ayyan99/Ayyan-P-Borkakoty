// Event Handling
document.addEventListener("DOMContentLoaded", 
  function (event) {

    // Unobstructive event binding
    document.querySelector("button")
      .addEventListener("Click", function () {
        

      //Call server to get the name
      $ajaxUtils
        .sendGetRequest("name.txt", function (request) {
          var name = request.responseText;

          document.querySelector("#content").
          innerHTML = "<h2>Hello " + name + "!";
        });

      
      });
  }
);