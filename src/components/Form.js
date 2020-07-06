// this version uses hook version; so no 'static contextType' here !!
import React, { useContext } from 'react';
import {  
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Button,  
  Paper,
  Typography,
  MenuItem,
  Select,
  withStyles,
  Avatar
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styles from '../styles/formStyles';
import { LanguageContext } from '../context/LanguageProvider';

// translators
const content = {
  english: {
    signIn: 'Sign In',
    email: 'Email Address',
    password: 'Password',
    remember: 'Remember Me'
  },
  french: {
    signIn: 'Se Connecter',
    email: 'Adresse Electronique',
    password: 'Mot de Passe',
    remember: 'Retenir'    
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electronico',
    password: 'Contraseña',
    remember: 'Recuerdame'
  },
  dutch: {
    signIn: 'Aankondigen',
    email: 'E-mailadres',
    password: 'Wachtwoord',
    remember: 'Onthoud mij'
  },
  german: {
    signIn: 'Anmdelden',
    email: 'Email Adresse',
    password: 'Kennwort',
    remember: 'Merken'
  }
};

const Form = (props) => {  
  
    const { classes } = props  // these are jss styles; imported above 
    const { currentLanguage, setLanguage } = useContext(LanguageContext)
    const { signIn, email, password, remember } = content[currentLanguage] // passing in state prop from context; extracting key matching value of 'currentLanguage'

    return (
      <main className={classes.main}>
        <Paper className={classes.paper} >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" >{signIn}</Typography>
          <Select value={currentLanguage} onChange={setLanguage}>  {/* default */}
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="german">Deutsch</MenuItem>
            <MenuItem value="french">Francais</MenuItem>
            <MenuItem value="spanish">Español</MenuItem>
            <MenuItem value="dutch">Nederlands sprekende Nederlanders </MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth >
              <InputLabel htmlFor="email" >{email}</InputLabel>
              <Input id="email" name="email" autoFocus></Input>
            </FormControl>
            <FormControl margin="normal" required fullWidth >
              <InputLabel htmlFor="password" >{password}</InputLabel>
              <Input id="password" name="password"></Input>
            </FormControl>
            <FormControlLabel 
              control={<Checkbox color='primary' />} 
              label={remember} 
            />
            <Button
              variant="contained" // color filled
              type="submit"
              fullWidth
              color="primary"
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
      );
}; 
export default withStyles(styles)(Form);
