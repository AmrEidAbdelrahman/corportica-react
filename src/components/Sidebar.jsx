import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { useEffect } from 'react';
import { setFilteredData, setData, setLoading, setError } from '../store/dataSlice';
import Papa from 'papaparse';
import { useDispatch } from 'react-redux';
import Filters from '../components/Filters';
import { applyFilters } from '../utils/apply_filters';
import { useSelector } from 'react-redux';


const Sidebar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const extractFilters = (data) => {
    const filtersOptions = {
      years: [...new Set(data.map((item) => item.work_year))],
      remote_ratios: [...new Set(data.map((item) => item.remote_ratio))],
      salary_currencies: [...new Set(data.map((item) => item.salary_currency))],
      employment_types: [...new Set(data.map((item) => item.employment_type))],
      company_sizes: [...new Set(data.map((item) => item.company_size))],
    };
    return filtersOptions;
  };

  const handleFileUpload = async () => {
    
    if (!file) return;

    if (file) {
      Papa.parse(file, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
              dispatch(setData(result.data));
              dispatch(setFilteredData(result.data));
              const filtersOptions = extractFilters(result.data);
          },
      });
    }
  };

  return (
    <aside className="w-64 bg-gray-800 text-black p-4 space-y-4">
      <div className="text-xl font-bold">Datasets</div>
      <div className="mt-4">
        { !data?.length && 
          <form onSubmit={(e) => { e.preventDefault(); handleFileUpload(); }}>
              <input type="file" accept=".csv" onChange={handleFileChange} />
              <button type="submit">Upload</button>
          </form>
        }
        {data?.length > 0 &&       
          <Filters filtersOptions={extractFilters(data)} />
        }
      </div>
    </aside>
  );
};

export default Sidebar;
