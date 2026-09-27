import React from 'react';
import { ItemRarity } from '../../types';

interface RarityBadgeProps {
  rarity: ItemRarity;
}

export const RarityBadge: React.FC<RarityBadgeProps> = ({ rarity }) => {
  const rarityConfig = {
    common: { color: '#B5B2A8', label: 'Común' },
    rare: { color: '#638A6B', label: 'Raro' },
    epic: { color: '#557DA5', label: 'Épico' },
    legendary: { color: '#C9A24D', label: 'Legendario' }
  };

  const { color, label } = rarityConfig[rarity];

  return (
    <span style={{
      backgroundColor: color,
      color: '#fff',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      display: 'inline-block'
    }}>
      {label}
    </span>
  );
};
