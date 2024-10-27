import React, { useEffect, useState } from "react";
import CommentArea from "./CommentArea";
import { addComment, fetchComments } from "@/firebase/crud";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState("");
  const [content, setContent] = useState("");

  const loadComments = async () => {
    const commentsData = await fetchComments(postId);
    setComments(commentsData);
  };

  useEffect(() => {
    loadComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addComment(postId, userName, content);
    setUserName("");
    setContent("");
    loadComments(); // reload comments after submission
  };

  return (
    <div>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <textarea
          placeholder="Your Comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit Comment</button>
      </form>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>
              <strong>{comment.userName}</strong>: {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="max-w-screen-md mx-auto my-12">
      <h6 className="text-base tracking-tight italic mb-4 font-semibold">
        Leave a comment
      </h6>
      <textarea
        name="commentForPost"
        id="commentForPost"
        rows={4}
        className="bg-white bg-opacity-10 w-full outline-none rounded-lg p-4   text-sm placeholder-white placeholder-opacity-20"
        placeholder="Type here something..."
      ></textarea>
      <button className="bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-4 flex ms-auto mt-1 text-sm py-2 rounded-lg font-bold  transition-all duration-200">
        Send
      </button>
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
