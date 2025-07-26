// src/components/DessertMenu.js
import React from 'react';
import './DessertMenu.css';

const desserts = [
    {
        name: '라즈베리크림 피스타치오치즈케이크',
        price: '8,900원',
        image: '/images/2.jpg',
    },
    {
        name: '밤크림 말차치즈케이크',
        price: '8,800원',
        image: '/images/3.jpg',
    },
    {
        name: '인절미크림 숙치즈케이크',
        price: '8,800원',
        image: '/images/4.jpg',
    },
    {
        name: '포테이토 바질휘낭시에',
        price: '3,600원',
        image: '/images/10.jpg',
    },
    {
        name: '얼그레이 까눌레',
        price: '3,800원',
        image: '/images/7.jpg',
    },
    {
        name: '단짠라떼',
        price: '5,600원',
        image: '/images/11.jpg',
    },
    {
        name: '과일티 3종',
        price: '6,300원',
        image: '/images/9.jpg',
    },
];

function DessertMenu() {
    return (
        <div className="dessert-wrapper">
            <h2>MENU</h2>
            <div className="dessert-grid">
                {desserts.map((item, index) => (
                    <div className="dessert-card" key={index}>
                        <img src={item.image} alt={item.name} />
                        <div className="dessert-info">
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DessertMenu;
