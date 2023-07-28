import React from "react";
import { User } from '../App'




function Greeting (props: {user: User}) {


    
    return  <p>Hello {props.user.userName}!</p>

}


export default Greeting