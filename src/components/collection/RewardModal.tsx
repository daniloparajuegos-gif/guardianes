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

  const rarityAura = {
    common: {
      filter: 'drop-shadow(0 0 12px rgba(181, 178, 168, 0.5))',
      background: 'radial-gradient(circle, rgba(181, 178, 168, 0.2) 0%, rgba(15, 23, 18, 0) 70%)',
      glow: '0 0 25px rgba(181, 178, 168, 0.35)',
      border: '1px solid rgba(181, 178, 168, 0.4)'
    },
    rare: {
      filter: 'drop-shadow(0 0 18px rgba(99, 138, 107, 0.85)) drop-shadow(0 0 6px rgba(150, 205, 160, 0.5))',
      background: 'radial-gradient(circle, rgba(99, 138, 107, 0.35) 0%, rgba(15, 23, 18, 0) 70%)',
      glow: '0 0 35px rgba(99, 138, 107, 0.55)',
      border: '1px solid rgba(99, 138, 107, 0.6)'
    },
    epic: {
      filter: 'drop-shadow(0 0 22px rgba(85, 125, 165, 0.95)) drop-shadow(0 0 8px rgba(140, 190, 240, 0.6))',
      background: 'radial-gradient(circle, rgba(85, 125, 165, 0.4) 0%, rgba(15, 23, 18, 0) 72%)',
      glow: '0 0 45px rgba(85, 125, 165, 0.65)',
      border: '1px solid rgba(85, 125, 165, 0.7)'
    },
    legendary: {
      filter: 'drop-shadow(0 0 28px rgba(201, 162, 77, 1)) drop-shadow(0 0 12px rgba(255, 225, 130, 0.8))',
      background: 'radial-gradient(circle, rgba(201, 162, 77, 0.5) 0%, rgba(15, 23, 18, 0) 75%)',
      glow: '0 0 60px rgba(201, 162, 77, 0.85), 0 0 20px rgba(255, 225, 130, 0.5)',
      border: '2px solid rgba(201, 162, 77, 0.8)'
    }
  };

  const aura = rarityAura[reward.rarity];

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
      transition: 'opacity 0.5s ease-in-out',
      backdropFilter: 'blur(6px)'
    }}>
      <div 
        className="max-h-[92vh] overflow-y-auto p-5 sm:p-8"
        style={{
          backgroundColor: '#1a2920',
          borderRadius: '16px',
          maxWidth: '450px',
          width: '100%',
          border: `1px solid ${aura.border.split(' ')[2]}`,
          boxShadow: `0 15px 40px -10px ${aura.border.split(' ')[2]}44`,
          textAlign: 'center',
          transform: show ? 'scale(1)' : 'scale(0.8)',
          transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
      >
        <h2 style={{ color: '#C9A24D', margin: '0 0 16px 0', fontSize: '1.2rem', letterSpacing: '2px' }}>
          ¡NUEVO DESCUBRIMIENTO!
        </h2>

        <div 
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4"
          style={{
            backgroundColor: '#0f1712',
            backgroundImage: aura.background,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: aura.glow,
            border: aura.border,
            position: 'relative'
          }}
        >
          <img 
            src={reward.image} 
            alt={reward.name} 
            style={{ 
              width: '78%', 
              height: '78%', 
              objectFit: 'contain',
              filter: aura.filter
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.endsWith('.webp')) {
                target.src = target.src.replace(/\.webp$/, '.png');
              } else {
                target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="gray"><rect width="100" height="100" fill="%232c3e30"/><text x="50" y="50" fill="white" font-size="12" text-anchor="middle" alignment-baseline="middle">Objeto</text></svg>';
              }
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
