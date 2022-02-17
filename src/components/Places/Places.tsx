import React from 'react';

interface Props {
  place: {
    name: string;
  };
}

const Places: React.FC<Props> = ({ place }) => {
  return <div>{place.name}</div>;
};

export default Places;
