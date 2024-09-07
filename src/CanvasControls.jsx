import React from 'react';
import * as fabric from 'fabric';

const CanvasControls = ({ canvas, onError }) => {
  const addTextLayer = () => {
    const text = new fabric.Textbox('Your Caption Here', {
      left: 100,
      top: 100,
      fontSize: 30,
      editable: true,
    });
    canvas.add(text);
  };

  const addShape = (shapeType) => {
    let shape;
    switch (shapeType) {
      case 'circle':
        shape = new fabric.Circle({ radius: 50, fill: 'red', left: 200, top: 200 });
        break;
      case 'rectangle':
        shape = new fabric.Rect({ width: 100, height: 100, fill: 'blue', left: 250, top: 250 });
        break;
      default:
        return;
    }
    canvas.add(shape);
  };

  const downloadImage = () => {
    try {
      const dataURL = canvas.toDataURL({ format: 'png', quality: 1.0 });
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'modified-image.png';
      link.click();
    } catch (error) {
      onError('Error downloading image. Please try again.');
    }
  };

  const logCanvasLayers = () => {
    const objects = canvas.getObjects().map((obj) => ({
      type: obj.type,
      left: obj.left,
      top: obj.top,
      width: obj.width,
      height: obj.height,
    }));
    console.log(objects);
  };

  return (
    <div>
      <button onClick={addTextLayer}>Add Text</button>
      <button onClick={() => addShape('circle')}>Add Circle</button>
      <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
      <button onClick={downloadImage}>Download</button>
      <button onClick={logCanvasLayers}>Log Canvas Layers</button>
    </div>
  );
};

export default CanvasControls;
