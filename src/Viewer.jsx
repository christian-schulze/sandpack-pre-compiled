import { useEffect, useRef } from 'react';
import { object } from 'prop-types';
import { SandpackClient } from '@codesandbox/sandpack-client';
import styled from '@emotion/styled';

const IFrame = styled.iframe`
  height: 100%;
  width: 100%;
`;

function Viewer({ files, state }) {
  const iFrameRef = useRef(null);
  const sandpackClientRef = useRef(null);

  useEffect(() => {
    sandpackClientRef.current = new SandpackClient(
      iFrameRef.current,
      {
        entry: state.entry,
        dependencies: state.configurations.package.parsed.dependencies,
        files,
        transpiledModules: state.transpiledModules,
      },
      {
        bundlerURL: import.meta.env.VITE_BUNDLER_URL,
        showOpenInCodeSandbox: false,
        showErrorScreen: false,
        showLoadingScreen: false,
        usePreTranspiledModules: true,
      }
    );
  }, []);

  return <IFrame ref={iFrameRef} />;
}

Viewer.propTypes = {
  files: object.isRequired,
  state: object.isRequired,
};

export default Viewer;
