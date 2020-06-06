import React from 'react';
import ProjectDetails from './components/ProjectDetails';
import ProjectContextProvider from './contexts/ProjectContext';

function App() {
  return (
      <div className="App">
        <ProjectContextProvider>
          <ProjectDetails/>
        </ProjectContextProvider>
      </div>
  );
}

export default App;