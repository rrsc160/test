import React from "react"

const SelectedSeats = ({ selectedSeats, handleBookSeats }) => {
  return (
    <div className="selected-seats">
      <h3>SELECTED SEATS</h3>
      <ul>
        {selectedSeats.length > 0 ? (
          selectedSeats.map((seat) => (
            <li key={seat.id} className="seat-item">
              <div className="seat-info">
                <span className="seat-id">{seat.label}</span>
                <span className="seat-category">(ID: {seat.id})</span>
              </div>
            </li>
          ))
        ) : (
          <li className="no-seats">No seats selected.</li>
        )}
      </ul>
      {selectedSeats.length > 0 && (
        <button className="book-seats-btn" onClick={handleBookSeats}>
          BOOK SELECTED SEATS
        </button>
      )}
    </div>
  )
}

export default SelectedSeats
