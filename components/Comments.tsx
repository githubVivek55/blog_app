import moment from "moment";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { getComments } from "../services";
import parse from "html-react-parser";

type Comment = {
  name: string;
  createdAt: string;
  comment: string;
};

const Comments = ({ slug }: { slug: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, []);
  return (
    <div>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
