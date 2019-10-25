import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div className="hero" style={{backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg)',
      }}>
          <div className="hero-content">
            <h1>Cedar Hill Baptist</h1>
            <h2>Welcome to Cedar Hill Baptist Church</h2>
          </div>
      </div>
    );
  }
}

export default Hero;
