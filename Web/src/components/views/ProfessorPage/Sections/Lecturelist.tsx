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
                    <h6 className= "font-weight-bold"><MDBIcon far icon="plus-square" style={{marginRight:'5px'}} />강의추가</h6>
                </div>
               
                <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center"> <span className="star"><MDBIcon icon="rss-square" /></span>
                            <div className="d-flex flex-column"> <span>고급프로그래밍 입문-P(002) </span>
                                <div className="d-flex flex-row align-items-center time-text"> <span className="dots"></span> <small>13:30~15:00 [mon/fri]</small> </div>
                            </div>
                        </div>  
                        <div className="d-flex flex-row">
                            
                            <button className="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>강의시작</button>
                            <Link to = "/professorpage/adminlecture">
                                <button className="btn btn-danger mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 강의관리</button> 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center"> <span className="star"><MDBIcon icon="rss-square" /></span>
                            <div className="d-flex flex-column"> <span>Capstone 디자인(산학협렵프로젝트)(001)</span>
                                <div className="d-flex flex-row align-items-center time-text"> <span className="dots"></span> <small>13:30~19:00 [fri]</small> </div>
                            </div>
                        </div> 
                        <div className="d-flex flex-row">
                            <button className="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>강의시작</button>
                            <Link to = "/professorpage/adminlecture">
                            <button className="btn btn-danger mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 강의관리</button> 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center"> <span className="star"><MDBIcon icon="rss-square" /></span>
                            <div className="d-flex flex-column"> <span>자료구조 및 실습(001)</span>
                                <div className="d-flex flex-row align-items-center time-text">  <span className="dots"></span> <small>15:30~18:00 [wed/thur]</small>  </div>
                            </div>
                        </div> 
                        <div className="d-flex flex-row"> 
                            <button className="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>강의시작</button>
                            <Link to = "/professorpage/adminlecture">
                                <button className="btn btn-danger mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 강의관리</button> 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center"> <span className="star"><MDBIcon icon="rss-square" /></span>
                            <div className="d-flex flex-column"> <span>운영체제 맟 프로그래밍(001)</span>
                                <div className="d-flex flex-row align-items-center time-text"> <span className="dots"></span> <small>13:30~15:00 [two/thur]</small> </div>
                            </div>
                        </div> 
                        <div className="d-flex flex-row"> 
                            <button className="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>강의시작</button>
                            <Link to = "/professorpage/adminlecture">
                                <button className="btn btn-danger mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 강의관리</button> 
                            </Link>
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
