"use client"

import React from 'react';
import "@/app/styles.css";
import { Editor } from '@/app/text-editor'
import { TypingAnimation } from '@/app/components/typing-animation';

export default function Home() {

  return (
    <div className="App">
      <TypingAnimation />

      <Editor />
    </div>
  )
}
