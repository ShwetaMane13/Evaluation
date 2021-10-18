async function getNews(){
    // fca658c08a954448b96bb9e991897e59
    let res = await fetch("http://newsapi.org/v2/top-headlines?pageSize=100&sources=bbc-news&apiKey=fca658c08a954448b96bb9e991897e59");
    let data = await res.json();
    console.log("data:", data.articles);
    showNews(data.articles);
}
getNews();

async function showNews(news){
    let display = document.getElementById("display");
    news.forEach((item) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("p");

        img.src = item.urlToImage;
        title.innerText = item.title;

        div.onclick = async (item)=>{
            window.location.href = 'C:/Users/admin/Desktop/riddhi;/DOM/18-10-2021/Eval/news.html';
        }
        div.append(img, title);
        display.append(div);
    });
}

function getSearch(){
    let query = document.getElementById("news").value;

    if(localStorage.getItem("search") === null)
    {
        localStorage.setItem("search", JSON.stringify([]));
    }

    let array = JSON.parse(localStorage.getItem("search"));
    array.push(query);
}