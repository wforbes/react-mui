import * as React from 'react';

import Box from '@mui/material/Box'

export default function ExamplePage() {
  return (
    <main>
		<Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
      		<h2>Example Page</h2>
		</Box>
    </main>
  );
}