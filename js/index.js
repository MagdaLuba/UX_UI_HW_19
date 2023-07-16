
console.log ("your index.js file is loaded correctly!");

$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
  });
  function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);
    
    $(".searchButton").on("click", function(){
      $(".searchButton").toggleClass("active");
      if ($(".searchButton").hasClass("active")) {
        $(".searchBar").css("height", "100vh");
        $("#searchForm").css("opacity","1");
        $(".searchIcon").removeClass("fa-search").addClass("fa-times");
      }
      else {
        $(".searchBar").css('height', "0vh");
        $("#searchForm").css("opacity","0");
        $(".searchIcon").removeClass("fa-times").addClass("fa-search");
      }
    });
    
    $(".toggle").click(function(){
      $(this).find(".toggleContainer").toggleClass("active");
      $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
    });