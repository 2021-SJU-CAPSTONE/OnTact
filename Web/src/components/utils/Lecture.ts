import { store } from "../firebase";
import * as type from "../type";

export const getLectureInfo = async (lectureId: string) => {
  const lectureInfo = await store.collection("Lecture").doc(lectureId).get();
  return lectureInfo.data() as type.LectureInfo;
};
export const getAttendanceByEducatee = async (lectureId: string) => {
  const attendanceInfo = await store
    .collection(`Lecture/${lectureId}/AttendanceByEducatee`)
    .get();

  return attendanceInfo;
};
