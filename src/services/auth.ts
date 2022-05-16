export default async function Auth(username: string, password: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    await fetch('https://admin-redmachine.ru/api/auth/', requestOptions)
        .then((res) => res.json())
        .then((response) => {
            if (response.token) {
                localStorage.setItem("token", response.token);
                window.location.href = '/profile';
            } else {
                alert("Проверьте пароль или логин")
            }
        }).catch(() => {
            alert("Что-то пошло не так")
        })
}