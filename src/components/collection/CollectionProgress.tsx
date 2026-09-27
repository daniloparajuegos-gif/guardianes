import React from 'react';

interface CollectionProgressProps {
  discoveredCount: number;
  totalCount: number;
}

export const CollectionProgress: React.FC<CollectionProgressProps> = ({ discoveredCount, totalCount }) => {
  const percentage = Math.round((discoveredCount / totalCount) * 100);

  return (
    <div style={{ backgroundColor: '#1a2920', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
        <div>
          <h2 style={{ margin: '0 0 4px 0', color: '#fff', fontSize: '1.25rem' }}>Progreso de la Colección</h2>
          <p style={{ margin: 0, color: '#a0aab2', fontSize: '0.875rem' }}>Objetos del territorio descubiertos</p>
        </div>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
          {discoveredCount} / {totalCount}
        </div>
      </div>
      
      <div style={{ width: '100%', height: '12px', backgroundColor: '#0f1712', borderRadius: '6px', overflow: 'hidden' }}>
        <div 
          style={{ 
            width: `${percentage}%`, 
            height: '100%', 
            backgroundColor: '#638A6B',
            transition: 'width 0.5s ease-out'
          }} 
        />
      </div>
    </div>
  );
};
