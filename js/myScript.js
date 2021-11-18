(function() {
  //   document.getElementById("myHeading").innerHTML = "Ethan Burgess";
  //   document.querySelector("nav ul li").setAttribute("class", "currentPage");
  //   document
  //     .querySelector("nav ul li a")
  //     .setAttribute("href", "http://www.google.co.uk ");

  //DOM EVENT
  //   document.getElementById("myTestEvent").onclick = function() {
  //     console.info("hi");
  //   };

  // //  Add EventLisener

  // document.getElementById("myTestEvent").addEventListener("click", myFunction);
  // function myFunction(ev) {
  //   console.info(ev.target);
  //   ev.target.innerHTML("clicked");
  // }

  // Colour Picker v1
  // document.querySelector(".red").addEventListener("click", function(ev) {
  //   document.querySelector("body").setAttribute("class", "redBack");
  // });
  // document.querySelector(".green").addEventListener("click", function(ev) {
  //   document.querySelector("body").setAttribute("class", "greenBack");
  // });

  // document.querySelector(".blue").addEventListener("click", function(ev) {
  //   document.querySelector("body").setAttribute("class", "blueBack");
  // });
  // document.querySelector(".reset").addEventListener("click", function(ev) {
  //   document.querySelector("body").setAttribute("class", "colPicker");
  // });

  //Colour Picker v2
  var colourButtons = document.querySelectorAll(".colPicker");
  console.dir(colourButtons);
  for (var i = 0; i < colourButtons.length; i++) {
    colourButtons[i].addEventListener("click", chgColour);
  }
  function chgColour(ev) {
    console.dir(ev.target.classList);
    var colourPicked = ev.target.classList[0] + "Back";
    document.querySelector("body").setAttribute("class", colourPicked);
  }

  //
  // image rotator

  var imageAr = [
    "images/view1.jpg",
    "images/view2.jpg",
    "images/view3.jpg",
    "images/view4.jpg",
    "images/view5.jpg",
    "images/view6.jpg"
  ];
  console.dir(imageAr);
  document.getElementById("myImages").setAttribute("src", imageAr[0]);

  setInterval(chgImg, 4000);
  var imgNumber = 1;
  document.getElementById("myTestEvent").onclick = function() {
    console.info("Called");

    document.getElementById("myImages").setAttribute("src", imageAr[imgNumber]);
    imgNumber++;
    if (imgNumber == imageAr.length) {
      imgNumber = 0;
    }
  };
  function chgImg() {
    console.info("Called");

    document.getElementById("myImages").setAttribute("src", imageAr[imgNumber]);
    imgNumber++;
    if (imgNumber == imageAr.length) {
      imgNumber = 0;
    }
  }
  chgImg();
})();
