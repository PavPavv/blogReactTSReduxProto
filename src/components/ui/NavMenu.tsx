import { NavLink } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

type Link = {
  id: number;
  title: string;
  link: string;
};

const links = [
  {
    id: 1,
    title: 'Blog',
    link: '/',
  },
  {
    id: 2,
    title: 'Form',
    link: '/form',
  },
  {
    id: 3,
    title: 'Todos',
    link: '/todos',
  }
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: '0 0 0 60px',
      padding: 0,
  },
  li: {
    marginRight: 30,
  },
  a: {
    textDecoration: 'none',
    color: theme.palette.primary.light,
    transition: 'linear .2s',

    '&:hover': {
      color: theme.palette.primary.main, 
    },
  },
  aActive: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  }
}));

const NavMenu = () => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {links.map((link: Link): JSX.Element => {
        return (
          <li className={classes.li} key={link.id}>
            <NavLink className={classes.a} activeClassName={classes.aActive} exact to={link.link} >
              <Typography variant="subtitle2">{link.title}</Typography>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;