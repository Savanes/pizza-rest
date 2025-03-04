import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function ProductCard ({id, name, description, image, price, raring}:ProductCardProps){

	const dispatch = useDispatch<AppDispath>();

	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(id));
	};

	return(
		<Link to={`/product/${id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']} style={{backgroundImage: `url('${image}')`}}>
					<div className={styles['price']}>
						{price}&nbsp;
						<span className={styles['currency']}>₽</span>
					</div>
					<button className={styles['add-to-cart']} onClick={add}>
						<img src="/cart-button-icon.svg" alt="Добавить в корзину" />
					</button>
					<div className={styles['rating']}>
						{raring}&nbsp;
						<img src="/star-icon.svg" alt="Иконка звезды" />
					</div>
				</div>

				<div className={styles['footer']}>
					<div className={styles['title']}>{name}</div>
					<div className={styles['description']}>{description}</div>
				</div>
			</div>  
		</Link>
	);
}

export default ProductCard;