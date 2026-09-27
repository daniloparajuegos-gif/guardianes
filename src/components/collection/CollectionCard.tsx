import React from 'react';
import { CollectibleItem, CollectionEntry } from '../../types';
import { RarityBadge } from './RarityBadge';

interface CollectionCardProps {
  item: CollectibleItem;
  entry?: CollectionEntry;
  onClick: () => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ item, entry, onClick }) => {
  const isDiscovered = !!entry;

  const rarityColors = {
    common: '#B5B2A8',
    rare: '#638A6B',
    epic: '#557DA5',
    legendary: '#C9A24D'
  };

  const rarityAura = {
    common: {
      filter: 'drop-shadow(0 0 8px rgba(181, 178, 168, 0.35))',
      background: 'radial-gradient(circle, rgba(181, 178, 168, 0.12) 0%, rgba(15, 23, 18, 0) 70%)',
      cardGlow: 'none'
    },
    rare: {
      filter: 'drop-shadow(0 0 12px rgba(99, 138, 107, 0.65)) drop-shadow(0 0 4px rgba(150, 205, 160, 0.35))',
      background: 'radial-gradient(circle, rgba(99, 138, 107, 0.25) 0%, rgba(15, 23, 18, 0) 70%)',
      cardGlow: '0 4px 18px rgba(99, 138, 107, 0.18)'
    },
    epic: {
      filter: 'drop-shadow(0 0 16px rgba(85, 125, 165, 0.8)) drop-shadow(0 0 6px rgba(140, 190, 240, 0.45))',
      background: 'radial-gradient(circle, rgba(85, 125, 165, 0.32) 0%, rgba(15, 23, 18, 0) 72%)',
      cardGlow: '0 4px 22px rgba(85, 125, 165, 0.28)'
    },
    legendary: {
      filter: 'drop-shadow(0 0 20px rgba(201, 162, 77, 0.95)) drop-shadow(0 0 8px rgba(255, 225, 130, 0.65))',
      background: 'radial-gradient(circle, rgba(201, 162, 77, 0.38) 0%, rgba(15, 23, 18, 0) 75%)',
      cardGlow: '0 4px 26px rgba(201, 162, 77, 0.38)'
    }
  };

  const aura = rarityAura[item.rarity];
  const borderColor = isDiscovered ? rarityColors[item.rarity] : '#2c3e30';

  return (
    <div
      onClick={onClick}
      className="collection-card"
      style={{
        backgroundColor: '#1a2920',
        borderRadius: '12px',
        border: `1px solid ${borderColor}`,
        boxShadow: isDiscovered ? aura.cardGlow : 'none',
        padding: '16px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        transition: 'transform 0.2s, box-shadow 0.2s',
        opacity: isDiscovered ? 1 : 0.7
      }}
    >
      <div style={{
        width: '100%',
        aspectRatio: '1',
        backgroundColor: '#0f1712',
        backgroundImage: isDiscovered ? aura.background : 'none',
        borderRadius: '8px',
        marginBottom: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {isDiscovered ? (
          <img 
            src={item.image} 
            alt={item.name} 
            style={{ 
              width: '82%', 
              height: '82%', 
              objectFit: 'contain',
              filter: aura.filter,
              transition: 'filter 0.3s ease, transform 0.3s ease'
            }} 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.endsWith('.webp')) {
                target.src = target.src.replace(/\.webp$/, '.png');
              } else {
                target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="gray"><rect width="100" height="100" fill="%232c3e30"/><text x="50" y="50" fill="white" font-size="12" text-anchor="middle" alignment-baseline="middle">Imagen no disp.</text></svg>';
              }
            }}
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#638A6B' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span style={{ fontSize: '0.8rem', marginTop: '8px' }}>Por descubrir</span>
          </div>
        )}
      </div>

      {isDiscovered ? (
        <>
          <RarityBadge rarity={item.rarity} />
          <h3 style={{ margin: '8px 0 4px', fontSize: '1rem', color: '#fff', textAlign: 'center' }}>{item.name}</h3>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#a0aab2', textAlign: 'center' }}>{item.zone}</p>
          <div style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: '#00000088',
            color: '#fff',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.75rem'
          }}>
            x{entry.quantity}
          </div>
        </>
      ) : (
        <>
          <h3 style={{ margin: '8px 0 4px', fontSize: '1rem', color: '#556b5b', textAlign: 'center' }}>Objeto Desconocido</h3>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#4a5d4f', textAlign: 'center' }}>{item.zone}</p>
        </>
      )}
    </div>
  );
};
