menu_list_array = ["Veg Margherita Pizza",
                   "Double Cheese Pizza",
                   "Chicken Tikka Pizza",
                   "Nutella Pizza",
                   "Olive Mix Pizza (made with the finest olives)",
                   "Paneer Tikka Pizza",
                   "Veg Mushroom Pizza",
                   "Corn'n'More pizza",
                   "Brocolli Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for (var m =0; m < menu_list_array.length;m++)
{
    htmldata=htmldata+'<li>'+menu_list_array[m]+'<li>';}
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='card'>"

for (var m =0;m < menu_list_array.length; m++){
    htmldata=htmldata+'<div class="card">'
    + '<img id="img1" src="images/pizzaImg.png"/>'
    +menu_list_array[m]+'</div>'
}
htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;

function add_top()
{
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
}}