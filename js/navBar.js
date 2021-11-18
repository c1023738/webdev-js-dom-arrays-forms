// Window Object
var url = window.location.href;
var filename = url.split("/").pop();
var allLinks = document.querySelectorAll("nav ul li");
for (var i = 0; i < allLinks.length; i++) {
  if (allLinks[i].querySelector("a").getAttribute("href") === filename) {
    allLinks[i].setAttribute("class", "currentPage");
    break;
  }
}
