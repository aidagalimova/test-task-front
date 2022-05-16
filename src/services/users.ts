export default async function Users() {
    const token = localStorage.getItem("token");
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
    };
    const res = await fetch('https://admin-redmachine.ru/api/dashboard/clients-summary/', requestOptions);
    if (!res.ok) throw new Error(res.statusText)
    return await res.json();
}