import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => (
<div className="About">
    <div className="container">
       <nav>
    <ul className="nav">
    <a className="nav-link active" href="./login.html">Login </a>
        <li className="nav-item">
            <a className="nav-link active" href="./index.html">Hone</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" href="./login.html">Login </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="./about.html">About</a>
        </li>
        
        <li className="nav-item">
            <a className="nav-link" href="./contact.html">Contact</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
        </li>
    </ul>
    </nav>
  
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Fluid jumbotron</h1>
    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>



<div className="card-deck">
  <div className="card">
   <div className="card-img-top card-img"></div>

    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
   <div className="card-img-top card-img"></div>

    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
   <div className="card-img-top card-img"></div>

    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
</div>
);

export default About;
