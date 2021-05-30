export type UserInfo = {
  Dept: string;
  Name: string;
  email: string;
  isProfessor: string;
  password: string;
  id: string;
  lectureList: string[];
};

export type LectureInfo = {
  Name: string;
  DayofWeek: string;
  StartTime: string;
  TardyTime: string;
  AbsentTime: string;
  cnt: number;
  profId: string;
};

export type Bookmark = {
  time: number;
  chat: string;
};

export type AttendanceInfo = {
  Name: string;
  id: string;
  Attendance: [
    {
      Round: number;
      Attend: string;
    }
  ];
};

export type StudentInfo = {
  Name: string;
  id: string;
} | null;
