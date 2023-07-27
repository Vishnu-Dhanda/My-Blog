import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-notion/src/styles.css';
import { NotionRenderer } from 'react-notion';
import WebHeader from './WebHeader';
import './projectsection.css';

function ProjectPage() {
  const { id } = useParams();
  const cleanedId = id.replace(/-/g, '');
  const [blogPost, setBlogPost] = useState(null);
  const [postName, setPostName] = useState(null);
  const [postTags, setPostTags] = useState(null);
  const [postSkills, setPostSkills] = useState(null);

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
          setPostTags(item.Tags);
          setPostSkills(item.Skills);
        }
      });
  }, [id]);

  if (!blogPost || !postName) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <WebHeader />
      <h2>{postName}</h2>
      <div className="tags-container">
        {postTags && postTags.map((tag) => (
          <div
            key={tag}
            className="tag-item"
            style={{ backgroundColor: getRandomColor() }}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="skills-container">
        Skills: 
        {postSkills && postSkills.map((skill) => (
          <div
            key={skill}
            className="skill-item"
            style={{ backgroundColor: getRandomColor() }}
          >
            {skill}
          </div>
        ))}
      </div>
      <br/>
      <NotionRenderer blockMap={blogPost} />
    </div>
  );
}

function getRandomColor() {
    const colors = ['#e1f2f8', '#f7dcda', '#eff3d6', '#ebc8e0', '#fee6f0', '#fccff6', '#ddfff0', '#dce4fd', '#e7cdd6', '#d9cdfe', '#c8d0fe', '#e5d6d8', '#faf7dd', '#ced2e5', '#dbf9cd', '#ebe3d8', '#e5f5dd', '#d4d3d4', '#cde8f4', '#e8cbf7', '#f4ffea', '#e6f4d2', '#fededa', '#feedca', '#cdcad5', '#d4d9fe', '#ecd0f2', '#f4fcea', '#d1cbc9', '#e1e6e2', '#e5d3d3', '#f5eff4', '#fbf0d2', '#d0eaf2', '#f4ddfa', '#e7d3f7', '#def5ec', '#fdefec', '#c9e4f6', '#dfd2f2', '#c8fedb', '#dae7f5', '#d2f4f9', '#cee9c8', '#d5d5d0', '#ffdbfb', '#d8cdeb', '#f4d2ce', '#f3fbd5', '#ebf8fa', '#f2f9f9', '#fdfcd8', '#dbd6ca', '#edddfb', '#fae9d7', '#dfd2c9', '#d6dde3', '#eaedeb', '#e4ceec', '#fcdad5', '#dfd6e5', '#ccccfb', '#e9e4e8', '#ccd6ed', '#d1f9ca', '#e9f5d2', '#f8fee1', '#f8f0d9', '#caebdd', '#fccad9', '#d6ced4', '#e6f5d5', '#c8d3d5', '#fbd0e0', '#ddd8df', '#e2cef8', '#f3f3f6', '#faf0d9', '#dbeaeb', '#d9e8fe', '#d6f5dd', '#d0cde3', '#f3dccf', '#d3e6f3', '#ddeadb', '#f9e5da', '#e6d3f0', '#cccbf1', '#f7ecca', '#fbdbf8', '#ceffd4', '#e1d8c9', '#fbdbcb', '#fbfcd1', '#daf8ef', '#fcfcd0', '#f6fde3', '#d3f8fa', '#d0cdc9', '#fcd5e4', '#fefff8', '#ccd3cb', '#f8f1fd', '#f2fceb', '#defef4', '#dee7f4', '#d8f6f7', '#e1d0d5', '#fce6c8', '#c9e5e1', '#fae2db', '#e8e4ce', '#f0e1f4', '#f5ebdc', '#f1ffce', '#f1f4d5', '#d6deca', '#ffd8d6', '#d5dece', '#c8d0ce', '#d9dcd4', '#ccebee', '#f7cbd6', '#fdf8db', '#f0f7e2', '#f8ffd6', '#e0fbf6', '#f1e1e1', '#f2d2dc', '#f0f1ea', '#d8e7fa', '#eeddf7', '#cdf5d1', '#c9fffe', '#e0f4fd', '#d0c8f4', '#daf4dc', '#cad9d4', '#dbfbe5', '#ffe2cc', '#ece4f8', '#e8e3fa', '#f5ded2', '#cfe0e6', '#e1ede2', '#f9dcf6', '#eedac8', '#ead0d6', '#f8ddce', '#f9fac8', '#d3ebe8', '#cfe8e3', '#dfdbcc', '#f6ccd4', '#ced2ce', '#eaeae8', '#edebee', '#cad1d6', '#f1fada', '#fde4fc', '#ffe6dd', '#c9d5d5', '#ead4fb', '#d5f9dd', '#d5d4e2', '#d0e0df', '#cce2e1', '#dec8c9', '#fcf8e1', '#d8ead5', '#e2faca', '#ddf5ca', '#eae4d7', '#f5f8fd', '#f3e4f6', '#d6d6d5', '#e6cadc', '#dcd6f5', '#ceebcf', '#fbe2ca', '#f2e6ef', '#e2d3fa', '#dfcef7', '#d1edf8', '#d4d1ed', '#ccddf1', '#d9d5e9', '#d1d5d9', '#cff7f9', '#d1dae8', '#e3fefb', '#f5fecc', '#eff1cb', '#fecff0', '#f5f9f0', '#cdccd1', '#d9f9ec', '#e8eaed', '#efcbd3', '#eaffe0'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
export default ProjectPage;
