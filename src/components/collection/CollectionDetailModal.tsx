import React from 'react';
import { CollectibleItem, CollectionEntry } from '../../types';
import { RarityBadge } from './RarityBadge';

interface CollectionDetailModalProps {
  item: CollectibleItem;
  entry?: CollectionEntry;
  onClose: () => void;
}

export const CollectionDetailModal: React.FC<CollectionDetailModalProps> = ({ item, entry, onClose }) => {
  const isDiscovered = !!entry;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: '#1a2920',
        borderRadius: '16px',
        maxWidth: '400px',
        width: '100%',
        border: '1px solid #2c3e30',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px', right: '12px',
            background: 'none', border: 'none',
            color: '#a0aab2', fontSize: '1.5rem',
            cursor: 'pointer', zIndex: 10
          }}
        >
          ×
        </button>

        <div style={{
          width: '100%', aspectRatio: '1.5',
          backgroundColor: '#0f1712',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          padding: '24px'
        }}>
          {isDiscovered ? (
            <img 
              src={item.image} 
              alt={item.name} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.endsWith('.webp')) {
                  target.src = target.src.replace(/\.webp$/, '.png');
                } else {
                  target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="gray"><rect width="200" height="200" fill="%232c3e30"/><text x="100" y="100" fill="white" font-size="16" text-anchor="middle" alignment-baseline="middle">Imagen no disp.</text></svg>';
                }
              }}
            />
          ) : (
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#638A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          )}
        </div>

        <div style={{ padding: '24px' }}>
          {isDiscovered ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <h2 style={{ margin: '0 0 8px 0', color: '#fff', fontSize: '1.5rem' }}>{item.name}</h2>
                  <RarityBadge rarity={item.rarity} />
                </div>
                <div style={{ backgroundColor: '#0f1712', padding: '4px 12px', borderRadius: '16px', color: '#fff', fontSize: '0.875rem' }}>
                  Cantidad: {entry.quantity}
                </div>
              </div>

              <p style={{ color: '#a0aab2', lineHeight: '1.5', marginBottom: '24px' }}>
                {item.description}
              </p>

              <div style={{ backgroundColor: '#0f1712', padding: '16px', borderRadius: '8px', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#638A6B' }}>Familia:</span>
                  <span style={{ color: '#fff' }}>{item.family}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#638A6B' }}>Zona:</span>
                  <span style={{ color: '#fff' }}>{item.zone}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#638A6B' }}>Descubierto el:</span>
                  <span style={{ color: '#fff' }}>{new Date(entry.discoveredAt).toLocaleDateString('es-CO')}</span>
                </div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <h2 style={{ margin: '0 0 16px 0', color: '#556b5b', fontSize: '1.5rem' }}>Objeto Desconocido</h2>
              <p style={{ color: '#4a5d4f', lineHeight: '1.5' }}>
                Sigue explorando el territorio para encontrar este objeto.
                Se rumorea que se encuentra en la zona de: <strong>{item.zone}</strong>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
