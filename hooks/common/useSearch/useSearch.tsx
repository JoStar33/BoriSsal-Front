import { useState } from "react";
import styles from './use_search.module.scss';

export const useSearch = () => {
  const [searchInfo, setSearchInfo] = useState<string>('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInfo(e.target.value);
  };
  const renderSearch = () => (
    <div className={styles.search_container}>
      <label htmlFor="search_goods">검색:</label>
      <input id='search_goods' type="text" onChange={handleSearch}/>
    </div>
  );
  return {
    searchInfo,
    renderSearch
  }
}