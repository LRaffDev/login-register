"use client"

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { MdVisibility, MdVisibilityOff, MdLogin, MdAccountCircle } from 'react-icons/md';




export default function Login()
{
    const [showPassword, setShowPassword] = useState(false);
   

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return(
        <main>
            <Box 
             sx={ { 
                // dimensioni schermo
                display: 'flex', 
                alignItems: 'center', 
                flexDirection: 'column',
                gap: 2, 
                position: 'absolute', 
                top: '15%', 
                left: '50%', 
                width: '100px', 
                height: '100px', 
                mt: '-50px', 
                ml: '-50px'} }>

                <Box
                 sx={ {
                    // dimensioni form
                    borderRadius: {sm: '24px', xs: 'none'},
                    background: '#ffffff',
                    boxShadow: {sm: '14px 14px 28px #858585, -14px -14px 28px #ffffff', xs: 'none'},
                    px: 10,
                    py: 10,
                    gap: 2,
                    display: 'flex',
                    flexDirection: 'column'
                 } }>



                    <Box
                     sx={ {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                     } }>
                        <MdLogin size={35} />

                        <Typography 
                        component="h1"
                        fontSize={30}
                        fontWeight={'bold'}>
                            Benvenuto
                        </Typography>

                        <Typography
                        component='h2'
                        color={'grey'}>
                            Esegui il login
                        </Typography>
                    </Box>


                    <form>
                        <TextField 
                            variant='standard'
                            sx={ {
                            mb: 1,
                            width: 350
                            } }
                            InputProps={ {
                                endAdornment:
                                <InputAdornment
                                 position='end'>
                                    <MdAccountCircle 
                                        size={24} 
                                        style={ { paddingRight: 7 } }
                                    />
                                </InputAdornment>
                            } }
                            label='Email'
                            type='email'
                            
                        />

                        <TextField
                            variant='standard' 
                            label='Password'
                            type={showPassword ? 'text' : 'password'}
                            sx={ {
                                width: 350,
                            } }
                            InputProps={ {
                                endAdornment:
                                <InputAdornment
                                    position='end'>
                                        <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                        </IconButton>
                                </InputAdornment>
                            } }
                        />

                        <FormControlLabel control={<Checkbox />} label='Ricordami' />
                    <Button
                        sx={ {
                            mt: 3,
                            display: 'flex',
                            alignContent: 'center',
                            width: 350,
                            
                        } }
                        type='submit'
                        color='primary'
                        variant='contained'
                        >
                            Login
                        </Button>

                        <Box
                         sx={ {
                            color: 'blue',
                            textDecoration: 'none',
                            textTransform: 'none',
                            display: 'flex',
                            justifyContent: 'space-between'
                            
                         } }>
                            <Button
                             size='small'
                             href='/register'>
                                Registrati!
                            </Button>

                            <Button
                             size='small'>
                                Password Dimenticata
                            </Button>

                        </Box>
                    </form>
                </Box>

                <footer
                    style={ {
                        width: 230,
                        justifyItems: 'center',
                        display: 'flex'
                    } }>
                    Made with &#128153; By LRaffDev
                </footer>
            </Box>

        </main>
    )
}