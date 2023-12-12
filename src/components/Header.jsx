import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

function Header() {
  return (
    <header>
      <AppBar
        position="static"
        style={{
          background: '#2E3B55',
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <HowToVoteIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
              }}
              sx={{ flexGrow: 1 }}
            >
              BlockVote
            </Typography>
            <a
              href="https://o365joongbu-my.sharepoint.com/:p:/g/personal/yaejin02_21_jmail_ac_kr/EX1LyeRBGUpGgkINwM7EvewBtZrWAHZEMVqF-R-_5gv9kg?e=DjPwJ6"
              style={{ color: 'white' }}
            >
              Team Project PPT
            </a>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
