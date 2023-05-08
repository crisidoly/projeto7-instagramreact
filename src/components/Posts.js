import Post from "./Post.js"

const postInfo = [
  {
    usuario: "meowed",
    fotoUser: "assets/img/meowed.svg",
    fotoPostada: "assets/img/gato-telefone.svg",
    fotoCurtidor: "assets/img/respondeai.svg",
    curtidoPor: "respondeai",
    likes: "101.523",
    liked: "101.524"
  },
  {
    usuario: "barked",
    fotoUser: "assets/img/barked.svg",
    fotoPostada: "assets/img/dog.svg",
    fotoCurtidor: "assets/img/adorable_animals.svg",
    curtidoPor: "adorable_animals",
    likes: "666",
    liked: "667"
  },
  {
    usuario: "barked",
    fotoUser: "assets/img/barked.svg",
    fotoPostada: "assets/img/dog.svg",
    fotoCurtidor: "assets/img/adorable_animals.svg",
    curtidoPor: "adorable_animals",
    likes: "420",
    liked: "421" 
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