export const fetchBets = async () => {
    const response = await fetch('http://127.0.0.1:5000/get_bets', {
        method: 'GET',
    });

    const data = await response.json();
    console.log(data);
    return data;
};