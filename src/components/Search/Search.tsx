import styles from './Search.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';
import { SearchProps } from './Searchprops';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search({isValid = true, className, ...props}:SearchProps, ref){

	return (
		<div className={styles['input-wrapper']}>
			<input ref={ref} className={cn(styles['input'], className,{
				[styles['isvalid']]: isValid
			})} {...props} />
			<img className={styles['icon']} src="/search-icon.svg" alt="Иконка лупы" />
		</div>
		
	);
});

export default Search;