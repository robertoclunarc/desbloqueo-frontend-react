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
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import { PATHS } from '../../shared/constants/Constants';
import logo from '../../shared/image/LogoTransparente.png';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  height: '100px',
});

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const drawer = (
    <Box sx={{ backgroundColor: '#224776', height: '100vh' }}>
      <Toolbar>
        {' '}
        <Box
          component="img"
          src={logo}
          sx={{
            margin: 'auto',
            width: '80%',
            height: '100px',
            objectFit: 'cover',
          }}
        />
      </Toolbar>
      <Divider />
      <List>
        {PATHS.map((item) => (
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
        ))}
      </List>
      <Divider />
      <ListItem>
        <ListItemButton
          sx={{
            textAlign: 'center',
            backgroundColor: '#E1A73E',
            borderRadius: '20px',
            color: '#224776',
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
    <>
      <AppBar>
        <StyledToolbar>
          <IconButton
            color="otherColor"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon> </MenuIcon>
          </IconButton>
          <Box
            width={{
              xs: '200px',
              sm: '20%',
              md: '20%',
              lg: '18%',
              xl: '15%',
            }}
            sx={{
              height: '100%',
              overflow: 'hidden',
              paddingBottom: {
                xs: '26px',
                sm: '26px',
                md: '30px',
                lg: '40px',
                xl: '45px',
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={logo}
              sx={{
                paddingTop: '2em',
                width: '70%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {PATHS.map((item) => (
              <Button
                key={item.name}
                color="otherColor"
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  fontSize: {
                    xs: 'none',
                    sm: '10px',
                    md: '12px',
                    lg: '15px',
                    xl: '15px',
                  },
                  margin: '2px',
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              navigate('/desbloqueos');
            }}
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
              color: '#224776',
            }}
          >
            ¡Libera tu cel ya!
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
    </>
  );
}

export default Navbar;
