import React, { useState } from 'react';
import { useFilter } from '../../store/useStore';
import DownIcon from '../../svg/DownIcon';

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export default function Filter() {
  const [hide, setHide] = useState<boolean>(true);
  const isHide = hide ? 'hidden' : '';
  const { filter, setFilter } = useFilter();

  const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setFilter(target.textContent || 'Filter by region');
    setHide(true);
  };

  return (
    <div className="text-xs text-texts-light dark:text-texts-dark w-full sm:w-40 relative ">
      <div
        onClick={() => setHide((p) => !p)}
        className="h-10 bg-elements-light dark:bg-elements-dark p-2 rounded cursor-pointer flex items-center justify-around shadow"
      >
        <p className="overflow-hidden">{filter}</p>
        <DownIcon />
      </div>
      <div
        className={`${isHide} z-10 absolute mt-1 bg-elements-light overflow-hidden dark:text-texts-dark dark:bg-elements-dark`}
        style={{ width: 'inherit' }}
      >
        {regions.map((item) => {
          return (
            <div
              key={item}
              onClick={handleChange}
              className="p-2 hover:border-backgrounds-light cursor-pointer hover:border"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
