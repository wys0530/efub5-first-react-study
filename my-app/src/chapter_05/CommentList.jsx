import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "우윤수",
    comment: "안녕하세요, 우윤수입니다. 하하핫",
  },
  {
    name: "유재석",
    comment: "오늘 놀뭐에 이대 산타비가 나왔어요. ",
  },
  {
    name: "우윤수2",
    comment: "저는 요즘 임시완에 빠졌어요..... ",
  },
  {
    name: "wys0530",
    comment: "그래서 드라마 아무것도 하고 싶지 않아를 보고 있어요 ㅎㅎ",
  },
  {
    name: "퍼비",
    comment: "이펍 최고입니다 하트하트",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
