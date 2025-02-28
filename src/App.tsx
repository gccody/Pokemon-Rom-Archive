import React, { useState } from 'react';
import './App.css';
import QRCodeDisplay from './components/QRCodeDisplay.tsx';
import RomList from './components/RomList.tsx';

export default function App() {
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");

  return (
    <div className="app">
      <h1>Pokémon Rom Hack 3ds Archive</h1>
      <div className="content">
        <RomList onSelect={setSelectedUrl} setTitle={setTitle} />
        <QRCodeDisplay url={selectedUrl} title={title} />
      </div>
    </div>
  );
}