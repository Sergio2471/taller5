function consumirAPI() {
    console.log("Iniciando busqueda");

    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'https://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

    console.log(url);

    var recibir = document.getElementById("marvel")

    fetch(url)
    .then(response => response.json())
    .then(json => {
        for (item of json.data.results){

            console.log(item.name)

            var div = document.createElement("div");

            var img = document.createElement("img");
            img.src = item.thumbnail.path + "." + item.thumbnail.extension;

            var label = document.createElement("label");
            label.innerText = item.name;

            var descripcion = document.createElement("p");
            descripcion.innerText = item.description

            div.appendChild(label);
            div.appendChild(img);
            div.appendChild(descripcion);


            var series = document.createElement("a");
            series.innerText = "Ver Series";
            series.href = "html/series.html?Heroe=" + item.series.collectionURI;
            div.appendChild(series);

            var comics = document.createElement("a");
            comics.innerText = "Ver Comics";
            comics.href = "html/comics.html?Heroe=" + item.comics.collectionURI;
            div.appendChild(comics);

            var eventos = document.createElement("a");
            eventos.innerText = "Ver Eventos";
            eventos.href = "html/eventos.html?Heroe=" + item.events.collectionURI;
            div.appendChild(eventos);

            var stories = document.createElement("a");
            stories.innerText = "Ver Stories"; 
            stories.href = "html/stories.html?Heroe=" + item.id;
            div.appendChild(stories);

            recibir.appendChild(div);

        }
    })
}

function  seriesMarvel(){

    
   

    const paramURL = window.location.search;

    const parametrosURL = new URLSearchParams(paramURL);

    const Heroe = parametrosURL.get('Heroe');

    var url =  convertirHTTPS(Heroe)



    console.log(url);


    var contenido = document.getElementById("contenido")


    fetch(url)
    .then(response => response.json())
    .then(json => {

        for(item of json.data.results){

            console.log(item.title)
            console.log(item.urls[0].url)

            var title = document.createElement("p")
            title.innerText = item.title

            

            contenido.appendChild(title)




            var link = document.createElement("a")
            link.href = item.urls[0].url
            link.innerText = item.urls[0].url

            contenido.appendChild(link)

            


        }

    })

}



function  comicsMarvel(){

    
   

    const paramURL = window.location.search;

    const parametrosURL = new URLSearchParams(paramURL);

    const Heroe = parametrosURL.get('Heroe');

    var url = convertirHTTPS(Heroe)




    console.log(url);


    var contenido = document.getElementById("contenido")


    fetch(url)
    .then(response => response.json())
    .then(json => {

        for(item of json.data.results){

            console.log(item.title)
            console.log(item.urls[0].url)

            var title = document.createElement("p")
            title.innerText = item.title



            contenido.appendChild(title)

            var link = document.createElement("a")
            link.href = item.urls[0].url
            link.innerText = item.urls[0].url

            contenido.appendChild(link)

        }
    })
}


function  EventosMarvel(){

    
   
    const paramURL = window.location.search;

    const parametrosURL = new URLSearchParams(paramURL);

    const Heroe = parametrosURL.get('Heroe');

    var url = convertirHTTPS(Heroe)



    console.log(url);


    var contenido = document.getElementById("contenido")


    fetch(url)
    .then(response => response.json())
    .then(json => {

        for(item of json.data.results){

            console.log(item.title)
            console.log(item.urls[0].url)

            var title = document.createElement("p")
            title.innerText = item.title



            contenido.appendChild(title)

            var link = document.createElement("a")
            link.href = item.urls[0].url
            link.innerText = item.urls[0].url

            contenido.appendChild(link)

            


        }
    })

}


function convertirHTTPS(urlInsegura){

    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";


    var https ="https://" + urlInsegura.substring(7, urlInsegura.length) + '?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

    return https

}

