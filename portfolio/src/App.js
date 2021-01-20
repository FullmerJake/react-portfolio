import React, { Component } from 'react';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Resume from '../src/components/Resume';
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    )
  };

}

export default App;
