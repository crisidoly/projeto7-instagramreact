import Posts from "./Posts.js"
import Sidebar from "./Sidebar.js"
import Stories from "./Stories.js"

export default function Corpo() {
    return (
        <div class="corpo">
          <div class="esquerda">
            <Stories/>
            <Posts/>
          </div>
            <Sidebar/>
         </div>
    
    )
}