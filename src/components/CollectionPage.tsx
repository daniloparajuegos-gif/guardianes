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
    <div className="min-h-screen bg-[#0f1712] flex flex-col">
      
      <div className="flex-1 px-3 sm:px-6 py-4 sm:py-8 max-w-6xl mx-auto w-full">
        <h1 className="text-white font-display font-black text-2xl sm:text-3xl mb-4 sm:mb-6">
          Colección del Territorio
        </h1>
        
        <CollectionProgress discoveredCount={discoveredCount} totalCount={30} />
        
        <CollectionFilters filters={filters} setFilters={setFilters} />
        
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs sm:text-sm">
            No se encontraron objetos con los filtros seleccionados.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-4">
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
