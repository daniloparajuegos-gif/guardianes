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
  return (
    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-6">
      <select
        value={filters.discoveryState}
        onChange={(e) => setFilters({ ...filters, discoveryState: e.target.value as any })}
        className="flex-1 py-2 px-3 rounded-xl bg-[#0f1712] text-white border border-[#2c3e30] outline-none text-xs sm:text-sm font-medium cursor-pointer"
      >
        <option value="all">Todos los objetos</option>
        <option value="discovered">Descubiertos</option>
        <option value="undiscovered">Por descubrir</option>
      </select>

      <select
        value={filters.rarity}
        onChange={(e) => setFilters({ ...filters, rarity: e.target.value as any })}
        className="flex-1 py-2 px-3 rounded-xl bg-[#0f1712] text-white border border-[#2c3e30] outline-none text-xs sm:text-sm font-medium cursor-pointer"
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
        className="flex-1 py-2 px-3 rounded-xl bg-[#0f1712] text-white border border-[#2c3e30] outline-none text-xs sm:text-sm font-medium cursor-pointer"
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
