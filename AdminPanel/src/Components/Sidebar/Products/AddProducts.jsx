

import { useState, useEffect } from 'react';

function AddProducts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Add Products</h2>
      <form></form>
    </div>
  );
}



export default AddProducts