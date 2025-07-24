import React from 'react';
import './ImageGrid.css';

const imageList = [
    '1.jpg', '5.jpg', '6.jpg',
    '8.jpg', '10.jpg', '2.jpg'
];

function ImageGrid() {
    return (
        <div className="image-grid">
            {imageList.map((img, index) => (
                <img key={index} src={`/images/${img}`} alt={`img-${index}`} />
            ))}
        </div>
    );
}

export default ImageGrid;
