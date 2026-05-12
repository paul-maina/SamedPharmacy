import React, { useEffect, useState } from "react";

function MedicineList() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch("https://animated-space-xylophone-97w7jrp997gjcx95v-5000.app.github.dev/api/medicines")
  .then(res => res.json())
  .then(data => setMedicines(data))
  .catch(err => console.error("Error fetching medicines:", err));
;
  }, []);

  return (
    <div>
      <h2>Available Medicines</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {medicines.map((med) => (
          <div
            key={med._id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <img
              src={med.image}
              alt={med.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />
            <h3>{med.name}</h3>
            <p>
              <strong>Category:</strong> {med.category}
            </p>
            <p>{med.description}</p>
            <p>
              <strong>Price:</strong> Ksh {med.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicineList;
