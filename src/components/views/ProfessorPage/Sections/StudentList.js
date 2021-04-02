import React ,{useState}from 'react'
import './Lecturelist.css' ;
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"
import { MDBIcon} from 'mdbreact';
function StudentList() {
 

    

    return (
        <div class="container overflow-auto" style ={{height :'500px'}} >
    <div class="row d-flex mt-4 ">
        <div class="col" style ={{marginLeft :"-15px"}}>
            <div class="card">
                <div class="d-flex justify-content-between align-items-center"> <h4 class="font-weight-bold"> 수강학생목록 (32명)</h4>
                    <h6 class= "font-weight-bold"><MDBIcon far icon="plus-square" style={{marginRight:'5px'}} />인원추가</h6>
                </div>
               
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="user-circle" /></span>
                            <div class="d-flex flex-column"> <span>16012416 장재호 </span>
                                
                            </div>
                        </div>  <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="user-circle" /></span>
                            <div class="d-flex flex-column"> <span>17011613 장세정</span>
                               
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="user-circle" /></span>
                            <div class="d-flex flex-column"> <span>17011821 이주혁</span>
                               
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="user-circle" /></span>
                            <div class="d-flex flex-column"> <span>18012412 김형찬</span>
                               
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="user-circle" /></span>
                            <div class="d-flex flex-column"> <span>18012422 서경원</span>
                               
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button> </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="user-circle" /></span>
                            <div class="d-flex flex-column"> <span>18012422 서경원</span>
                               
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button> </div>
                    </div>
                    <div class="mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <span class="star"><MDBIcon icon="user-circle" /></span>
                            <div class="d-flex flex-column"> <span>18012422 서경원</span>
                               
                            </div>
                        </div> <div class="d-flex flex-row"> <button class="btn btn-success mr-2 font-weight-bold" style={{fontSize:"1rem"}}>출석확인</button> </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default StudentList
