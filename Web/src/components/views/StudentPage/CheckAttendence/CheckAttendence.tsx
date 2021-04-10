import React, { Component } from 'react'
import AttendenceTable from './AttendenceTable/AttendenceTable'

export class CheckAttendence extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <AttendenceTable />                
                <button className="btn mr-5 font-weight-bold " style={{marginLeft:'450px',fontSize:"1rem",marginTop:'30px', backgroundColor:'#D65E2A',color:'white'}}>목록으로</button> 
            </div>
        )
    }
}

export default CheckAttendence
