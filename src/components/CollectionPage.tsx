import React, { useState, useMemo } from 'react';
import { useGuardian } from '../context/GuardianContext';
import { COLLECTIBLES } from '../data/collectiblesData';
import { CollectibleItem } from '../types';
import { CollectionCard } from './collection/CollectionCard';
import { CollectionFilters, FilterState } from './collection/CollectionFilters';
import { CollectionProgress } from './collection/CollectionProgress';
import { CollectionDetailModal } from './collection/CollectionDetailModal';


export const CollectionPage: React.FC = () => {
  const { activeProfile } = useGuardian();
  const [selectedItem, setSelectedItem] = useState<CollectibleItem | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    rarity: 'all',
    zone: 'all',
    discoveryState: 'all'
  });

  const collection = activeProfile?.collection || {};
  const discoveredCount = Object.keys(collection).length;

  const filteredItems = useMemo(() => {
    return COLLECTIBLES.filter(item => {
      const isDiscovered = !!collection[item.id];
      
      if (filters.discoveryState === 'discovered' && !isDiscovered) return false;
      if (filters.discoveryState === 'undiscovered' && isDiscovered) return false;
      
      if (filters.rarity !== 'all' && item.rarity !== filters.rarity) return false;
      
      if (filters.zone !== 'all' && item.zone !== filters.zone) return false;
      
      return true;
    });
  }, [filters, collection]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f1712', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ flex: 1, padding: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h1 style={{ color: '#fff', margin: '0 0 24px 0', fontSize: '2rem' }}>Colección del Territorio</h1>
        
        <CollectionProgress discoveredCount={discoveredCount} totalCount={30} />
        
        <CollectionFilters filters={filters} setFilters={setFilters} />
        
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px', color: '#a0aab2' }}>
            No se encontraron objetos con los filtros seleccionados.
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '16px' 
          }}>
            {filteredItems.map(item => (
              <CollectionCard 
                key={item.id}
                item={item}
                entry={collection[item.id]}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedItem && (
        <CollectionDetailModal 
          item={selectedItem}
          entry={collection[selectedItem.id]}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};
