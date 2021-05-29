import React from "react";
import { KotoEn } from "./papago.js";
import Recording from "../Record/Recording";
import * as type from "../../../type";
// import { store } from "../../../firebase";
type Prop = {
  changeIsShare: (value?: boolean) => boolean;
  userInfo: type.UserInfo;
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
  // const lectureId = "Sample";

  // const Ref = store.collection(`Lecture/${lectureId}/Subtitle`).doc("caption");

  // const FIRST_CHAR = /\S/;
  const TWO_LINE = /\n\n/g;
  const ONE_LINE = /\n/g;

  let isRecognizing = false;
  let ignoreEndProcess = false;
  let finalTranscript = "";
  let firstText = "";
  let secondText = "";
  let tempText = "";

  let startTime = 0;
  let curTime = 0;

  recognition.continuous = true;
  recognition.interimResults = true;

  /**
   * 음성 인식 시작 처리
   */
  recognition.onstart = function () {
    //console.log("onstart", arguments);
    isRecognizing = true;

    startTime = arguments[0].timeStamp;
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
    // let fireTime = 0;

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
        // fireTime = curTime;
        curTime = 0;
      } else {
        interimTranscript += transcript;
        firstText = tempText;
        secondText = interimTranscript;
        if (curTime === 0) {
          curTime = Math.round((event.timeStamp - startTime) / 1000);
        }
      }
    }

    finalSub = linebreak(firstText + "\n" + secondText);
    if (finalRef.current) {
      finalRef.current.innerHTML = finalSub;
      // if (fireTime !== 0) {
      //   Ref.set(
      //     {
      //       [fireTime]: linebreak(firstText),
      //     },
      //     { merge: true }
      //   );
      //   fireTime = 0;
      // }
    }
    if (translateRef.current) {
      if (firstText !== "") {
        KotoEn(firstText).then((resultText) => {
          //console.log("papago " + resultText);
          if (translateRef.current) {
            translateRef.current.innerHTML = resultText;
          }
        });
      }
      KotoEn(secondText).then((resultText) => {
        //console.log("papago " + resultText);
        if (translateRef.current) {
          translateRef.current.innerHTML += "<br>" + resultText;
        }
      });
    }

    console.log("finalTranscript", finalTranscript);
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

  // /**
  //  * 첫문자를 대문자로 변환
  //  * @param {string} s
  //  */
  // const capitalize = (s) => {
  //   return s.replace(FIRST_CHAR, (m) => {
  //     return m.toUpperCase();
  //   });
  // };

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

  return (
    <div className="content" style={{ textAlign: "center" }}>
      <button
        className="btnMic btn-secondary"
        style={{ width: "8vw" }}
        onClick={start}
      >
        마이크
      </button>
      <button
        className="btnSub btn-info"
        ref={btnSubref}
        onClick={useSub}
        style={{ width: "8vw" }}
      >
        자막 활성화
      </button>
      <button
        className="btnTrans btn-success"
        ref={btnTransref}
        onClick={useTrans}
        style={{ width: "8vw" }}
      >
        번역 활성화
      </button>
      <button
        className="btnShare btn-primary"
        ref={btnShareRef}
        onClick={btnShareClick}
        style={{ width: "8vw" }}
      >
        공유
      </button>
      <Recording userInfo={prop.userInfo} />
      {visibleSub ? (
        <div className="result">
          <span className="final" ref={finalRef}></span>
          {visibleTrans ? (
            <div>
              <span className="translate" ref={translateRef}></span>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Subtitle;
