import React, { useRef } from "react";
import { MDBIcon } from "mdbreact";
import AddStu from "./Addstu";
import { Button, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function StudentList() {
  const [addStu, setAddStu] = React.useState(false);
  const idRef = useRef(null);

  return (
    // <div>
    //   <button
    //     type="button"
    //     className="button"
    //     onClick={() => {
    //       setOpen(current => !current);
    //     }}
    //   >
    //     설정
    //   </button>
    //   <Popup open={open} contentStyle={{borderRadius:"1rem", minWidth:"690px"}} closeOnDocumentClick onClose={() => setOpen(false)}>
    //   <div className="modal-setting">
    //       <input>
    //       dsdsds
    //       </input>
    //     </div>
    //   </Popup>

    // </div>
    <div>
      <div className="container overflow-auto" style={{ height: "500px" }}>
        <div className="row d-flex mt-4 ">
          <div className="col" style={{ marginLeft: "-15px" }}>
            <div className="card">
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <h4 className="font-weight-bold"> 수강학생목록 (32명)</h4>
                <div>
                  <Button
                    className="btn-danger"
                    onClick={(e) => {
                      setAddStu((o) => !o);
                    }}
                  >
                    <MDBIcon
                      far
                      icon="plus-square"
                      style={{ marginRight: "5px" }}
                    />
                    인원추가
                  </Button>
                  <Popup
                    open={addStu}
                    contentStyle={{ borderRadius: "1rem", minWidth: "690px" }}
                  >
                    <div className="modal-setting">
                      <Form>
                        <Form.Group id="id">
                          <Form.Label
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            학생의 학번을 입력해주세요
                          </Form.Label>
                          <Form.Control type="text" ref={idRef} required />
                        </Form.Group>
                        <Button className="w-100" type="submit">
                          등록하기
                        </Button>
                      </Form>
                    </div>
                  </Popup>
                </div>
              </div>

              <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    {" "}
                    <span className="star">
                      <MDBIcon icon="user-circle" />
                    </span>
                    <div className="d-flex flex-column">
                      {" "}
                      <span>16012416 장재호 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    {" "}
                    <span className="star">
                      <MDBIcon icon="user-circle" />
                    </span>
                    <div className="d-flex flex-column">
                      {" "}
                      <span>17011613 장세정</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    {" "}
                    <span className="star">
                      <MDBIcon icon="user-circle" />
                    </span>
                    <div className="d-flex flex-column">
                      {" "}
                      <span>17011821 이주혁</span>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    {" "}
                    <span className="star">
                      <MDBIcon icon="user-circle" />
                    </span>
                    <div className="d-flex flex-column">
                      {" "}
                      <span>18012412 김형찬</span>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    {" "}
                    <span className="star">
                      <MDBIcon icon="user-circle" />
                    </span>
                    <div className="d-flex flex-column">
                      {" "}
                      <span>18012422 서경원</span>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    {" "}
                    <span className="star">
                      <MDBIcon icon="user-circle" />
                    </span>
                    <div className="d-flex flex-column">
                      {" "}
                      <span>18012422 서경원</span>
                    </div>
                  </div>{" "}
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      {" "}
                      <span className="star">
                        <MDBIcon icon="user-circle" />
                      </span>
                      <div className="d-flex flex-column">
                        {" "}
                        <span>18012422 서경원</span>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
