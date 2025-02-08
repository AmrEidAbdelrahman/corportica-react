const applyFilters = (data, filters) => {
    // return data
    return data.filter((item) => {
      return (
        (filters.years && (filters.years.length === 0 || filters.years.includes(item.work_year?.toString()))) &&
        (filters.remote_ratios && (filters.remote_ratios.length === 0 || filters.remote_ratios.includes(item.remote_ratio?.toString()))) &&
        (filters.salary_currencies && (filters.salary_currencies.length === 0 || filters.salary_currencies.includes(item.salary_currency?.toString()))) &&
        (filters.employment_types && (filters.employment_types.length === 0 || filters.employment_types.includes(item.employment_type?.toString()))) &&
        (filters.company_sizes && (filters.company_sizes.length === 0 || filters.company_sizes.includes(item.company_size?.toString())))
        
      );
    });
  };

export { applyFilters };
