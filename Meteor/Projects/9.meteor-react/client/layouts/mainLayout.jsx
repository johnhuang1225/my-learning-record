import React from 'react';

export const MainLayout = ({navbar, content, footer}) => (
  <div>
    {navbar}
    <div className="container">
      {content}
    </div>
    {footer}
  </div>
);
