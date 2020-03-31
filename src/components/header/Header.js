import React from "react";
import './header.css';
export default class Header extends React.Component {
    render() {
       return (
           <div className='nav'>
               <div className='container'>
                   <div className='logo'>
                       <p>SHORT BEAR</p>
                   </div>
                   <div className='menu'>
                       <ul className="menu-list">
                           <li className="menu-item">KAS MES</li>
                           <li className="menu-item">KĄ MES DAROME</li>
                           <li className="menu-item">TESTAS</li>
                           <li className="menu-item">MŪSŲ DARBAI</li>
                       </ul>
                   </div>
               </div>
           </div>
       )
    }
}
