import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-3940256099942544"
      data-ad-slot="1234567890"

      data-ad-format="auto"
    />
  );
};

export default AdComponent;
