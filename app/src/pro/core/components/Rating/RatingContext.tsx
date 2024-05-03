import React from 'react';

interface RatingProps {
  activeItem: number | undefined;
  dynamic: boolean | undefined;
  dynamicStyle: { color: string; icon: string };
  setDynamicStyle: React.SetStateAction<any>;
  setActiveItem: React.SetStateAction<any>;
  hoveredItem: number;
  setHoveredItem: React.SetStateAction<any>;
}

const RatingContext = React.createContext<RatingProps>({
  activeItem: 0,
  dynamic: false,
  dynamicStyle: { color: '', icon: '' },
  setDynamicStyle: null,
  setActiveItem: null,
  hoveredItem: 0,
  setHoveredItem: null,
});

export { RatingContext };
