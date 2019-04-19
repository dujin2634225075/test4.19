let menu = document.querySelector(".menu");
axios.get("/getlist").then((res) => {
    menu.innerHTML = res.data.map(item => {
        return ` <li>${item.title}</li>`
    }).join("");
})