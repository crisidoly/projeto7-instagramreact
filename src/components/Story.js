


export default function Story({kek}) {
    return (
        <div class="story">
          <div class="imagem">
            <img src={kek.imagem}/>
          </div>
          <div class="usuario">
            <p>{kek.usuario}</p>
          </div>
        </div>
    )
}

