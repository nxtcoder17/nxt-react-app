import React from 'react';
import { Box } from '@material-ui/core';

export const FlexBox = ({ row, wrap, align, justify, ...props }) => (
  <>
    <Box
      display="flex"
      flexDirection={row ? 'row' : 'column'}
      {...(row ? { flex: 1 } : {})}
      alignItems={align}
      justifyContent={justify}
      flexWrap={wrap ? 'wrap' : 'nowrap'}
      {...props}
    >
      {props.children}
    </Box>
  </>
);
