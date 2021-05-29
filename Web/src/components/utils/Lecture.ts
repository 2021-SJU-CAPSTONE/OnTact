import { store } from "../firebase";

export const getLectureInfo = async (lectureId: string) => {
  const lectureInfo = await store.collection("Lecture").doc(lectureId).get();
  return lectureInfo.data();
};
export const getAttendanceByEducatee = async (lectureId: string, round: number) => {
  const attendenceInfo = await store
    .collection(`Lecture/${lectureId}/${round}회차`)
    .doc("AttendanceByEducatee")
    .get();

  return attendenceInfo.data();
};
