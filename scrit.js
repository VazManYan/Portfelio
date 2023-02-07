const content =document.querySelector("#content");
const abaut = document.querySelector("#Abaut");
const main = document.querySelector("#Main");
const co = document.querySelector("#co");
abaut.addEventListener("click", function(){
    content.innerHTML = "Team work,  Creativity, Interpersonal Skils, Problem Solving, Always Ready to Lern";
   
});
main.addEventListener("click", function(){
    content.innerHTML = co.innerHTML;
})