import React from 'react';

import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <AppBar
        position="static"
        style={{
          background: '#2E3B55',
        }}
      >
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
              }}
              sx={{ flexGrow: 1 }}
            >
              중부대학교{' '}
            </Typography>
            <a href="https://www.joongbu.ac.kr/is/" style={{ color: 'white' }}>
              정보보호학과
            </a>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  );
}

export default Footer;
