import React, { useEffect, useState } from 'react';
import './MyComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const MyComponent = () => {
  const [products, setProducts] = useState([]);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://plataforma.visasgomezyasociados.com/shop/getproducts?format=json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const toggleVideoModal = () => {
    setShowVideo(!showVideo);
  };

  if (products.length === 0) {
    return <div className="loading">Loading...</div>;
  }

  // Agregar la imagen al producto "mostera"
  const mosteraImage =
    'https://media.vogue.es/photos/5f7b422a455210504797afef/1:1/w_2361,h_2361,c_limit/MONSTERA_DELICIOSA_ANN.jpg';

  const updatedProducts = products.map((product) => {
    if (product.nombreProducto === 'mostera') {
      return { ...product, imagen1: mosteraImage };
    }
    return product;
  });

  return (
    <div>
      <div className="header">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/ikea-1533671048.jpg?crop=1xw:0.5625xh;center,top&resize=1200:*"
          alt="Nature"
          className="header-image"
        />
        <div className="header-description">
          <h2>LAS PLANTAS SUBEN EL ÁNIMO</h2>
          <p>
            Tener plantas aporta energía y vitalidad y aunque parezca mentira está comprobado que vivir rodeado de
            plantas te cambia el humor.
          </p>
        </div>
      </div>
      <div className="container">
        {updatedProducts.map((product) => (
          <div key={product.id} className="product">
            <h1>{product.nombreProducto}</h1>
            <p>Características: {product.caracteristicas}</p>
            <p>Descripción: {product.descripcion}</p>
            <div className="image-container">
              <img src={product.imagen1} alt={product.nombreProducto} />
              <div className="icons-container">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
              </div>
            </div>
            <p>Precio: {product.precio}</p>
            <p>Cantidad: {product.cantidad}</p>
          </div>
        ))}
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="icon facebook-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon twitter-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
        </a>
      </div>
      <div className="video-container">
        <div className="video-thumbnail" onClick={toggleVideoModal}>
          <img src="https://i.ytimg.com/vi/jpncmfZzOY4/maxresdefault.jpg" alt="Video Thumbnail" />
          <div className="play-button">
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </div>
      </div>
      <Modal show={showVideo} onHide={toggleVideoModal} centered>
        <Modal.Body>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jpncmfZzOY4"
            controls
            width="400px"
            height="300px"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyComponent;
