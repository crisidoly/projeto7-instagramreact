import Post from "./Post.js"

const postInfo = [
  {
    usuario: "meowed",
    fotoUser: "assets/img/meowed.svg",
    fotoPostada: "assets/img/gato-telefone.svg",
    fotoCurtidor: "assets/img/respondeai.svg",
    curtidoPor: "respondeai",
    likes: "523"

  },
  {
    usuario: "barked",
    fotoUser: "assets/img/barked.svg",
    fotoPostada: "assets/img/dog.svg",
    fotoCurtidor: "assets/img/adorable_animals.svg",
    curtidoPor: "adorable_animals",
    likes: "666"
  
  },
  {
    usuario: "barked",
    fotoUser: "assets/img/barked.svg",
    fotoPostada: "assets/img/dog.svg",
    fotoCurtidor: "assets/img/adorable_animals.svg",
    curtidoPor: "adorable_animals",
    likes: "420"
 
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