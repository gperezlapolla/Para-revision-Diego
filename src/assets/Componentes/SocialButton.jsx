import React from 'react';

const SocialButton = ({ icon, href }) => {
  return (
    <a href={href} target="_blank">
      <img
        src={`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/svgs/brands/${icon}.svg`}
        alt={icon}
      />
    </a>
  );
};

export default SocialButton;

