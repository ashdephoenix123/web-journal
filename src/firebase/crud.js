import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";

// Add a comment
export const addComment = async (postId, userId, content) => {
  await addDoc(collection(db, "comments"), {
    postId,
    userId,
    content,
    createdAt: new Date(), // Using Date for the timestamp
  });
};

// Fetch comments for a specific post
export const fetchComments = async (postId) => {
  const commentsRef = collection(db, "comments");
  const q = query(
    commentsRef,
    where("postId", "==", postId),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  const comments = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return comments;
};
