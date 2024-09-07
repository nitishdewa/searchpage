import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = ({ onSelectImage, onError }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: { query: searchQuery },
        headers: { Authorization: `Client-ID et9x_G9rXJ1aYgSICphV7vZ-GGOKMQbJ7xgER3-q5kQ` },
      });
      setImages(response.data.results);
    } catch (error) {
      onError('Error fetching images. Please try again.');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search for images" 
      />
      <button onClick={handleSearch}>Search</button>
      <div className="image-results">
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.urls.small} alt={image.alt_description} />
            <button onClick={() => onSelectImage(image)}>Add Captions</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
