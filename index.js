function rolldice1() {
    var randomnumb1 = Math.floor(Math.random() * 6) + 1;
    var randomdice = "dice" + randomnumb1 + ".png";
    var randomimgsrc = "images/" + randomdice;
    var imgs1 = document.querySelectorAll("img")[0];
    imgs1.setAttribute("src", randomimgsrc);


}
function rolldice2() {

    var randomnumb2 = Math.floor(Math.random() * 6) + 1;
    var randomdice2 = "images/" + "dice" + randomnumb2 + ".png";
    var imgs2 = document.querySelectorAll("img")[1];
    imgs2.setAttribute("src", randomdice2);
}


document.getElementById("rollb1").addEventListener("click", rolldice1);
document.getElementById("rollb2").addEventListener("click", rolldice2);
// document.getElementById("submit").addEventListener("click", compare);

