import { API_URL, readProducts, createProducts, card} from "./utulity.js";

document.getElementById("apply").addEventListener("click",function(){
    console.log(document.querySelector('input[name="shippingType"]:checked').value
    )
    card.shipping=`${document.querySelector('input[name="shippingType"]:checked').value}`
    window.localStorage.setItem("card", JSON.stringify(card))
    window.location.href="./checkout.html"
})