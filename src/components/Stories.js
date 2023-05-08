import Story from "./Story.js";

const storyInfo = [ 
  {
    usuario : "9gag",
    imagem : "assets/img/9gag.svg"
  },
  {
    usuario : "meowed",
    imagem : "assets/img/meowed.svg"
  },
  {
    usuario : "barked",
    imagem : "assets/img/barked.svg"
  },
  {
    usuario : "nathanwpylestrangeplanet",
    imagem : "assets/img/nathanwpylestrangeplanet.svg"
  },
  {
    usuario : "wawawicomics",
    imagem : "assets/img/wawawicomics.svg"
  },
  {
    usuario : "respondeai",
    imagem : "assets/img/respondeai.svg"
  },
  {
    usuario : "filomoderna",
    imagem : "assets/img/filomoderna.svg"
  },
  {
    usuario : "memeriagourmet",
    imagem : "assets/img/memeriagourmet.svg"
  },


]

export default function Stories() {
    return (
      <>
        <div class="stories">
        {storyInfo.map((kek) => (
          <Story
            kek = {kek}
          />
        ))}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
      </>
    )
}