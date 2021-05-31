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

export const getAttendanceById = async (
  lectureId: string,
  studentId: string
) => {
  const attendanceInfo = await store
    .collection(`Lecture/${lectureId}/AttendanceByEducatee`)
    .doc(studentId)
    .get();

  return attendanceInfo.data() as type.AttendanceInfo;
};

export const clearChat = async (lectureId: string) => {
  (await store.collection(`Lecture/${lectureId}/Chatting`).get()).docs.map(
    (doc) => {
      store.collection(`Lecture/${lectureId}/Chatting`).doc(doc.id).delete();
    }
  );
};

export const addBookmark = (
  lectureId: string,
  round: number,
  uid: string,
  time: number,
  chat: string
) => {
  const ref = store.collection(
    `Lecture/${lectureId}/Bookmark/${round}회차/${uid}`
  );
  ref.add({
    time: time,
    chat: chat,
  });
};

export const getBookmark = async (
  lectureId: string,
  round: number,
  uid: string
) => {
  const col = await store
    .collection(`Lecture/${lectureId}/Bookmark/${round}회차/${uid}`)
    .get();
  const data = col.docs.map((doc) => {
    return doc.data();
  });
  return data as type.Bookmark[];
};

export const removeBookmark = async (
  lectureName: string,
  round: number,
  uid: string,
  time: number
) => {
  const ref = store.collection(
    `Lecture/${lectureName}/Bookmark/${round}회차/${uid}`
  );
  const col = await store
    .collection(`Lecture/${lectureName}/Bookmark/${round}회차/${uid}`)
    .get();
  col.docs.map((doc) => {
    if (doc.data().time === time) {
      ref.doc(doc.id).delete();
    }
  });
};
export const getRecordPath = async (lectureId: string) => {
  const lectureInfo = await store
    .collection(`Lecture/${lectureId}/RecordedLecture`)
    .get();

  return lectureInfo;
};

export const stackSubtitle = async (
  lectureName: string,
  round: number,
  fireTime: number,
  text: string
) => {
  const ref = store
    .collection(`Lecture/${lectureName}/Subtitle`)
    .doc(`${round}회차`);
  ref.set(
    {
      [fireTime]: text,
    },
    { merge: true }
  );
};

export const stackTranslation = async (
  lectureName: string,
  round: number,
  fireTime: number,
  text: string
) => {
  const ref = store
    .collection(`Lecture/${lectureName}/Translation`)
    .doc(`${round}회차`);
  ref.set(
    {
      [fireTime]: text,
    },
    { merge: true }
  );
};
