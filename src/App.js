import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <body class="container">  
    <nav>
    <ul class="nav">
    <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
        </li>
    <li class="nav-item">
            <a class="nav-link active" href="./login.html">Login </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./about.html">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./contact.html">Contact</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
        </li>
    </ul>
    </nav>

    <div class="jumbotron jumbotron-fluid jumbo-background-img">
  <div class="container banner-box">
    <h1 class="display-4">Shoe Demo </h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
    </div>
    <div class="row">
  <div class="col-12 header-section">
    <span class="header-title"> Shoe Release</span>
  </div>
</div>
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-12 header-section">
    <span class="header-title"> Shoe product</span>
  </div>
</div>

<div class="card-deck">
  <div class="card">
  <div class="card-img-top card-img"></div>

    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
  <div class="card-img-top card-img"></div>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
  <div class="card-img-top card-img"></div>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</body>
  );
}

export default App;
