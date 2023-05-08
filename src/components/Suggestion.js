export default function Suggestion({lul}) {
    return (
        
        <div class="sugestao">
        <div class="usuario">
          <img src={lul.foto}/>
          <div class="texto">
          <div class="nome">{lul.nome}</div>
          <div class="razao">{lul.razao}</div>
          </div>
        </div>
        </div>
    )
}