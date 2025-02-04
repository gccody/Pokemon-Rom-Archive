import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize.ts';

interface QRCodeDisplayProps {
  url: string | null;
  title: string;
}

export default function QRCodeDisplay({ url, title }: QRCodeDisplayProps) {
  const { width } = useWindowSize();
  const qrSize = Math.min(256, (width || 800) * 0.6);
  if (!url) return null;

  return (
    <div className="qr-container">
      <h3>Scan this QR Code: {title}</h3>
      <div className='qr'>
        <QRCodeSVG
          value={url}
          size={qrSize}
          marginSize={4}
        />
      </div>
      <a href={url}><p className="url-display">{url}</p></a>
    </div>
  );
}