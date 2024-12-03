import React, { useState, useEffect } from 'react';
import './random.css';

const Random = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  // Fungsi untuk mengambil data dari API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=8');
        const data = await response.json();
        setItems(data); // Set the whole product data
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleStart = () => {
    if (items.length === 0) {
      alert('No items to roll. Please check the API.');
      return;
    }

    setIsRolling(true);
    let iterations = 0;

    // Lakukan pengacakan
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setSelectedItem(items[randomIndex]);
      iterations += 1;

      if (iterations >= 30) { // Berhenti setelah 4 detik
        clearInterval(interval);
        setIsRolling(false);
      }
    }, 100);
  };

  return (
    <div className="container">
      <h1>Bingung cari produk apa? klik tombol dibawah aja</h1>
      <button
        onClick={handleStart}
        disabled={isRolling}
        className="button"
      >
        {isRolling ? 'Rolling...' : 'Start'}
      </button>
      <div className="result">
        {isRolling && <p>Rolling...</p>}
        {!isRolling && selectedItem && (
          <div className="selected-item">
            <img src={selectedItem.image} alt={selectedItem.title} />
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.category}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Random;
