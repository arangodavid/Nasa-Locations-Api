//we need a button with a listening event that runs the ajax method
// properties: "facility" & "zipcode"
$(document).ready(function(){
  $("button").on("click",function(){
    $.ajax({
      url: "https://data.nasa.gov/resource/9g7e-7hzz.json",
      success: function(r){
        r.forEach(function(el, index){
          var zip = el.zipcode;
          var time = 200 * (index + Math.random())
          setTimeout(function() {
            $("ul").append("<li>" + zip+" - "+el.facility+"</li>");
            $(document).scrollTop(100000000000);
          }, time);
        })

      }
    });
  });
});
