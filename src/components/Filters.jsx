import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilteredData } from '../store/dataSlice';
import { applyFilters } from '../utils/apply_filters';


const Filters = ({ filtersOptions }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [filters, setFilters] = useState({
    years: [],
    remote_ratios: [],
    salary_currencies: [],
    employment_types: [],
    company_sizes: [],
  });

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const newFilters = { ...filters };

    if (checked) {
      newFilters[name] = [...newFilters[name], value];
    } else {
      newFilters[name] = newFilters[name].filter((item) => item !== value);
    }

    console.log("new filters 1 => ", newFilters);

    setFilters(newFilters);
    const new_data = applyFilters(data, newFilters);
    dispatch(setFilteredData(new_data));

  };


  return (
    <div className="p-4 bg-gray-200 rounded-lg mb-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Year Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">Year</label>
          {filtersOptions?.years?.filter((year) => year !== null).map((year) => (
            <div key={year} className="flex items-center">
              <input
                type="checkbox"
                name="years"
                value={year}
                checked={filters.years.includes(year?.toString())}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>{year}</span>
            </div>
          ))}
        </div>

        {/* Remote Ratio Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">Remote Ratio</label>
          {filtersOptions?.remote_ratios?.filter((ratio) => ratio != "%").map((ratio) => (
            <div key={ratio} className="flex items-center">
              <input
                type="checkbox"
                name="remote_ratios"
                value={ratio}
                checked={filters.remote_ratios.includes(ratio?.toString())}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>{ratio}%</span>
            </div>
          ))}
        </div>

        {/* Salary Currency Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">Salary Currency</label>
          {filtersOptions?.salary_currencies?.filter((currency) => currency != null).map((currency) => (
            <div key={currency} className="flex items-center">
              <input
                type="checkbox"
                name="salary_currencies"
                value={currency}
                checked={filters.salary_currencies.includes(currency)}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>{currency}</span>
            </div>
          ))}
        </div>

        {/* Employment Type Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">Employment Type</label>
          {filtersOptions?.employment_types?.filter((type) => type != null).map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="checkbox"
                name="employment_types"
                value={type}
                checked={filters.employment_types.includes(type)}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>{type}</span>
            </div>
          ))}
        </div>

        {/* Company Size Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">Company Size</label>
          {filtersOptions?.company_sizes?.filter((size) => size != null).map((size) => (
            <div key={size} className="flex items-center">
              <input
                type="checkbox"
                name="company_sizes"
                value={size}
                checked={filters.company_sizes.includes(size)}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>{size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
