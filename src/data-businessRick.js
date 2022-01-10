
function getc (){
return fetch("https://breakingbadapi.com/api/characters")  
    .then(response => {
     return response.json();
        })
    }

function getcu (id){
    return fetch("https://breakingbadapi.com/api/characters/" + id)  
        .then(response => {
         return response.json();
        })
    }
function getep (id){
    return fetch("https://breakingbadapi.com/api/episodes/")  
        .then(response => {
        return response.json();
        })
    }

export {getc, getcu, getep};