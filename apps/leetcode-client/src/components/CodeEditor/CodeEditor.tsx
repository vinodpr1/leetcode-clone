"use client";
import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { activeOutputModal } from "@/store/toggle";
import { useRecoilState } from "recoil";
import { CodeXml } from "lucide-react";
import EditorNav from "./EditorNav";

const CodeEditor = ({
  openIde,
  theme,
  setTheme,
  language,
  setLanguage,
  code,
  setCode
}: {
  openIde?: boolean
  theme: any;
  setTheme: any;
  setLanguage: any;
  language: any;
  code: any;
  setCode: any
}) => {
  function handleEditorChange(value: any, event: any) {
    setCode(value);
  }

  function handleEditorDidMount(editor: any, monaco: any) {
    // console.log("#",editor, monaco);
    editor.updateOptions({
      fontSize: "16px",
      mouseWheelZoom: true,
    });
  }

  function handleEditorWillMount(monaco: any) {
    // console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers: any) {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  const [isOutputModal, setIsOutputModal] = useRecoilState(activeOutputModal);

  return (
    <div className="h-full">
      <div className="px-4 rounded py-1 text-sm bg-[rgb(49,48,48)]">
        <EditorNav
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={setTheme}
          code={code}
        />
      </div>
      <Editor
        height={isOutputModal && !openIde ? "63vh" : "92vh"}
        defaultLanguage={language.value}
        language={language.value}
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
