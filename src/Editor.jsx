import { useEffect } from 'react';
import { func } from 'prop-types';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  useSandpack,
} from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';

function Editor({ onCompiled }) {
  const { listen, sandpack } = useSandpack();

  useEffect(() => {
    const stopListening = listen((message) => {
      if (message.type === 'state') {
        if (onCompiled) {
          onCompiled(sandpack.files, message.state);
        }
      }
    });

    return () => {
      stopListening();
    };
  }, []);

  return (
    <SandpackLayout theme="dark">
      <SandpackCodeEditor />
      <SandpackPreview showOpenInCodeSandbox={false} showNavigator />
    </SandpackLayout>
  );
}

Editor.propTypes = {
  onCompiled: func,
};

export default Editor;
