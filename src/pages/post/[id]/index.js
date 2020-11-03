import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <h1>{id}</h1>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
        }

        h1 {
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Post;
