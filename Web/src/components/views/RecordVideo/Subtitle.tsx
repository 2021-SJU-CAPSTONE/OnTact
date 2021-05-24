import React from "react";
import { store } from "../../firebase";

const Subtitle = () => {
  const lectureId = "Sample";
  const Ref = store.collection(`Lecture/${lectureId}/Subtitle`).doc("caption");
  const subtitle_spanref = React.useRef<HTMLSpanElement>(null);
  let data;

  Ref.get()
    .then((doc) => {
      data = doc.data();
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });

  React.useEffect(() => {
    let curtime = 0;
    let interval = setInterval(() => {
      //console.log(curtime, data[curtime]);
      if (data !== undefined) {
        if (data[curtime] !== undefined) {
          if (subtitle_spanref.current) {
            subtitle_spanref.current.innerHTML = data[curtime];
          }
        }
      }
      curtime = curtime + 1;
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
