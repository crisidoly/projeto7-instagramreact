import { useState } from "react"


export default function Post({ plim }) {
  const [save, setSave] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(parseInt(plim.likes));

  const handleLikeClick = (event) => {
    if (!isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setIsLiked(!isLiked);
  };

  const handlePostClick = (event) => {
    if (!isLiked) {
      setLikes(likes + 1);
    }
    setIsLiked(true);
  };

  return (
    <div data-test="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={plim.fotoUser} alt="meowed" />
          meowed
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          data-test="post-image"
          onClick={handlePostClick}
          src={plim.fotoPostada}
          alt="gato-telefone"
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              name={isLiked ? "heart" : "heart-outline"}
              onClick={handleLikeClick}
              style={{ color: isLiked ? "red" : "black" }}
            />
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div
            data-test="save-post"
            onClick={() => {
              setSave(!save);
            }}
            style={{ color: save ? "black" : "" }}
          >
            {!save ? (
              <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
            ) : (
              <ion-icon name="bookmark"></ion-icon>
            )}
          </div>
        </div>

        <div class="curtidas">
          <img src={plim.fotoCurtidor} alt="respondeai" />
          <div class="texto" data-test="like-post">
            Curtido por <strong>{plim.curtidoPor}</strong> e{" "}
            <strong data-test="likes-number"> outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}