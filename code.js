let button = document.querySelector("#btn");
const url = "https://ipwho.is/";

button.addEventListener("click", async () => {
    let ip = document.querySelector("#in");
    let res = await fetch(url + ip.value);
    let response = await res.json();
    let Res = document.querySelector("#ju");
    delete response.readme;
    Res.innerText = JSON.stringify(response,null,2);
})
