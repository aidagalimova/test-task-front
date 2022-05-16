import { Link, Card } from '@material-ui/core';
import { useQuery } from 'react-query';
import Users from '../services/users';

export default function ProfilePage() {

    const { isLoading, data, error } = useQuery('users summary', () => Users())

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    if (error) {
        handleLogout();
    }
    return (
        <>
            <div className='grid grid-flow-col justify-start mb-8'>
                <h1 className='text-xl mr-16'>Личный кабинет</h1>
                <Link
                    className='cursor-pointer'
                    onClick={handleLogout}>
                    Выйти
                </Link>
            </div>
            <Card className="w-96 drop-shadow-xl p-4">
                <h1 className='text-lg mb-4'>Количество клиентов</h1>
                {isLoading ?
                    <div>Загрузка....</div> :
                    <>
                        <div>total: {data.total}</div>
                        <div>loyal: {data.loyal}</div>
                        <div>guests: {data.guests}</div>
                        <div>walked: {data.walked}</div>
                    </>}
            </Card>
        </>
    )
}