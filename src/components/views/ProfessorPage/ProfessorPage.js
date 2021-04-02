import React, { Component } from 'react'
import {UserOutlined} from '@ant-design/icons';
import Lecturelist from './Sections/Lecturelist';
//import Lecturelist from './Sections/Lecturelist';
function ProfessorPage() {

    return (
        <div style={{ width: '75%', margin: '6rem auto' }}>
        <div style={{ marginBottom:'50px',textAlign: 'center' }}>
            <h2 style ={{fontWeight:'bold'}}> <UserOutlined style ={{verticalAlign : 'bottom'}}/> 이주혁님    </h2>
        </div>
        <div style = {{textAlign: "center"}}>
            <Lecturelist />
        </div>
    </div>
    )
    
}

export default ProfessorPage
