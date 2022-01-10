const createCharacterRow = character => {
    const element = document.createElement("div");
  
    const avatar = createAvatar(character);
    element.appendChild(avatar);
  
    const link = createRowText(character);
    element.appendChild(link);
  
    element.className = "character-row";
  
    return element;
  };
  
  const createAvatar = character => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character.img;
  
    return element;
  };
  
  const createRowText = character => {
    const element = document.createElement("span");
    element.append(character.name);
  
    return element;
  };
  
  const createAvatarDetail = character => {
    const element = document.createElement("img");
    element.width = 250;
    element.src = character.img;
  
    return element;
  };
  
  const showCharacter = (character, cantidad, lista) => {
    console.log("character", character);
    const characterDetail = document.getElementById("character-detail");
  
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name));
    characterDetail.appendChild(
      createParagraph("Birthday: " + character.birthday)
    );
    characterDetail.appendChild(
      createParagraph("Nickname: " + character.nickname)
    );
    characterDetail.appendChild(
      createParagraph("Appearences: " + cantidad)
    );
    characterDetail.appendChild(
      createParagraph("Episode Lista: " + lista)
    );
  };
  
  const createParagraph = text => {
    const element = document.createElement("p");
    element.append(text);
    return element;
  };
  
  export { createCharacterRow, showCharacter };
 