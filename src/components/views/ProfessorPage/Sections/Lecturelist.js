import React ,{useState}from 'react'
import './Lecturelist.css' ;
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"
import { MDBIcon} from 'mdbreact';
function Lecturelist() {
 

    

    return (
        <div class="container">
    <div class="row d-flex justify-content-center mt-5 ">
        <div class="col-md-8">
            <div class="card">
                <div class="d-flex justify-content-between align-items-center"> <h4 class="font-weight-bold"> 강의목록</h4>
                    <h6 class= "font-weight-bold"><MDBIcon far icon="plus-square" style={{marginRight:'5px'}} />강의추가</h6>
                </div>
               
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="rss-square" /></span>
                            <div class="d-flex flex-column"> <span>고급프로그래밍 입문-P(002) </span>
                                <div class="d-flex flex-row align-items-center time-text"> <span class="dots"></span> <small>13:30~15:00 [mon/fri]</small> </div>
                            </div>
                        </div>  <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>강의시작</button><button class="btn btn-danger mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 강의관리</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="rss-square" /></span>
                            <div class="d-flex flex-column"> <span>Capstone 디자인(산학협렵프로젝트)(001)</span>
                                <div class="d-flex flex-row align-items-center time-text"> <span class="dots"></span> <small>13:30~19:00 [fri]</small> </div>
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>강의시작</button><button class="btn btn-danger mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 강의관리</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="rss-square" /></span>
                            <div class="d-flex flex-column"> <span>자료구조 및 실습(001)</span>
                                <div class="d-flex flex-row align-items-center time-text">  <span class="dots"></span> <small>15:30~18:00 [wed/thur]</small>  </div>
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>강의시작</button><button class="btn btn-danger mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 강의관리</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="rss-square" /></span>
                            <div class="d-flex flex-column"> <span>운영체제 맟 프로그래밍(001)</span>
                                <div class="d-flex flex-row align-items-center time-text"> <span class="dots"></span> <small>13:30~15:00 [two/thur]</small> </div>
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>강의시작</button><button class="btn btn-danger mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 강의관리</button> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Lecturelist
