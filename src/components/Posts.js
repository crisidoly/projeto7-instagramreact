import Post from "./Post.js"

const postInfo = [
  {
    usuario: "meowed",
    fotoUser: "assets/img/meowed.svg",
    fotoPostada: "assets/img/gato-telefone.svg",
    fotoCurtidor: "assets/img/respondeai.svg",
    curtidoPor: "respondeai",
  },
  {
    usuario: "barked",
    fotoUser: "assets/img/barked.svg",
    fotoPostada: "assets/img/dog.svg",
    fotoCurtidor: "assets/img/adorable_animals.svg",
    curtidoPor: "adorable_animals",
  }
]

export default function Posts() {
    return (
      <>
        <div class="posts">
        {postInfo.map((plim) => (
          <Post
          plim = {plim}
        
        />)
        
        )}
        </div>

        </>
    )
}