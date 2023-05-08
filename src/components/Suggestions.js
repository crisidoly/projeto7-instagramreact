import Suggestion from "./Suggestion.js"

const suggestionInfo = [
  {
    foto: "assets/img/bad.vibes.memes.svg",
    nome: "bad.vibes.memes",
    razao: "Segue você"
  },
  {
    foto: "assets/img/chibirdart.svg",
    nome: "chibirdart",
    razao: "Segue você"
  },
  {
    foto: "assets/img/razoesparaacreditar.svg",
    nome: "razoesparaacreditar",
    razao: "Novo no Instagram"
  },
  {
    foto: "assets/img/adorable_animals.svg",
    nome: "adorable_animals",
    razao: "Segue você"
  },
  {
    foto: "assets/img/smallcutecats.svg",
    nome: "smallcutecats",
    razao: "Segue você"
  },

]

export default function Suggestions() {
    return (
      <>
     
      <div class="sugestoes">
        <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
        {suggestionInfo.map((lul) => (
        <Suggestion
        lul = {lul}
        />
        
        ))}
      </div>
      </>
    )
}