
export const handleBookingReservation = async({roomNumber}: {roomNumber: string}) => {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8000/bookroom',
                'Access-Control-Allow-Credentials': 'true' },
    body: JSON.stringify({ "roomNumber": roomNumber})
    };
    let feedResponse = await fetch('http://localhost:8000/bookroom', requestOptions)
    .then(response => {
    return response.json();
    });
    return feedResponse;

}