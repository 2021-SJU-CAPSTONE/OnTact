import React from "react";
import { KotoEn } from "./papago.js";
import { store } from "../../../firebase";

const Subtitle = () => {
  const { webkitSpeechRecognition } = window as any;

  const recognition = new webkitSpeechRecognition();
  const language = "ko-KR";
  const btnMicref = React.useRef<HTMLButtonElement>(null);
  const final_spanref = React.useRef<HTMLSpanElement>(null);
  const interim_spanref = React.useRef<HTMLSpanElement>(null);
  const papago_spanref = React.useRef<HTMLSpanElement>(null);
  const lectureId = "Sample";

  const Ref = store.collection(`Lecture/${lectureId}/Subtitle`).doc("caption");

  const FIRST_CHAR = /\S/;
  const TWO_LINE = /\n\n/g;
  const ONE_LINE = /\n/g;

  let isRecognizing = false;
  let ignoreEndProcess = false;
  let finalTranscript = "";
  let firstText = "";
  let secondText = "";

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
    if (btnMicref.current) {
      btnMicref.current.className = "on";
    }

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

    // DO end process
    if (btnMicref.current) {
      btnMicref.current.className = "off";
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
    let fireTime = 0;

    if (typeof event.results === "undefined") {
      recognition.onend = null;
      recognition.stop();
      return;
    }

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const transcript = event.results[i][0].transcript;

      if (event.results[i].isFinal) {
        finalTranscript += transcript + "\n";
        firstText = secondText;
        secondText = transcript;
        if (firstText === "" && secondText !== "") {
          firstText = secondText;
          secondText = "";
        }
        fireTime = curTime;
        curTime = 0;
      } else {
        interimTranscript += transcript;
        if (curTime === 0) {
          curTime = Math.round((event.timeStamp - startTime) / 1000);
        }
      }
    }

    finalTranscript = capitalize(finalTranscript);
    if (
      final_spanref.current &&
      interim_spanref.current &&
      papago_spanref.current
    ) {
      final_spanref.current.innerHTML = linebreak(
        firstText + "\n" + secondText
      );
      interim_spanref.current.innerHTML = linebreak(interimTranscript);
      KotoEn(final_spanref.current.innerHTML).then((resultText) => {
        //console.log("papago " + resultText);

        if (papago_spanref.current) {
          papago_spanref.current.innerHTML = resultText;
        }
      });
      if (fireTime !== 0) {
        Ref.set(
          {
            [fireTime]: linebreak(firstText),
          },
          { merge: true }
        );
        fireTime = 0;
      }
    }
    // all_spanref.current.innerHTML = linebreak(finalTranscript);

    //console.log("finalTranscript", finalTranscript);
    //console.log("interimTranscript", interimTranscript);
  };

  /**
   * 음성 인식 에러 처리
   */
  recognition.onerror = function (event) {
    console.log("onerror", event);

    if (event.error.match(/no-speech|audio-capture|not-allowed/)) {
      ignoreEndProcess = true;
    }
    if (btnMicref.current) {
      btnMicref.current.className = "off";
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
   * 첫문자를 대문자로 변환
   * @param {string} s
   */
  const capitalize = (s) => {
    return s.replace(FIRST_CHAR, (m) => {
      return m.toUpperCase();
    });
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
    if (
      final_spanref.current &&
      interim_spanref.current &&
      papago_spanref.current
    ) {
      final_spanref.current.innerHTML = "";
      interim_spanref.current.innerHTML = "";
      papago_spanref.current.innerHTML = "";
    }
    // all_spanref.current.innerHTML = "";
  };

  return (
    <div className="content">
      <div className="result">
        <span className="final" ref={final_spanref}></span>
        <span className="interim" ref={interim_spanref}></span>
      </div>
      <div className="trans">
        <span className="papago" ref={papago_spanref}></span>
      </div>
      <button className="btn-mic" ref={btnMicref} onClick={start}>
        마이크<span></span>
      </button>
    </div>
  );
};

export default Subtitle;
