const tiposeguroEL = document.getElementById("tiposeguro")
const messegeEL = document.getElementById("messege");
tiposeguroEL.addEventListener("change", handlechange);

function handlechange() {
    let price = '';
    switch (tiposeguroEL.value) {
        case "Basico":
            price ="$500";
            break;
        case "Intermedio":
            price ="$1000";
            break;
        case "Premium":
            price ="$1500"; 
            break;       

        default:
            break;
    }
    (messegeEL.innerText = "El valor es:" + price);

}