
import * as utils from "./utils.js";
import * as DB from "./data-business.js";

 DB.getc().then(data => {
  const nodes = [];
  for(let datas of data){
      const node = utils.createCharacterRow(datas)
      console.log(datas)
      node.onclick = () =>{
            var qt = 0;
            DB.getep().then(dato =>{
                let lista = "";
                let first = 1;
                for(let datos of dato){
                    console.log(datos)
                   for(var i=0;i<datos.characters.length-1;i++){
                       if (datos.characters[i] === datas.name) 
                       {
                       qt++;
                       let coma = ",";
                       if (first){
                           coma="";
                           first = 0;
                        }
                       lista = lista + coma + datos.title;
                       }
                   }
                }
                console.log(lista)
                DB.getcu(datas.char_id).then(data => {  
                    utils.showCharacter(data[0], qt, lista)
                })
            })
      }
      nodes.push(node);   
  }
  for(let node of nodes){
      document.getElementById("root").append(node);
  }
}
    )

    
    
    