import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogicon from './write-svgrepo-com.svg';
import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";
import './App.css'
import WebHeader from './WebHeader';

function BlogSection() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    // Fetch the data using useEffect
    fetch(`https://notion-api.splitbee.io/v1/table/a71f3fa54e2e41139c903522cf9b8f0e`)
      .then((res) => res.json())
      .then((data) => setBlocks(data));
  }, []);

  const getLatestPublishedComponents = () => {
    return blocks.filter((item) => item.published).sort((a, b) => new Date(b.Date) - new Date(a.Date));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const latestPublishedComponents = blocks !== null ? getLatestPublishedComponents() : [];

  return (    <div className='App'>
  <WebHeader />
  <div className='section-container'>
    <div className='content'>
      <h3 className='section-title'>
        Latest Posts
      </h3>

      {latestPublishedComponents.length > 0 ? (
        latestPublishedComponents.map((item, index) => (
          <div className={`item-link ${index === latestPublishedComponents.length - 1 ? 'more-posts' : ''}`} key={item.id}>
            <Link className={`blog-item ${index === latestPublishedComponents.length - 1 ? 'more-posts' : ''}`} key={item.id} to={`/all-posts/${item.id}`}>
              <p>{item.Name}</p>
              <p className='date'>{formatDate(item.Date)}</p>
            </Link>
          </div>
        ))
      ) : (
          <div>No published components found.</div>
        )}
    </div>
  </div>
</div>
);
}

export default BlogSection;
