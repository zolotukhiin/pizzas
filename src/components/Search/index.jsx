import React, { useCallback, useContext, useRef, useState } from 'react'
import styles from './index.module.scss'
import { IoSearchSharp, IoClose } from "react-icons/io5";
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';


const Search = () => {

  const {searchValue, setSearchValue} = useContext(SearchContext);

  const [value, setValue] = useState('');

  // lodash debounce // use callback - сохранение ссылки на функцию
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  // use ref - take a dom element
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <div className={styles.root}>
        <IoSearchSharp className={styles.icon}/>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className={styles.input}
          placeholder='Поиск пиццы...'
        />
        {
          searchValue && (
            <IoClose onClick={onClickClear} className={styles.clearIcon}/>
          )
        }
    </div>
  )
}

export default Search
