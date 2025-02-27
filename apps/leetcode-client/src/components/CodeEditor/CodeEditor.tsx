"use client";
import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({theme, language, code }: { theme: any; language: any, code:any }) => {
 
  function handleEditorChange(value: any, event: any) {
    // here is the current value
    console.log("Value", value);
    console.log("event", event);
  }

  function handleEditorDidMount(editor: any, monaco: any) {
    console.log(editor, monaco);
    editor.updateOptions({
      fontSize: "16px",
      mouseWheelZoom: true,
    });
  }

  function handleEditorWillMount(monaco: any) {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers: any) {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <div className='relative z-10 w-full h-[400px]'>
    <Editor
      height="90vh"
      defaultLanguage={language.value}
      defaultValue="// some comment"
      value={code}
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      beforeMount={handleEditorWillMount}
      onValidate={handleEditorValidation}
      theme={theme}
    />
   </div>
  );
};

export default CodeEditor;
