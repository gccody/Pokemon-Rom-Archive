import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface RomHack {
  title: string;
  url: string;
}

interface RomListProps {
  onSelect: (url: string) => void;
  setTitle: (title: string) => void
}

export default function RomList({ onSelect, setTitle }: RomListProps) {
  const [roms, setRoms] = useState<RomHack[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setRoms(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="rom-list">
      {roms.map(rom => (
        <div
          key={rom.url}
          className="rom-item"
          onClick={() => { onSelect(rom.url); setTitle(rom.title) }}
        >
          {rom.title}
        </div>
      ))}
    </div>
  );
}