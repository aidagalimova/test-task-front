import React, { useState, ChangeEvent } from 'react';
import { TextField, Card, CardContent, CardActions, CardHeader, Button } from '@material-ui/core';
import Auth from '../services/auth';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
   
    const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
        (e: ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) };

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
        (e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) };

    const handleLogin = () => {
        Auth(username, password)
    }
    return (
        <div className="flex justify-center">
            <form className='w-96 drop-shadow-xl mt-16' autoComplete="off" >
                <Card>
                    <CardHeader title="Вход" className='text-center' />
                    <CardContent>
                        <div>
                            <TextField
                                fullWidth
                                id="username"
                                label="Имя"
                                placeholder="Имя"
                                margin="normal"
                                onChange={handleUsernameChange}
                            />
                            <TextField
                                fullWidth
                                id="password"
                                type="password"
                                label="Пароль"
                                placeholder="Пароль"
                                margin="normal"
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            className='w-full bg-indigo-500'
                            variant="contained"
                            size="large" color="primary"
                            onClick={handleLogin}>
                            Войти
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </div>
    )
} 