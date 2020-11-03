import React from 'react';
import Link from 'next/Link';

function Post({ alt, date, image, title, url }) {
  return (
    <div className="container">
      <Link href="/post/[id]" as={url}>
        <div className="contents">
          <div className="media">
            <img alt={alt} src={image} />
          </div>
          <div className="text">
            <h2>{title}</h2>
            <h4>{date}</h4>
          </div>
        </div>
      </Link>
      <style jsx>{`
        .container {
          margin: 16px;
          padding: 16px;
          width: 180px;
          border-radius: 4px;
          box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        .container img {
          transition: transform 0.6s;
        }

        .container:hover img {
          transform: scale(1.2);
        }

        .contents {
          display: flex;
          flex-direction: column;
        }

        h2 {
          color: #333;
        }

        h4 {
          color: #666;
        }

        .media {
          height: 150px;
          width: 100%;
          border-radius: 4px;
          overflow: hidden;
        }

        .media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}

export default Post;
