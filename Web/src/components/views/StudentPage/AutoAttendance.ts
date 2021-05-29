import { store } from "../../firebase";
import * as type from "../../type";
import { getLectureInfo } from "../../utils/Lecture";

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
  const lecInfo: type.LectureInfo = await getLectureInfo(lecture);
  const lecRef = store.collection(`Lecture/${lecture}/AttendanceByEducatee`).doc(studentId);

  lecRef.set(
    {
      [`${lecInfo.cnt}회차`]: Check(lecInfo.StartTime, lecInfo.AbsentTime, lecInfo.TardyTime),
    },
    { merge: true }
  );
};

export default AutoAttendance;
