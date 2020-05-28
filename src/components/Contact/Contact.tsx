import React from 'react';
import styles from './Contact.module.scss';

const Contact: React.FC = () => (
  <div className="Contact">
    <div className="container">
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

      <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Fluid jumbotron</h1>
      <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
    </div>

    <form>


    <div className="form-group">
      <label >Example textarea</label>
      <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
</div>

);

export default Contact;
