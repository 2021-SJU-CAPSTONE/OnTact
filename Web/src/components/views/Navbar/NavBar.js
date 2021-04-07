import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import { Drawer, Button} from 'antd';
import './Sections/Navbar.css';
import Icon from '@ant-design/icons';
import axios from 'axios';
import logo from './Sections/onTact.png'
import {UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
function NavBar() {
  

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%',height:'60px' }}>
      <div  className="menu__logo">
        <Link to ="/" >
          <img src={logo}  style= {{marginTop: '-10px',marginLeft :'50px',width: '100px', height : '30px'}}/>
        </Link>
      </div>
      <div style={{float :' right '}}>
        <h6 style={{marginTop:'20px',marginRight :'50px'}}>logout</h6>
      </div>
      <div style={{float :'right'}}>
      <h6 style={{marginTop:'20px',marginRight :'50px',fontWeight : 'bold'}} ><UserOutlined style={{verticalAlign: 'top'}}/> 이주혁님 </h6>
      </div>
      
    </nav>
  )
}

export default NavBar