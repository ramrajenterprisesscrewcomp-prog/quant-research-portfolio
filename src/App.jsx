import React from 'react';
import Rail from './components/Rail';
import Masthead from './sections/Masthead';
import Capabilities from './sections/Capabilities';
import Study from './sections/Study';
import Sweep from './sections/Sweep';
import Engines from './sections/Engines';
import Gold from './sections/Gold';
import FnO from './sections/FnO';
import Nasdaq from './sections/Nasdaq';
import System from './sections/System';
import Execution from './sections/Execution';
import { Toolkit, Builds } from './sections/Toolkit';
import Archive from './sections/Archive';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="shell">
      <Rail />
      <div className="main">
        <Masthead />
        <Capabilities />
        <Study />
        <Sweep />
        <Engines />
        <Gold />
        <FnO />
        <Nasdaq />
        <System />
        <Execution />
        <Toolkit />
        <Builds />
        <Archive />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
}
