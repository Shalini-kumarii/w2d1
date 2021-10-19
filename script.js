function likes(element) {
    console.log("element clicked", element);
    alert("Ninja was clicked");
}
function hide(element) {
    element.remove();
}
function login(element)
{
    console.log("button clicked");
    var changevalue = document.getElementById("changetext");
    changevalue.innerHTML = "Logout";
}