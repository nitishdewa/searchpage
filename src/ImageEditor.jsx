import React, { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';

const ImageEditor = ({ selectedImage, onError }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    // Initialize fabric canvas
    const canvasInstance = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
    });
    setCanvas(canvasInstance);

    // Load the image onto the canvas
    if (selectedImage) {
      fabric.Image.fromURL(
        selectedImage.urls.regular,
        (img) => {
          // Add the image to the canvas
          canvasInstance.add(img);
          img.scaleToWidth(800); // Scale the image to fit canvas width
          canvasInstance.renderAll(); // Ensure the canvas re-renders
        },
        {
          crossOrigin: 'anonymous', // Handle cross-origin issues
        }
      );
    }

    // Cleanup canvas on unmount
    return () => {
      canvasInstance.dispose();
    };
  }, [selectedImage]);

  return (
    <div>
      <canvas ref={canvasRef} id="canvas" />
      {/* Additional UI for canvas controls */}
    </div>
  );
};

export default ImageEditor;
