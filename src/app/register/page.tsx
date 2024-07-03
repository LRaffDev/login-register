"use client"
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

import { MdPerson, MdVisibility, MdVisibilityOff, MdAccountCircle, MdPhone, MdEmail } from 'react-icons/md';



export default function Register()
{
   const [showPassword, setShowPassword] = useState(false);
   

   const handleClickShowPassword = () => setShowPassword((show) => !show);
 
   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
       event.preventDefault();
   };

    return (
        <main>
            <Box
             sx={ {
                // dimensioni schermo
                display: 'flex', 
                alignItems: 'center', 
                flexDirection: 'column',
                gap: 2, 
                position: 'absolute', 
                top: '9%', 
                left: '50%', 
                width: '100px', 
                height: '100px', 
                mt: '-50px', 
                ml: '-50px'
             } }>

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
                    flexDirection: 'column',
                    alignItems: 'center'
                 } }>

                    
                    <MdPerson size={40} />

                    <Typography
                     component='h1'
                     fontSize={30}
                     fontWeight={'bold'}>
                        Crea un nuovo account
                    </Typography>
                    <form>



                         <Box
                          sx={ {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: 350,

                            
                          } }>

                            <TextField
                                variant='standard'
                                label='Nome'
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
                            />

                            &nbsp;

                            <TextField
                                variant='standard'
                                label='Email'
                                type='Email'
                                InputProps={ {
                                    endAdornment:
                                        <InputAdornment
                                        position='end'>
                                            <MdEmail
                                                size={24}
                                                style={ { paddingRight: 7 } }
                                            />
                                    </InputAdornment>
                                } }
                            />

                             &nbsp;

                            <TextField
                                variant='standard'
                                label='Cellulare'
                                type='tel'
                                InputProps={ { 
                                    endAdornment:
                                        <InputAdornment
                                         position='end'>
                                            <MdPhone 
                                                size={24} 
                                                style={ { paddingRight: 7 } }
                                            />
                                        </InputAdornment>
                                }}
                            />
                            
                             &nbsp;

                            <TextField
                                variant='standard'
                                label='Password'
                                type={ showPassword ? 'text' : 'password'}
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
                         </Box>

                         <Button
                            sx={ {
                                width: 350,
                                mt: 3
                            } }
                            type='submit'
                            variant='contained'>
                                Registrati!
                         </Button>

                         <Button
                          href='/'>
                            Esegui il login
                         </Button>
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