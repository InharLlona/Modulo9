
import * as utils from "./utils.js";
import * as DB from "./data-business.js";

 DB.getc().then(data => {
  const nodes = [];
  for(let datas of data){
      const node = utils.createCharacterRow(datas)
      node.onclick = () =>{
            var qt = 0;
            DB.getep().then(dato =>{
                for(let datos of dato){
                   for(var i=0;i<datos.characters.length-1;i++){
                       if (datos.characters[i] === datas.name) qt++;
                   }
                }
                DB.getcu(datas.char_id).then(data => {  
                    utils.showCharacter(data[0], qt)
                })
            })
      }
      
      //mostrar(datas.char_id);
      nodes.push(node);   
  }
  for(let node of nodes){
      document.getElementById("root").append(node);
  }
}
    )

    
    
    function crearelementos (felemento,fclase,fidentificador,fcontenedor){
        var tArea = document.createElement(felemento);
        tArea.setAttribute("class",fclase);
        tArea.setAttribute("id",fidentificador);
        var elemento = document.getElementById(fcontenedor);
        elemento.appendChild(tArea);
    }     
 