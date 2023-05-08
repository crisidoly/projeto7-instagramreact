import React, { useState } from "react";

const User = (props) => {
  const [nomeUsuario, setNomeUsuario] = useState("catacomics");
  const [fotoUsuario, setFotoUsuario] = useState("assets/img/catanacomics.svg");

  const mudaNome = () => {
    let novoNomeUsuario = "";
    while (novoNomeUsuario === "" || novoNomeUsuario === null) {
      novoNomeUsuario = prompt("Escolha seu novo nome");
    }
    setNomeUsuario(novoNomeUsuario);
  };

  const mudaFoto = () => {
    let novaFotoUsuario = "";
    while (novaFotoUsuario === "" || novaFotoUsuario === null) {
      novaFotoUsuario = prompt("Escolha sua nova foto");
    }
    setFotoUsuario(novaFotoUsuario)
  }

  return (
    <div class="usuario">
      <img data-test="profile-image" onClick={mudaFoto} src={fotoUsuario} alt="imagem de perfil" />
      <div class="texto">
        <span data-test="name">
          <strong>{nomeUsuario}</strong>
          <ion-icon name="pencil" data-test="edit-name" onClick={mudaNome}></ion-icon>
        </span>
      </div>
    </div>
  );
};



export default User;