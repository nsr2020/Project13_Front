import React from 'react';
import styled, { keyframes } from 'styled-components';

// Definimos la animación de brillo de neón
const neonGlow = keyframes`
  from {
    opacity: 0.2; /* Opacidad inicial */
  }
  to {
    opacity: 1; /* Opacidad final */
  }
`;

// Creamos el componente principal para el campo estrellado
const StarFieldContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
`;

// Creamos el componente para las estrellas
const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 5px 3px #fff, 0 0 7px 4px #fff; /* Agregamos el efecto de resplandor */
  animation: ${neonGlow} 1s infinite alternate; /* Aplicamos la animación de brillo de neón */
`;

// Definimos el componente StarField que renderiza las estrellas dentro del contenedor
const StarField = ({ numStars }) => {
  // Función para generar estrellas aleatorias
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        top: Math.random() * 100 + '%', // Posición vertical aleatoria
        left: Math.random() * 100 + '%', // Posición horizontal aleatoria
      });
    }
    return stars;
  };

  return (
    <StarFieldContainer>
      {/* Creamos las estrellas usando el componente Star */}
      {generateStars().map((star, index) => (
        <Star key={index} style={{ top: star.top, left: star.left }} />
      ))}
    </StarFieldContainer>
  );
};

export default StarField;




