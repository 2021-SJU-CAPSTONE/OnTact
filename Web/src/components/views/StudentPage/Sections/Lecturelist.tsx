import React ,{useState}from 'react'
import './Lecturelist.css' ;
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"
import { MDBIcon} from 'mdbreact';
import {Link} from 'react-router-dom';
function Lecturelist() {
 

    

    return (
        <div className="container">
    <div className="row d-flex justify-content-center mt-5 ">
        <div className="col-md-8">
            <div className="card">
                <div className="d-flex justify-content-between align-items-center"> <h4 className="font-weight-bold"> 강의목록</h4>
                    <h6 className= "font-weight-bold">2021학년도 1학기</h6>
                </div>
               
                <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center"> <span className="star"><MDBIcon icon="stop" /></span>
                            <div className="d-flex flex-column"> <span>고급프로그래밍 입문-P(002) </span>
                                <div className="d-flex flex-row align-items-center time-text"> <span className="dots"></span> <small>여러 교수자</small> </div>
                            </div>
                        </div>  
                        <div className="d-flex flex-row"> 
                            <Link to="/studentpage/checkattendence">
                                <button className="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button>
                            </Link>
                            <button className="btn btn-warning mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 녹화강의</button> 
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center"> <span className="star"><MDBIcon icon="play" /></span>
                            <div className="d-flex flex-column"> <span>Capstone 디자인(산학협렵프로젝트)(001)</span>
                                <div className="d-flex flex-row align-items-center time-text"> <span className="dots"></span> <small>여러 교수자</small> </div>
                            </div>
                        </div> 
                        <div className="d-flex flex-row"> 
                        <Link to= "/studentpage/checkattendence">
                            <button className="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button>
                        </Link>
                        <button className="btn btn-warning mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 녹화강의</button> 
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center"> <span className="star"><MDBIcon icon="stop" /></span>
                            <div className="d-flex flex-column"> <span>Technical Writing</span>
                                <div className="d-flex flex-row align-items-center time-text">  <span className="dots"></span> <small>진실로</small>  </div>
                            </div>
                        </div> 
                        <div className="d-flex flex-row"> 
                            <Link to="/studentpage/checkattendence">
                                <button className="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button>
                            </Link>
                            <button className="btn btn-warning mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 녹화강의</button> 
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center"> <span className="star"><MDBIcon icon="stop" /></span>
                            <div className="d-flex flex-column"> <span>운영체제 맟 프로그래밍(001)</span>
                                <div className="d-flex flex-row align-items-center time-text"> <span className="dots"></span> <small>Muhamad Raheal Butta</small> </div>
                            </div>
                        </div> 
                        <div className="d-flex flex-row"> 
                            <Link to ="/studentpage/checkattendence">
                                <button className="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button>
                            </Link>
                            <button className="btn btn-warning mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 녹화강의</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Lecturelist
