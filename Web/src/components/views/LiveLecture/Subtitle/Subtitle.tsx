import React from "react";
import { KotoEn } from "./papago.js";
import * as type from "../../../type";
import { store } from "../../../firebase";
import * as lecture from "../../../utils/Lecture";
type Prop = {
  changeIsShare: (value?: boolean) => boolean;
  userInfo: type.UserInfo;
  onExit: () => void;
  lectureInfo: type.LectureInfo;
};
const Subtitle = (prop: Prop) => {
  const { webkitSpeechRecognition } = window as any;

  const recognition = new webkitSpeechRecognition();
  const language = "ko-KR";
  const btnSubref = React.useRef<HTMLButtonElement>(null);
  const btnTransref = React.useRef<HTMLButtonElement>(null);
  const finalRef = React.useRef<HTMLSpanElement>(null);
  const translateRef = React.useRef<HTMLSpanElement>(null);
  const [visibleSub, setVisibleSub] = React.useState(false);
  const [visibleTrans, setVisibleTrans] = React.useState(false);
  //형찬
  const isProf = prop.userInfo.isProfessor === "on";
  const btnShareRef = React.useRef<HTMLButtonElement>(null);
  const btnShareClick = () => {
    const cur = prop.changeIsShare();
    if (cur) {
      //현재 공유중
      if (btnShareRef.current) {
        btnShareRef.current.innerHTML = "화면 공유";
        prop.changeIsShare(false);
      }
    } else {
      // 현재 공유중 X
      if (btnShareRef.current) {
        btnShareRef.current.innerHTML = "공유 중지";
        prop.changeIsShare(true);
      }
    }
  };

  // const FIRST_CHAR = /\S/;
  const TWO_LINE = /\n\n/g;
  const ONE_LINE = /\n/g;

  let isRecognizing = false;
  let ignoreEndProcess = false;
  let finalTranscript = "";
  let firstText = "";
  let secondText = "";
  let tempText = "";
  let fireTime = 0;

  let startTime = 0;
  let curTime = 0;

  recognition.continuous = true;
  recognition.interimResults = true;

  /**
   * 음성 인식 시작 처리
   */
  recognition.onstart = function () {
    startTime = new Date().getTime();
    isRecognizing = true;
  };

  /**
   * 음성 인식 종료 처리
   */
  recognition.onend = function () {
    //console.log("onend", arguments);
    isRecognizing = false;

    if (ignoreEndProcess) {
      return false;
    }

    if (!finalTranscript) {
      //console.log("empty finalTranscript");
      return false;
    }
  };

  /**
   * 음성 인식 결과 처리
   */
  recognition.onresult = function (event) {
    // console.log("onresult", event);

    let interimTranscript = "";
    let finalSub = "";

    if (typeof event.results === "undefined") {
      recognition.onend = null;
      recognition.stop();
      return;
    }

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const transcript = event.results[i][0].transcript;

      if (event.results[i].isFinal) {
        finalTranscript += transcript + "\n";
        secondText = transcript;
        tempText = secondText;
        fireTime = curTime;
        curTime = 0;
        console.log("fireTime", fireTime);
      } else {
        interimTranscript += transcript;
        firstText = tempText;
        secondText = interimTranscript;
        if (curTime === 0) {
          curTime = Math.round((new Date().getTime() - startTime) / 1000);
        }
        console.log(fireTime, curTime, firstText);
      }
    }

    finalSub = linebreak(firstText + "\n" + secondText);
    ///save in tempSub
    store
      .collection("Lecture")
      .doc(prop.lectureInfo.Name)
      .update({ tempSub: finalSub });
    // 번역기능
    // KotoEn(finalSub).then(resultText => {
    //   //save in tempTrans
    //   console.log(resultText);
    //   store.collection("Lecture").doc(prop.lectureInfo.Name).update({ tempTrans: resultText });
    // });
    /// save in subTitle and Translate for record lecture
    if (fireTime !== 0 && firstText !== "") {
      console.log(
        "finalTranscript",
        fireTime,
        Math.round((new Date().getTime() - startTime) / 1000),
        firstText
      );
      lecture.stackSubtitle(
        prop.lectureInfo.Name,
        prop.lectureInfo.cnt,
        fireTime,
        linebreak(firstText)
      );
      // 번역기능
      // let sfireTime = fireTime;
      // KotoEn(firstText).then(resultText => {
      //   lecture.stackTranslation(
      //     prop.lectureInfo.Name,
      //     prop.lectureInfo.cnt,
      //     sfireTime,
      //     resultText
      //   );
      // });
      fireTime = 0;
    }

    // console.log("finalTranscript", finalTranscript);
    console.log("interimTranscript", interimTranscript);
  };

  /**
   * 음성 인식 에러 처리
   */
  recognition.onerror = function (event) {
    console.log("onerror", event);

    if (event.error.match(/no-speech|audio-capture|not-allowed/)) {
      ignoreEndProcess = true;
    }
  };

  /**
   * 개행 처리
   * @param {string} s
   */
  const linebreak = (s) => {
    return s.replace(TWO_LINE, "<p></p>").replace(ONE_LINE, "<br>");
  };

  /**
   * 음성 인식 트리거
   */
  const start = () => {
    if (isRecognizing) {
      recognition.stop();
      return;
    }
    recognition.lang = language;
    recognition.start();
    ignoreEndProcess = false;

    if (finalRef.current) {
      finalRef.current.innerHTML = "";
    }
    if (translateRef.current) {
      translateRef.current.innerHTML = "";
    }
  };

  const useSub = () => {
    if (btnSubref.current) {
      if (visibleSub) {
        btnSubref.current.innerHTML = "자막 활성화";
        setVisibleSub(false);
      } else {
        btnSubref.current.innerHTML = "자막 비활성화";
        setVisibleSub(true);
      }
    }
  };

  const useTrans = () => {
    if (btnTransref.current) {
      if (visibleTrans) {
        btnTransref.current.innerHTML = "번역 활성화";
        setVisibleTrans(false);
      } else {
        btnTransref.current.innerHTML = "번역 비활성화";
        setVisibleTrans(true);
      }
    }
  };
  React.useEffect(() => {
    if (prop.userInfo.isProfessor === "on") {
      start();
    } else {
      store
        .collection("Lecture")
        .doc(prop.lectureInfo.Name)
        .onSnapshot((snap) => {
          const data = snap.data();
          if (data !== undefined) {
            if (finalRef.current) {
              finalRef.current.innerHTML = data.tempSub;
            }
            if (translateRef.current) {
              translateRef.current.innerHTML = data.tempTrans;
            }
          }
        });
    }
    return () => {
      if (prop.userInfo.isProfessor === "on") {
        recognition.stop();
      }
    };
  }, []);
  return (
    // {visibleSub ? (
    //   <div className="result">
    //     <span className="final" ref={finalRef}></span>
    //   </div>
    // ) : null}
    // {visibleTrans ? (
    //   <div className="result">
    //     <span className="translate" ref={finalRef}></span>
    //   </div>
    // ) : null}
    // {/* 재호형!! 밑에 있는 게 진짜 번역 데이터 인데요 papago
    // 사용량 때문에 지금은 막아 둘께요
    // 위에 있는거랑 같은 형태로 출력되면 되니까
    // className='final' 이 translate라고 생각하고 하면 될 거같아요*/}
    // {/* {visibleTrans ? (
    //   <div>
    //     <span className="translate" ref={translateRef}></span>
    //   </div>
    // ) : null} */}

    <div style={{ textAlign: "center", position: "absolute" }}>
      <div style={{ position: "absolute", top: -20, width: "62vw" }}>
        <div
          className="result overflow-auto"
          style={{
            textAlign: "center",
            display: visibleSub ? "block" : "none",
          }}
        >
          {/* <div style={{ display: visibleSub ? "block" : "none" }}> */}
          <span
            className="final"
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
            }}
            ref={finalRef}
          ></span>
          {/* </div> */}
          {/* <div style={{ display: visibleTrans ? "block" : "none" }}>
            <span className="translate" ref={finalRef}></span>
          </div> */}
        </div>
      </div>
      <div
        className="content"
        style={{
          textAlign: "center",
          marginTop: 20,
          backgroundColor: "#eeeee4",
          height: "120px",
          paddingTop: "0px",
          marginLeft: -4,
          width: "61vw",
          position: "absolute",
          top: 0,
        }}
      >
        {isProf ? (
          //////////////////////////교수/////////////////////
          <div style={{ top: "600px" }}>
            <div
<<<<<<< HEAD
              className="subtitle_btn"
              style={{
                marginLeft: "20px",
                float: "left",
                width: "22%",
                marginTop: "28px",
              }}
            >
              <button
                className="btnSub "
                ref={btnSubref}
                onClick={useSub}
                style={{
                  width: "12vw",
                  height: "3vw",
                  backgroundColor: "gray",
                  boxShadow: "3px",
                  fontSize: "25px",
                  color: "white",
                  borderRadius: 15,
                  fontWeight: "bold",
                  border: "solid",
                  borderColor: "black",
                }}
              >
                <i
                  className="far fa-closed-captioning"
                  style={{ marginRight: "20px" }}
                ></i>
                자막 활성화
              </button>
            </div>
            <div
              className="translate_btn"
              style={{
                marginLeft: "20px",
                float: "left",
                width: "22%",
                marginTop: "28px",
              }}
            >
              <button
                className="btnTrans "
                ref={btnTransref}
                onClick={useTrans}
                style={{
                  width: "12vw",
                  height: "3vw",
                  fontSize: "25px",
                  borderRadius: 15,
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "gray",
                  border: "solid",
                  borderColor: "black",
                }}
              >
                <i
                  className="fas fa-sign-language"
                  style={{ marginRight: "20px" }}
                />
                번역 활성화
              </button>
            </div>

            <div
=======
>>>>>>> 2535f1b379bfa2613a8ec70ccb2d0502046d9ec4
              className="share_btn"
              style={{
                marginLeft: "20px",
                float: "left",
                width: "22%",
                marginTop: "28px",
              }}
            >
              <button
                className="btnShare "
                ref={btnShareRef}
                onClick={btnShareClick}
                style={{
                  width: "12vw",
                  height: "3vw",
                  fontSize: "25px",
                  borderRadius: 15,
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "gray",
                  border: "solid",
                  borderColor: "black",
                }}
              >
                <i
                  className="fas fa-share-square"
                  style={{ marginRight: "20px" }}
                />
                공유
              </button>
            </div>
            <div
              className="exit_btn"
              style={{
                marginLeft: "20px",
                float: "left",
                width: "22%",
                marginTop: "28px",
              }}
            >
              <button
                onClick={prop.onExit}
                style={{
                  width: "12vw",
                  height: "3vw",
                  fontSize: "25px",
                  borderRadius: 15,
                  backgroundColor: "#D65E2A",
                  color: "white",
                  fontWeight: "bold",
                  border: "solid",
                  borderColor: "black",
                }}
              >
                나가기
              </button>
            </div>
          </div>
        ) : (
          ///////////////////////////////////학생////////////////////////////////////
          ///////////////////////////////////학생////////////////////////////////////
          <div style={{ position: "relative", top: "0px" }}>
            <div
              className="subtitle_btn"
              style={{
                marginLeft: "20px",
                float: "left",
                width: "33%",
                marginTop: "28px",
              }}
            >
              <button
                className="btnSub "
                ref={btnSubref}
                onClick={useSub}
                style={{
                  width: "12vw",
                  height: "3vw",
                  backgroundColor: "gray",
                  boxShadow: "3px",
                  fontSize: "25px",
                  color: "white",
                  borderRadius: 15,
                  fontWeight: "bold",
                  border: "solid",
                  borderColor: "black",
                }}
              >
                <i
                  className="far fa-closed-captioning"
                  style={{ marginRight: "20px" }}
                ></i>
                자막 활성화
              </button>
            </div>
            <div
              className="translate_btn"
              style={{
                marginLeft: "20px",
                float: "left",
                width: "22%",
                marginTop: "28px",
              }}
            >
              <button
                className="btnTrans "
                ref={btnTransref}
                onClick={useTrans}
                style={{
                  width: "12vw",
                  height: "3vw",
                  fontSize: "25px",
                  borderRadius: 15,
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "gray",
                  border: "solid",
                  borderColor: "black",
                }}
              >
                <i
                  className="fas fa-sign-language"
                  style={{ marginRight: "20px" }}
                />
                번역 활성화
              </button>
            </div>

            <div
              className="exit_btn"
              style={{
                marginLeft: "20px",
                float: "left",
                width: "33%",
                marginTop: "28px",
              }}
            >
              <button
                onClick={prop.onExit}
                style={{
                  width: "12vw",
                  height: "3vw",
                  fontSize: "25px",
                  borderRadius: 15,
                  backgroundColor: "#D65E2A",
                  color: "white",
                  fontWeight: "bold",
                  border: "solid",
                  borderColor: "black",
                }}
              >
                나가기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subtitle;
