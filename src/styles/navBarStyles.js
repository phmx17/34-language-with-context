
import { fade } from '@material-ui/core/styles/colorManipulator';


const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 0
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',  // do not display below small
    [theme.breakpoints.up('sm')]:{  // [] not an array; value for field; 'theme' gets passed above
      display: 'block'  // at small display title
    }
  },  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15), // fade got imported above
    "&:hover": {
    backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing.unit,
    width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),  //  make search field larger
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '120',
      "&:focus": {
        width: 200  // search input grows when focused on
      }
    }
  }
});
export default styles;
