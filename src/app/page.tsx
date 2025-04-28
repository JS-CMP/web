'use client';

import Header from "../components/Header";
import Hero from "../components/Hero";
import Main_Tuto from "../components/Main_Tuto";
import CodeEditor from "../components/CodeEditor";
import { useState } from "react";
import BottomPage from "../components/BottomPage";

export default function Home() {
  const [code, setCode] = useState("// Commence à coder ici...");
  return (
    <div>
    <Header/>
    <Hero/>
    <Main_Tuto/>
    {/* <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Éditeur de code</h1>
      <CodeEditor
        value={code}
        onChange={(newCode) => setCode(newCode || "")}
        language="javascript"
      />
    </div> */}
    <BottomPage />
    </div>
  );
}
