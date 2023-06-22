let randomNumber;
console.log(randomNumber);
let receivedDataUrl;
let storedUrlLinks = [];

document.getElementById("buttonForRandomPhotos").addEventListener("click", function () {
    const id = document.getElementById("url");
    if (id) {
        storedUrlLinks.push(receivedDataUrl);
        id.remove();
    }
    randomNumber = Math.floor((Math.random() * 5000) + 1);
    getUsers(randomNumber);
});


// document.getElementById("buttonForPreviousPhotos").addEventListener("click", function () {
//     const id = document.getElementById("url");
//     if (id) {
//         storedUrlLinks.push(receivedDataUrl);
//         id.remove();
//     }
//     randomNumber = Math.floor((Math.random() * 5000) + 1);
//     getUsers(randomNumber);
// });


async function getUsers(numberForApiCall) {
    let url = `https://jsonplaceholder.typicode.com/photos/${numberForApiCall}`;
    try {
        let res = await fetch(url);
        const receivedData = await res.json();
        receivedDataUrl = receivedData.url;
        console.log(receivedDataUrl);
        // document.getElementById('randomColor');
        const para = document.createElement("img");
        // const node = document.createTextNode("minimum 3 letters required");
        // para.appendChild(node);
        para.setAttribute("src", receivedDataUrl);
        para.setAttribute("id", "url");
        document.getElementById("randomColor").appendChild(para);
        console.log(storedUrlLinks);
    } catch (error) {
        console.log(error);
    }
}