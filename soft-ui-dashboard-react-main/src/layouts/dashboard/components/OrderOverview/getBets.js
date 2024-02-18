export const fetchBets = async () => {
    const response = await fetch('http://127.0.0.1:5000/get_bets', {
        method: 'GET',
    });

    const data = await response.json();
    console.log(data);
    return data;
};

export const updateTokenBalance = async (tokens) => {
    const response = await fetch('http://127.0.0.1:5000/update_tokens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "new_token_balance": tokens }),
    });
}