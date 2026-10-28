function Participants({ participants }) {
  return (
    <div className="container mt-5">

      <h2>Registered Participants</h2>

      <table className="table table-bordered">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Event</th>
            <th>Attendees</th>
          </tr>
        </thead>

        <tbody>

          {participants.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.event}</td>
              <td>{user.attendees}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Participants;