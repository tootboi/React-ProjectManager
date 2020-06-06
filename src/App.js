import React from 'react';
import ProjectList from './components/ProjectList';
import ProjectContextProvider from './contexts/ProjectContext';

function App() {
  return (
      <div className="App">
        <ProjectContextProvider>
          <ProjectList/>
        </ProjectContextProvider>
      </div>
  );
}

export default App;