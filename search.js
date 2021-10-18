async function getNews(){
    // fca658c08a954448b96bb9e991897e59
    let query = document.getElementById("news").value
    let res = await fetch(`http://newsapi.org/v2/everything?q=${query}&apiKey=fca658c08a954448b96bb9e991897e59`);
    let data = await res.json();
    console.log("data:", data.articles);
    showNews(data.articles);
}


async function showNews(news){
    let display = document.getElementById("display");
    news.forEach((item) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("p");

        img.src = item.urlToImage;
        title.innerText = item.title;

        div.append(img, title);
        display.append(div);
    });
}