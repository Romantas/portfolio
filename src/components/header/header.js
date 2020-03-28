import React from "react";
import './header.css';
class Header extends React.Component {

    sendData = (arg) => {
        this.props.parentCallback(arg);
    }
    render() {
       return (
           <div className='nav'>
               <div className='container'>
                   <div className='logo'>
                       <p onClick={() => this.sendData(0)}>SHORT BEAR</p>
                   </div>
                   <div className='menu'>
                       <ul className="menu-list">
                           <li className="menu-item" onClick={() => this.sendData(1)}>KAS MES</li>
                           <li className="menu-item" onClick={() => this.sendData(2)}>KĄ MES DAROME</li>
                           <li className="menu-item" onClick={() => this.sendData(3)}>TESTAS</li>
                           <li className="menu-item" onClick={() => this.sendData(4)}>MŪSŲ DARBAI</li>
                       </ul>
                   </div>
               </div>
           </div>
       )
    }
}
export default Header;
