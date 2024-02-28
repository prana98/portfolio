function menuItemActivated(item) {
  switch (item) {
    case "about":
      var roller = document.getElementById("roller_id");
      roller.classList.remove("roller_animate");
      roller.classList.add("roller_unroll_animate");

      setTimeout(function () {
        roller.classList.remove("roller_unroll_animate");
        document.getElementById("home-content").style.display = "none";
        document.getElementById("contact-content").style.display = "none";
        
      },2000);
      

      setTimeout(function () {
        roller.classList.add("roller_animate");
        document.getElementById("about-content").style.display = "block";
      },2000);

      break;
    case "home":
      var roller = document.getElementById("roller_id");
      roller.classList.remove("roller_animate");

      setTimeout(function () {
        roller.classList.add("roller_animate");
        document.getElementById("home-content").style.display = "block";
        document.getElementById("about-content").style.display = "none";
        document.getElementById("contact-content").style.display = "none";
      },500);

      break;
    case "contact":
      var roller = document.getElementById("roller_id");
      roller.classList.remove("roller_animate");

      setTimeout(function () {
        roller.classList.add("roller_animate");
        document.getElementById("home-content").style.display = "none";
        document.getElementById("about-content").style.display = "none";
        document.getElementById("contact-content").style.display = "block";
      },500);

      break;
    default:
      alert(`Pressed ${item}`);
      break;
  }
}
