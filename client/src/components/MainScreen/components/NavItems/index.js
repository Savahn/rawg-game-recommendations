import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StorageIcon from '@material-ui/icons/Storage';
// import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to='/dashboard'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItem>
    <ListItem button component={Link} to='/database'>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary='Database' />
    </ListItem>
    <ListItem button component={Link} to='/HeadFirstJavaScript'>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary='Head First JavaScript' />
    </ListItem>
    <ListItem button component={Link} to='/FullStackReact'>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary='Full Stack React' />
    </ListItem>
    <ListItem button component={Link} to='/LearnReactHooks'>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary='Learn React Hooks' />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);
