import React from "react";
import { User } from '../App'




function Greeting (props: {user: User}) {


    
    return  <p>Hello {props.user.userName}! user#:{props.user.id}</p>

}


export default Greeting