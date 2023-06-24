const xhr = new XMLHttpRequest();
let button=document.getElementById("submit");
button.onclick=function(){
    let container=document.getElementById("search");
    xhr.open("GET",`http://www.omdbapi.com/?t=${container.value}&apikey=bfa84a82`)
    xhr.onloadend=postAjaxFunction;
    xhr.send();
}

let postAjaxFunction=function(){
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        
        let title=response["Title"];
        let result=document.getElementById("title");
        result.innerHTML="Title:"+title;
        
        let director=response["Director"];
        let d=document.getElementById("director");
        d.innerHTML="Director:"+director;
        
        let year=response["Year"];
        let y=document.getElementById("year");
        y.innerHTML="Year:"+year;
    } else {
        result[0].innerHTML = "something is wrong.";
    }
};

