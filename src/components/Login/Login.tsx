import React from 'react';
import styles from './Login.module.scss';

const Login: React.FC = () => (
  <div className="Login">
  
  <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Login </h1>
    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>

    <nav>
    <ul className="nav">
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

    <p>Loggin form will loading soon...</p>
</div>
);

export default Login;
