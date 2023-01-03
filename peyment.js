import { API_URL, readProducts, createProducts, card} from "./utulity.js";

document.getElementById("saveOrder").addEventListener("click",function(){

        fetch(`http://localhost:3000/activeOrder`, {
      method: "POST", // or 'PUT'
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
      
      window.localStorage.setItem("card", JSON.stringify({
        address:null,
        shipping:null,
        items:[],
        status:"active"
      }))
})