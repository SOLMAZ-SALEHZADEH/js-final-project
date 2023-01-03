import { API_URL, readProducts, createProducts, card} from "./utulity.js";

document.getElementById("applyAdress").addEventListener("click",function(){
    console.log(document.querySelector('input[name="address"]:checked').value
    )
    card.address=`${document.querySelector('input[name="address"]:checked').value}`
    window.localStorage.setItem("card", JSON.stringify(card))
    window.location.href="./checkout.html"
})