import Greeting from "./Greeting";
import { User } from '../App'
import "../styles/Header.css"



function Header(props: {user: User}) {
    const {user} = props
   return( 
    <div className="headerDiv">
            <h2 className="logoMain">bigBrain</h2>
            <h1 className="pageCurrent"></h1>
            <Greeting user={user}/>
        </div>
   )


}

export default Header