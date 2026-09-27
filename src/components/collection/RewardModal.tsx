import React, { useEffect, useState } from 'react';
import { CollectibleItem } from '../../types';
import { RarityBadge } from './RarityBadge';
import { useGuardian } from '../../context/GuardianContext';

interface RewardModalProps {
  reward: CollectibleItem;
  onContinue: () => void;
  onViewCollection: () => void;
}

export const RewardModal: React.FC<RewardModalProps> = ({ reward, onContinue, onViewCollection }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // trigger animation
    setTimeout(() => setShow(true), 100);
  }, []);

  const rarityGlow = {
    common: '0 0 20px rgba(181, 178, 168, 0.5)',
    rare: '0 0 30px rgba(99, 138, 107, 0.6)',
    epic: '0 0 40px rgba(85, 125, 165, 0.7)',
    legendary: '0 0 50px rgba(201, 162, 77, 0.8)'
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      opacity: show ? 1 : 0,
      transition: 'opacity 0.5s ease-in-out'
    }}>
      <div style={{
        backgroundColor: '#1a2920',
        borderRadius: '16px',
        maxWidth: '450px',
        width: '100%',
        border: '1px solid #2c3e30',
        padding: '32px',
        textAlign: 'center',
        transform: show ? 'scale(1)' : 'scale(0.8)',
        transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}>
        <h2 style={{ color: '#C9A24D', margin: '0 0 24px 0', fontSize: '1.25rem', letterSpacing: '2px' }}>
          ¡NUEVO DESCUBRIMIENTO!
        </h2>

        <div style={{
          width: '160px',
          height: '160px',
          margin: '0 auto 24px',
          backgroundColor: '#0f1712',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: rarityGlow[reward.rarity],
          position: 'relative'
        }}>
          <img 
            src={reward.image} 
            alt={reward.name} 
            style={{ width: '70%', height: '70%', objectFit: 'contain' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="gray"><rect width="100" height="100" fill="%232c3e30"/><text x="50" y="50" fill="white" font-size="12" text-anchor="middle" alignment-baseline="middle">Objeto</text></svg>';
            }}
          />
        </div>

        <RarityBadge rarity={reward.rarity} />
        
        <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '16px 0 8px 0' }}>
          {reward.name}
        </h3>
        
        <p style={{ color: '#a0aab2', marginBottom: '24px', lineHeight: '1.5' }}>
          {reward.description}
        </p>

        <p style={{ color: '#638A6B', fontSize: '0.875rem', marginBottom: '32px' }}>
          Se añadió a tu Colección del Territorio.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button
            onClick={onViewCollection}
            style={{
              padding: '12px 24px',
              backgroundColor: '#2c3e30',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Ver Colección
          </button>
          <button
            onClick={onContinue}
            style={{
              padding: '12px 24px',
              backgroundColor: '#638A6B',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
