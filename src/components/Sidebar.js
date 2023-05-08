import Sugestoes from "./Suggestions.js";
import User from "./User.js";

export default function Sidebar() {
    return (
        <div class="sidebar">
        <User/>

        <Sugestoes/>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>

    )
}