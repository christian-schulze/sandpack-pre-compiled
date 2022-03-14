import { useState } from 'react';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';
import styled from '@emotion/styled';

import Editor from './Editor';
import Viewer from './Viewer';

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
`;

function App() {
  const [mode, setMode] = useState('edit');
  const [files, setFiles] = useState({});
  const [state, setState] = useState({});

  const handleChangeMode = (event) => {
    setMode(event.target.value);
  };

  const handleEditorCompiled = (updatedFiles, updatedState) => {
    console.log('handleEditorCompiled', updatedState);
    setFiles(updatedFiles);
    setState(updatedState);
  };

  return (
    <>
      <Header>
        <b>MODE:</b>&nbsp; edit
        <input
          checked={mode === 'edit'}
          name="mode"
          onChange={handleChangeMode}
          type="radio"
          value="edit"
        />
        &nbsp;view
        <input
          checked={mode === 'view'}
          name="mode"
          onChange={handleChangeMode}
          type="radio"
          value="view"
        />
      </Header>
      <SandpackProvider
        alwaysIncludeTranspiledSource
        bundlerURL={import.meta.env.VITE_BUNDLER_URL}
        template="vanilla"
      >
        {mode === 'edit' && <Editor onCompiled={handleEditorCompiled} />}
        {mode === 'view' && <Viewer files={files} state={state} />}
      </SandpackProvider>
    </>
  );
}

export default App;
