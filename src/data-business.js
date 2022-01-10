
function getc (){
    return fetch("https://rickandmortyapi.com/api/character")  
    .then(response => {
     return response.json();
        })
    }
function getcu (id){
    return fetch("https://rickandmortyapi.com/api/character/" + id)  
        .then(response => {
         return response.json();
        })
    }
function getep (){
    return fetch("https://rickandmortyapi.com/api/episode")  
        .then(response => {
        return response.json();
        })
    }

export {getc, getcu, getep};