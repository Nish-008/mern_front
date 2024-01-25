import React from 'react';
import './Carousel.css'; 

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="overlay"></div>
            <img src="https://plus.unsplash.com/premium_photo-1664391728401-632c929690b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVhdGxvYWZ8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <div className="overlay"></div>
            <img src="https://images.unsplash.com/photo-1630409346824-4f0e7b080087?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <div className="overlay"></div>
            <img src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
