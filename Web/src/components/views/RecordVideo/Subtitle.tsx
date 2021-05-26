import React from "react";
import { store } from "../../firebase";

type Prop = {
  getTime: () => number;
};

const Subtitle = (prop: Prop) => {
  const lectureId = "Sample";
  const Ref = store.collection(`Lecture/${lectureId}/Subtitle`).doc("caption");
  const subtitle_spanref = React.useRef<HTMLSpanElement>(null);
  let data;

  if (data === undefined) {
    Ref.get()
      .then((doc) => {
        data = doc.data();
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }

  React.useEffect(() => {
    let curtime = 0;
    let interval = setInterval(() => {
      curtime = Math.round(prop.getTime());
      //console.log(curtime, data[curtime]);
      if (data !== undefined) {
        if (data[curtime] !== undefined) {
          if (subtitle_spanref.current) {
            subtitle_spanref.current.innerHTML = data[curtime];
          }
        }
      }
      // console.log(curtime);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="content">
      <span className="subtitle" ref={subtitle_spanref}></span>
    </div>
  );
};

export default Subtitle;
