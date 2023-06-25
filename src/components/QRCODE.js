import React from 'react';
import { Input, QRCode, Space } from 'antd';

const Qrcode = () => {
  const [text, setText] = React.useState('http://167.172.190.219/');

  return (
    <Space direction="vertical" align="center">
      <QRCode value={text || '-'} size={300} />
      <Input placeholder="-" maxLength={60} value={text} onChange={(e) => setText(e.target.value)} />
    </Space>
  );
};

export default Qrcode;
