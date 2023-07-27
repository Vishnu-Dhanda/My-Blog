import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-notion/src/styles.css';
import { NotionRenderer } from 'react-notion';
import WebHeader from './WebHeader';
import './projectsection.css'
function BlogPage() {
  const { id } = useParams();
  const cleanedId = id.replace(/-/g, '');
  const [blogPost, setBlogPost] = useState(null);
  const [postName, setPostName] = useState(null);
  const [postDate, setPostDate] = useState(null);

  useEffect(() => {
    // Fetch the data using useEffect
    fetch(`https://notion-api.splitbee.io/v1/page/${cleanedId}`)
      .then((res) => res.json())
      .then((data) => setBlogPost(data));

    fetch(`https://notion-api.splitbee.io/v1/table/${cleanedId}`)
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((item) => item.id === id);
        if (item) {
          setPostName(item.Name);
          setPostDate(item.Date)
        }
      });
  }, [id]);

  if (!blogPost || !postName) {
    return <div>Loading...</div>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <div className='App'>
      <WebHeader />
      <h2>{postName}</h2>
      <p className='blog-post-date'><i>{formatDate(postDate)}</i></p>
      <NotionRenderer blockMap={blogPost} />
    </div>
  );
}

export default BlogPage;
