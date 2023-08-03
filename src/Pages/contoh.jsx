import { useState } from "react";
function Contoh() {
    const [seats, setSeats] = useState(Array(64).fill(true));
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [transactionError, setTransactionError] = useState('');


    const handleSeatClick = (seatNumber) => {
        console.log("ini selectednya", selectedSeats)
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
        setTransactionError('');
    };

    const handleBookTickets = () => {
        if (selectedSeats.length === 0) {
            setTransactionError('No seats selected!');
        } else if (selectedSeats.length > 6) {
            setTransactionError('Maximum 6 tickets can be booked in one transaction!');
        } else {
            const updatedSeats = seats.map((seat, index) =>
                selectedSeats.includes(index + 1) ? false : seat
            );
            setSeats(updatedSeats);
            setSelectedSeats([]);
            setTransactionError('');
        }
    };

    return (
        <div>
            <h1>Seat Booking</h1>
            <div className="seats">
                {seats.map((seat, index) => (
                    <div
                        key={index}
                        className={`seat ${!seat ? 'unavailable' : selectedSeats.includes(index + 1) ? 'selected' : ''}`}
                        onClick={() => handleSeatClick(index + 1)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
            <button onClick={handleBookTickets}>Book Tickets</button>
            <p>{transactionError}</p>
        </div>
    );
}

export default Contoh;