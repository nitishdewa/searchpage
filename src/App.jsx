import React, { useState } from 'react';
import SearchPage from './SearchPage';
import ImageEditor from './ImageEditor';
import ErrorNotification from './ErrorNotification.jsx';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleError = (message) => {
    setError(message);
  };

  return (
    <div>
      {selectedImage ? (
        <ImageEditor 
          selectedImage={selectedImage} 
          onError={handleError} 
        />
      ) : (
        <SearchPage 
          onSelectImage={handleImageSelect} 
          onError={handleError} 
        />
      )}
      {error && <ErrorNotification message={error} />}
    </div>
  );
};

export default App;
