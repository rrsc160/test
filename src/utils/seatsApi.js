export const fetchHoldToken = async (secretWorkspaceKey) => {
  try {
    const token = btoa(`${secretWorkspaceKey}:`)
    const response = await fetch("https://api-eu.seatsio.net/hold-tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
    })

    if (!response.ok) throw new Error("Failed to fetch hold token")

    const data = await response.json()
    return data.holdToken
  } catch (error) {
    console.error("Error fetching hold token:", error)
    throw error
  }
}

export const bookSeats = async (
  secretWorkspaceKey,
  eventKey,
  selectedSeats
) => {
  try {
    const token = btoa(`${secretWorkspaceKey}:`)
    const response = await fetch(
      `https://api-eu.seatsio.net/events/${eventKey}/actions/book`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${token}`,
        },
        body: JSON.stringify({
          objects: selectedSeats.map((seat) => seat.id),
        }),
      }
    )

    if (!response.ok) throw new Error("Booking failed")
  } catch (error) {
    console.error("Error booking seats:", error)
    throw error
  }
}
