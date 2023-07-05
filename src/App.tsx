import { useState } from 'react';
import './App.css'
import { Editor } from '@monaco-editor/react'

function App() {
  const [editorOutput, setEditorOutput] = useState<string>();
  
  function loadConfigurations(monaco) {
    
  }

  const handleEditorDidMount = () => {
    emmetHTML(window.monaco);
    emmetCSS(window.monaco);
  };

  return (
    <>
      <div className='grid grid-rows-2'>
        <div>
          <Editor height='90vh' defaultLanguage='html' theme='vs-dark' value={editorOutput} onChange={setEditorOutput} beforeMount={loadConfigurations} onMount={handleEditorDidMount}/>
        </div>
        <div className='w-full h-full'>
          <pre>
            {editorOutput}
          </pre>
        </div>
      </div>    </>
  )
}

export default App
