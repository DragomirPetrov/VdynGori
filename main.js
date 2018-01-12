$(window).on("load", function(){

  //Loading page
  setTimeout(function(){
         $("body").addClass("loaded");
     }, 500);
     
     
	var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      duration: "100%", 
    }
  });

  var sceneHome = new ScrollMagic.Scene({triggerElement: "#home"})           
          .setClassToggle("#anchor0", "active")
          sceneHome.on("enter", function (event) {
            window.history.pushState("home", "title", "#home")
        })
          .addTo(controller);
          
  var sceneAbout = new ScrollMagic.Scene({triggerElement: "#about"})      
          .setTween("#about .hole-bg", {y: "12%", ease: Linear.easeNone})          
          .setClassToggle("#anchor1", "active")       
          sceneAbout.on("enter", function (event) {
            window.history.pushState("about", "title", "#about")
        })
          .addTo(controller);
          
	var sceneContact = new ScrollMagic.Scene({triggerElement: "#contact"})
          .setClassToggle("#anchor2", "active")
          sceneContact.on("enter", function (event) {
            window.history.pushState("contact", "title", "#contact")
        })      
					.addTo(controller);

          //Smooth scrolling
          $("nav a").on("click", function (evn) {
            evn.preventDefault();
            $('#main')
              .scrollTo(this.hash, this.hash)
          });
          
          // Show/hide dot lav labels on hover 
           $("nav a").hover(
             function () {
               $(this).prev("h5").show();
             },
             function () {
               $(this).prev("h5").hide();
             }
           );
});