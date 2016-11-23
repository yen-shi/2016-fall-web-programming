import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PDF from './js/PDF.jsx';
import Sidebar from './js/Sidebar.jsx';
import './css/index.css';

const PDFLists = {
  sec1: [
    'static/pdf/test1.pdf',
    'static/pdf/test2.pdf',
  ],
  sec2: [
    'static/pdf/test3.pdf',
  ],
  sec3: [
    'static/pdf/test4.pdf',
  ],    
};

class MainApp extends Component {
  constructor() {
    super();
    this.state = {
      curPDF: 'static/pdf/test1.pdf',
    };
  }

  componentDidMount() {
    const socket = io();
    console.log('socket is running !');
  }

  render() {
    return (
      <div className="main-app">
        <h1 className="header"> PDF test </h1>
        <Sidebar PDFLists={PDFLists} />
        <PDF destination="static/pdf/test1.pdf" />
      </div>
    );
  }
}

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);
