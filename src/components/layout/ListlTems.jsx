import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import MyLocationIcon from '@mui/icons-material/MyLocation';



import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Collapse, List, ListSubheader } from '@mui/material';





export function ListlTemsMain() {
  const navigate = useNavigate()
  return (
    <>
      <ListItemButton onClick={() => { navigate('/') }}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton onClick={() => { navigate('/transport') }}>
        <ListItemIcon>
          <EmojiTransportationIcon />
        </ListItemIcon>
        <ListItemText primary="Transporte" />
      </ListItemButton>

      <ListItemButton onClick={() => { navigate('/gastronomy') }}>
        <ListItemIcon>
          <RestaurantIcon />
        </ListItemIcon>
        <ListItemText primary="Gastronimia" />
      </ListItemButton>

      <ListItemButton onClick={() => { navigate('/lodge') }}>
        <ListItemIcon>
          <HotelIcon />
        </ListItemIcon>
        <ListItemText primary="Alojamiento" />
      </ListItemButton>

      <ListItemButton onClick={() => { navigate('/destination') }}>
        <ListItemIcon>
          <MyLocationIcon />
        </ListItemIcon>
        <ListItemText primary="Destinos" />
      </ListItemButton>
    </>
  )
}

export function ListlTemsSecond() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  return (
    <>
        <ListItemButton onClick={() => { logout() }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
    </>
  )
}



