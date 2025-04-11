import React from "react";

const students = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

//student라는 배열로부터 학생 정보가 담긴 객체를 받아
// 학생들의 이름을 목록 형태로 출력하는 컴포넌트
//배열을 렌더링 하기 위해 map 함수를 사용함
//key가 꼭! 필요함!!
function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

/*

//포맷팅 된 문자열을 key로 사용할 수 있음 
function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}


//index 사용하여 만들 수 있음 
/*
function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}
 */

export default AttendanceBook;
