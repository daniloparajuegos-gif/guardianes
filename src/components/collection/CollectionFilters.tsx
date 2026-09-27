import React from 'react';
import { ItemRarity, ItemZone } from '../../types';

export interface FilterState {
  rarity: ItemRarity | 'all';
  zone: ItemZone | 'all';
  discoveryState: 'all' | 'discovered' | 'undiscovered';
}

interface CollectionFiltersProps {
  filters: FilterState;
  setFilters: (f: FilterState) => void;
}

export const CollectionFilters: React.FC<CollectionFiltersProps> = ({ filters, setFilters }) => {
  const selectStyle = {
    padding: '8px 12px',
    borderRadius: '8px',
    backgroundColor: '#0f1712',
    color: '#fff',
    border: '1px solid #2c3e30',
    outline: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
      <select
        value={filters.discoveryState}
        onChange={(e) => setFilters({ ...filters, discoveryState: e.target.value as any })}
        style={selectStyle}
      >
        <option value="all">Todos los objetos</option>
        <option value="discovered">Descubiertos</option>
        <option value="undiscovered">Por descubrir</option>
      </select>

      <select
        value={filters.rarity}
        onChange={(e) => setFilters({ ...filters, rarity: e.target.value as any })}
        style={selectStyle}
      >
        <option value="all">Todas las rarezas</option>
        <option value="common">Común</option>
        <option value="rare">Raro</option>
        <option value="epic">Épico</option>
        <option value="legendary">Legendario</option>
      </select>

      <select
        value={filters.zone}
        onChange={(e) => setFilters({ ...filters, zone: e.target.value as any })}
        style={selectStyle}
      >
        <option value="all">Todas las zonas</option>
        <option value="Bosque y Sabana">Bosque y Sabana</option>
        <option value="Ciénagas y Caños">Ciénagas y Caños</option>
        <option value="Ríos y Minería">Ríos y Minería</option>
        <option value="Comunidad y Territorio">Comunidad y Territorio</option>
        <option value="Territorio Integrado">Territorio Integrado</option>
      </select>
    </div>
  );
};
