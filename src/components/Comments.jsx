import React from "react";
import CommentArea from "./CommentArea";

const Comments = () => {
  return (
    <div className="max-w-screen-md mx-auto my-12">
      <h6 className="text-base tracking-tight italic mb-4 font-semibold">
        Leave a comment
      </h6>
      <textarea
        name="commentForPost"
        id="commentForPost"
        rows={4}
        className="bg-white bg-opacity-10 w-full outline-none rounded-lg p-2 text-sm placeholder-white placeholder-opacity-20"
        placeholder="Type here something..."
      ></textarea>
      <div className="text-sm my-6 flex flex-col gap-4">
        {dmummyComment.map((content) => (
          <CommentArea
            key={content.key}
            author={content.author}
            comment={content.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;

const dmummyComment = [
  {
    id: 1,
    author: "John Schtmitsmann",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nam quos! Omnis nisi corrupti vel aut dolorem eum praesentium quia quibusdam aspernatur voluptatum maiores alias adipisci impedit a incidunt, quo saepe quaerat, ut qui accusamus? Rerum minus vel necessitatibus hic.",
  },
  {
    id: 2,
    author: "Akash Sarki",
    comment: "Lorem ipsum dolor sit",
  },
  {
    id: 2,
    author: "Bijay Singh",
    comment:
      "Lorem ipsum dolor sitorem ipsum dolor sitorem ipsum dolor sitorem ipsum dolor sit",
  },
];
