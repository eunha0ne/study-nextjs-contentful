import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Post from '../components/post';

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENFUL_ACCESS_TOKEN
});

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries({ content_type: 'post' });

    if (entries) {
      return entries.items;
    }

    console.log(`Error getting Entries for ${contentType.name}`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }

    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>contentful Next.js</title>
        <link
          ref="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {posts.length !== 0
        ? posts.map((aPost) => (
            <Post
              alt={aPost.fields.alt}
              date={aPost.fields.date}
              key={aPost.fields.title}
              image={aPost.fields.image}
              title={aPost.fields.title}
              url={aPost.fields.url}
            />
          ))
        : null}
      <style global jsx>{`
        #__next {
          display: flex;
        }
      `}</style>
    </>
  );
}

export default HomePage;
