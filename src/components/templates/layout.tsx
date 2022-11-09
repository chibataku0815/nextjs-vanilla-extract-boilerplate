import React from 'react';
import { Box } from '../Box';
import Meta from '../Meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Box id="app" paddingBottom="xxxlarge" marginBottom="xxxlarge">
        {children}
      </Box>
    </>
  );
};

export default Layout;
