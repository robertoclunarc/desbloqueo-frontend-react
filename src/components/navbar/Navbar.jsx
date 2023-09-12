import {
  AppBar,
  Toolbar,
  styled,
  IconButton,
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
}
  from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import { PATHS } from '../../shared/constants/Constants';
import logo from '../../shared/image/LogoTransparente.png';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const drawer = (
    <Box sx={{ backgroundColor: '#224776', height: '100vh' }}>
      <List>
        {
          PATHS.map((item) => (
            <ListItem key={item.name}>
              <ListItemButton sx={{ textAlign: 'center', color: 'white' }}>
                <ListItemText
                  primary={item.name}
                  onClick={() => {
                    navigate(item.path);
                    handleDrawerToggle();
                  }}
                >
                  hola
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
      <Divider />
      <ListItem>
        <ListItemButton sx={{
          textAlign: 'center', backgroundColor: '#E1A73E', borderRadius: '20px', color: '#224776',
        }}
        >
          <ListItemText
            onClick={() => {
              navigate('/desbloqueos');
              handleDrawerToggle();
            }}
          >
            Desbloquea mi cel ya
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (
    <Box sx={{ marginBottom: { xs: '40vh', sm: '30vh', md: '20vh' } }}>
      <AppBar>
        <StyledToolbar>
          <IconButton color="otherColor" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleDrawerToggle}>
            <MenuIcon> </MenuIcon>
          </IconButton>
          <Box width={{ xs: '90%', sm: '20%' }} sx={{ height: '100%', overflow: 'visible' }}>
            <Box
              component="img"
              src={logo}
              marginTop="2vh"
              sx={{
                width: '100%', height: '100%', objectFit: 'cover', marginX: 'auto', marginY: 'auto',
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {
              PATHS.map((item) => (
                <Button
                  key={item.name}
                  color="otherColor"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {item.name}
                </Button>
              ))
            }
          </Box>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              navigate('/desbloqueos');
            }}
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#224776' }}
          >
            ¡Desbloquea mi cel ya!
          </Button>
        </StyledToolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
