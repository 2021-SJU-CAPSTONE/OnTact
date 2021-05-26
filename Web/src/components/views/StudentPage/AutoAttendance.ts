import { getUserInfo, getCurrentUserUid } from "../../hoc/authService";
import { store } from "../../firebase";
import * as type from "../../type";

const calTime = (t: string) => {
  let timeData = t.split(":");
  let time = Number(timeData[0]) * 60 + Number(timeData[1]);

  return time;
};

const Check = (st: string, at: string, tt: string) => {
  const startTime = calTime(st);
  const absentTime = calTime(at);
  const tardyTime = calTime(tt);
  const date = new Date();
  const curTime = date.getHours() * 60 + date.getMinutes();

  if (startTime < curTime) {
    if (curTime < tardyTime) {
      return "출석";
    } else if (curTime < absentTime) {
      return "지각";
    }
  }

  return "결석";
};

const AutoAttendance = async (lecture: string, studentId: string) => {
  const lecRef = await store.collection(`Lecture`).doc(lecture);
  const lecDoc = await lecRef.get();
  const lecData = lecDoc.data();
  const stuRef = await lecDoc.ref
    .collection(`AttendenceByEducatee`)
    .doc(studentId);

  if (lecData) {
    stuRef.set(
      {
        [`${lecData.cnt}회차`]: Check(
          lecData.startTime,
          lecData.absentTime,
          lecData.tardyTime
        ),
      },
      { merge: true }
    );
  }
};

export default AutoAttendance;
