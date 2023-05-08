

export default function Post({plim}) {
    return (
        <div class="post">
            <div class="topo">
            <div class="usuario">
                <img src={plim.fotoUser} alt="meowed"/>
                meowed
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

        <div class="conteudo">
          <img src={plim.fotoPostada} alt="gato-telefone"/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={plim.fotoCurtidor} alt="respondeai"/>
            <div class="texto">
              Curtido por <strong>{plim.curtidoPor}</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>

    )
}