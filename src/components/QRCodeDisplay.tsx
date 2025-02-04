import { QRCodeSVG } from 'qrcode.react';
import React from 'react';

interface QRCodeDisplayProps {
  url: string | null;
  title: string;
}

export default function QRCodeDisplay({ url, title }: QRCodeDisplayProps) {
  if (!url) return null;

  return (
    <div className="qr-container">
      <h3>Scan this QR Code: {title}</h3>
      <div className='qr'>
        <QRCodeSVG
          value={url}
          size={256}
          marginSize={4}
        />
      </div>
      <a href={url}><p className="url-display">{url}</p></a>
    </div>
  );
}