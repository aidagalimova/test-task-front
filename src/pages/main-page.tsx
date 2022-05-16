import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
export default function MainPage() {
    const isAuth = localStorage.getItem("token") !== null;
    return (
        <div>
            {!isAuth ?
                <Button component={Link} to="/login" variant="contained" color="primary">
                    Войти
                </Button> :
                <Button component={Link} to="/profile" variant="contained" color="primary">
                    Мой профиль
                </Button>
            }
        </div>
    )
}