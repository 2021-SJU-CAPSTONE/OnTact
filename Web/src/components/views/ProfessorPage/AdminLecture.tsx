import React, { Component } from 'react'
import {UserOutlined} from '@ant-design/icons';
import './Sections/AdminLecture.css'
import StudentList from './Sections/StudentList';
import Addstudent from './Sections/Addstudent';

//import Lecturelist from './Sections/Lecturelist';
function AdimnLecture() {

    return (
        <div className="row" style={{ width: '75%', margin: '6rem auto' }}>
            <div className ="col-md-6">
                <span className="badge badge-danger"  style={{width : "100px",display : 'block' ,marginBottom : '20px', fontSize : '1rem'}}>강의명</span>
                <span className="badge badge-light"  style={{width : "300px", display : 'block' ,fontSize : '1rem'}}>Capstone Design(001)</span>
                <div>
                    <StudentList />
                </div>
            </div>
            <div className ="col-md-6 " >
                <span className="badge badge-danger"  style={{width : "100px", display : 'block', marginBottom : '20px',fontSize : '1rem'}}>강의시간</span> 
                <span className="badge badge-light"  style={{width : "300px" ,display : 'block' ,fontSize : '1rem'}}>금요일 13:30 ~ 19:00</span>
                <div >
                    <Addstudent />
                </div>
                <span className="badge badge-danger mt-4"  style={{width : "100px", display : 'block', marginBottom : '20px',fontSize : '1rem'}}>저정하기</span> 
            </div>
        </div>
    )
    
}

export default AdimnLecture
