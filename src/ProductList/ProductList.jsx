import React, { useState } from 'react';
import "./productLIst.css";

// Importing images
import screen1 from "../images/tab.jpg";
import screen2 from "../images/tab1.jpg";
import screen3 from "../images/tab2.jpg";
import screen4 from "../images/tab3.jpg";
import screen5 from "../images/laptop.jpg";
import screen6 from "../images/tv.jpg";

import camera from "../images/camera-510530_640.jpg";
import camera2 from "../images/camera.jpg";
import camera3 from "../images/camera-1248682_640.jpg";
import camera4 from "../images/camera-431119_640.jpg";

import ac from "../images/headphone.jpg";
import ac2 from "../images/watch.jpg";
import ac3 from "../images/speaker.jpg";
import ac4 from "../images/organ-168220_640.jpg";
import ac5 from "../images/keyboard-428324_640.jpg";
import ac6 from "../images/mic-1132528_640.jpg";

// Products data
const products = [
  { id: 1, category: 'camera', img: camera, price: "300$", name: "Camera Sony" },
  { id: 2, category: 'camera', img: camera2, price: "400$", name: "Camera" },
  { id: 3, category: 'camera', img: camera3, price: "600$", name: "Camera Sony" },
  { id: 4, category: 'camera', img: camera4, price: "1000$", name: "Camera Sony" },

  { id: 11, category: 'screens', img: screen1, price: "1200$", name: "Tab 1" },
  { id: 12, category: 'screens', img: screen2, price: "3400$", name: "Tab 2" },
  { id: 13, category: 'screens', img: screen3, price: "3600$", name: "Tab 3" },
  { id: 14, category: 'screens', img: screen4, price: "2300$", name: "Tab 4" },
  { id: 15, category: 'screens', img: screen5, price: "900$", name: "Laptop" },
  { id: 16, category: 'screens', img: screen6, price: "500$", name: "TV" },

  { id: 21, category: 'accessories', img: ac, price: "100$", name: "Headphone" },
  { id: 22, category: 'accessories', img: ac2, price: "200$", name: "Watch" },
  { id: 23, category: 'accessories', img: ac3, price: "500$", name: "Speaker" },
  { id: 24, category: 'accessories', img: ac4, price: "600$", name: "Organ" },
  { id: 25, category: 'accessories', img: ac5, price: "300$", name: "Keyboard" },
  { id: 26, category: 'accessories', img: ac6, price: "700$", name: "Mic" }
];

const ProductList = () => {
  const [menu, setMenu] = useState('all');

  const filteredProducts = menu === 'all' ? products : products.filter(product => product.category === menu);

  return (
    <>
      <div className="containerP container">
        <ul className="list">
          <li>
            <a href="#" className={menu === 'all' ? 'active' : ''} onClick={() => setMenu('all')}>
              All
            </a>
          </li>
          <li>
            <a href="#" className={menu === 'screens' ? 'active' : ''} onClick={() => setMenu('screens')}>
              Screens
            </a>
          </li>
          <li>
            <a href="#" className={menu === 'camera' ? 'active' : ''} onClick={() => setMenu('camera')}>
              Cameras
            </a>
          </li>
          <li>
            <a href="#" className={menu === 'accessories' ? 'active' : ''} onClick={() => setMenu('accessories')}>
              Accessories
            </a>
          </li>
        </ul>
      </div>

      <div className="cat-container">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.img} alt={product.name} className="product-image" />
            <div className="product-details">
              <h4>{product.name}</h4>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
