const search = document.querySelector(".search");
const box = document.querySelector("#box");
const searchResult = document.querySelector(".result");
const btn = document.querySelector(".btn");
const accessKey = "YxPoZQ3leCMNEn2D6xrKhfphitT_X42bjKyxFaT3wic";

let keyWord = "";
let page = 1;

async function images(){
    keyWord = box.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    if( page == 1){
        searchResult.innerHTML = " ";
    }
    
    const results = data.results;
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    btn.style.opacity = 1;

}

search.addEventListener("submit", (e) => {
    e.preventDefault();
    page=1;
    images();
})

btn.addEventListener("click",()=>{
    page++;
    images();
}) 