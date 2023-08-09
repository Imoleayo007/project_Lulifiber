import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} text={<p>&#10133; Landline to landline call all over Nigeria <br /> &#10133;Up to 27 TV channels <br /> &#9992; 100% OPTICAL FIBER​ <br /> &#128246; 5G WiFi Included <br /> &#9733; Premium Support <br /> &#9881; Installation fee on request </p>} />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} text={<p>&#9992; 100% OPTICAL FIBER​ <br /> &#128246; 5G WiFi Included <br /> &#9733; Premium Support <br /> &#9881; Installation fee on request </p>} />
        <Article imgUrl={blog03} text={<p>&#9992; 100% OPTICAL FIBER​ <br /> &#128246; 5G WiFi Included <br /> &#9733; Premium Support <br /> &#9881; Installation fee on request </p>} />
        <Article imgUrl={blog04} text={<p>&#9992; 100% OPTICAL FIBER​ <br /> &#128246; 5G WiFi Included <br /> &#9733; Premium Support <br /> &#9881; Installation fee on request </p>} />
        <Article imgUrl={blog05} text={<p>&#10133; Landline to landline call all over Nigeria <br /> &#10133;Up to 27 TV channels <br /> &#9992; 100% OPTICAL FIBER​ <br /> &#128246; 5G WiFi Included <br /> &#9733; Premium Support <br /> &#9881; Installation fee on request </p>} />
      </div>
    </div>
  </div>
);

export default Blog;
