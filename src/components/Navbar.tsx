import React from "react";
import { User } from "../model/model";
import { Link } from 'react-router-dom'





export class Navbar extends React.Component<{
    user: User | undefined
}> {

    render(){
        let loginLogOut: any
        if (this.props.user) {
            loginLogOut = <Link to='/logout' style={{float:'right'}} >{this.props.user.userName}</Link>
        } else {
            loginLogOut = <Link to='/login'  style={{float:'right'}}>Login</Link>
        }


        return(
            <div className='navbar'>
                 <div className="rightside">
                 {loginLogOut} ---
                   <input type="text" placeholder="Search..." />
                    <button>Search</button>
               <br />
               </div>
             
                    <div className="header"> 
                     <h1>JUST BOOK IT </h1>
                     
                    </div>

               <div className="leftside">
                    <div className="links">
                        <Link to='/'>| HOME | </Link>
                        <Link to='/profile'> | PROFILE |</Link>
                        <Link to='/hotels'> | HOTELS |</Link>
                        <br />
                   
                    </div>
                  
            </div>
</div> 

            
        )
    }
} 