import React ,{useState}from 'react'
import './Lecturelist.css' ;
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"
import { MDBIcon} from 'mdbreact';
function Addstudent() {
 

    return (
        <div class="container overflow-auto" style ={{height :'500px'}} >
    <div class="row d-flex mt-4 ">
        <div class="col" style ={{marginLeft :"-15px"}}>
            <div class="card">
                <div class="d-flex justify-content-between align-items-center"> <h4 class="font-weight-bold"> 출석확인</h4>
                </div>
                <div>
                <span class="badge badge-light"  style={{width : "130px" ,height:"30px",display : 'block' ,fontSize : '1rem',justifyContent:'center',paddingTop:'8px'}}>16012416 장재호</span>    
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span style={{fontWeight:'bold'}} >1회차</span>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span class="badge badge-success" style={{fontSize : '1rem'}}>출석</span></div>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >지각</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >결석</span> </div> 
                        </div> 
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span style={{fontWeight:'bold'}} >2회차</span>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span class="badge badge-success" style={{fontSize : '1rem' }}>출석</span></div>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >지각</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >결석</span> </div> 
                        </div> 
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span style={{fontWeight:'bold'}} >3회차</span>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span class="badge badge-success" style={{fontSize : '1rem' }}>출석</span></div>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >지각</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >결석</span> </div> 
                        </div> 
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span style={{fontWeight:'bold'}} >4회차</span>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span class="badge badge-success" style={{fontSize : '1rem'}}>출석</span></div>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >지각</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >결석</span> </div> 
                        </div> 
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span style={{fontWeight:'bold'}} >5회차</span>
                            <div class="d-flex flex-column align-items-center" style={{width: '100px'}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >출석</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span class="badge badge-warning" style={{fontSize : '1rem' }}>지각</span></div>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >결석</span> </div> 
                        </div> 
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span style={{fontWeight:'bold'}} >6회차</span>
                            <div class="d-flex flex-column align-items-center align-items-center" style={{width: "100px"}}> <span class="badge badge-success  " style={{fontSize : '1rem'}}>출석</span></div>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >지각</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >결석</span> </div> 
                        </div> 
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span style={{fontWeight:'bold'}} >7회차</span>
                            
                            <div class="d-flex flex-column align-items-center" style={{width:"100px"}} > <span style={{fontSize: '1rem', fontWeight:'bold', textAlign :'center'}} >출석</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >지각</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span class="badge badge-danger" style={{fontSize : '1rem'}}>결석</span></div>
                        </div> 
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span style={{fontWeight:'bold'}} >8회차</span>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span class="badge badge-success" style={{fontSize : '1rem'}}>출석</span></div>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >지각</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >결석</span> </div> 
                        </div> 
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span style={{fontWeight:'bold'}} >9회차</span>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span class="badge badge-success" style={{fontSize : '1rem'}}>출석</span></div>
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >지각</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "100px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >결석</span> </div> 
                        </div> 
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span style={{fontWeight:'bold'}} >10회차</span>
                            <div class="d-flex flex-column align-items-center" style={{width:'80px'}}> <span class="badge badge-success" style={{fontSize : '1rem' }}>출석</span></div>
                            <div class="d-flex flex-column align-items-center" style={{width: "120px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >지각</span> </div> 
                            <div class="d-flex flex-column align-items-center" style={{width: "80px"}}> <span style={{fontSize: '1rem', fontWeight:'bold'}} >결석</span> </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Addstudent
