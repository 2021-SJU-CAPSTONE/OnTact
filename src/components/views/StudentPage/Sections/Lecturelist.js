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
                    <h6 class= "font-weight-bold">2021학년도 1학기</h6>
                </div>
               
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="stop" /></span>
                            <div class="d-flex flex-column"> <span>고급프로그래밍 입문-P(002) </span>
                                <div class="d-flex flex-row align-items-center time-text"> <span class="dots"></span> <small>여러 교수자</small> </div>
                            </div>
                        </div>  <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button><button class="btn btn-warning mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 녹화강의</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="play" /></span>
                            <div class="d-flex flex-column"> <span>Capstone 디자인(산학협렵프로젝트)(001)</span>
                                <div class="d-flex flex-row align-items-center time-text"> <span class="dots"></span> <small>여러 교수자</small> </div>
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button><button class="btn btn-warning mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 녹화강의</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="stop" /></span>
                            <div class="d-flex flex-column"> <span>Technical Writing</span>
                                <div class="d-flex flex-row align-items-center time-text">  <span class="dots"></span> <small>진실로</small>  </div>
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button><button class="btn btn-warning mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 녹화강의</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="stop" /></span>
                            <div class="d-flex flex-column"> <span>운영체제 맟 프로그래밍(001)</span>
                                <div class="d-flex flex-row align-items-center time-text"> <span class="dots"></span> <small>Muhamad Raheal Butta</small> </div>
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button><button class="btn btn-warning mr-2 font-weight-bold" style={{fontSize:"1rem"}}> 녹화강의</button> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Lecturelist
