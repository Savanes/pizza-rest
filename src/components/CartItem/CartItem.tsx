
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { CartItemProps } from './CartItem.props';

function CartItem ({id, name, image, price, count}:CartItemProps){

	const dispatch = useDispatch<AppDispath>();

	const increase = () => {
		dispatch(cartActions.add(id));
	};

	const descrease = () => {
		dispatch(cartActions.remove(id));
	};

	const remove = () => {
		dispatch(cartActions.delete(id));
	};

	return(
		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${image}')` }}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{name}</div>
				<div className={styles['price']}>{price}&nbsp;₽</div>
			</div>

			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={descrease}>
					<img src="/minus.svg" alt="Удалить из корзины" />
				</button>
				<div className={styles['number']}>{count}</div>
				<button className={styles['plus']} onClick={increase}>
					<img src="/plus.svg" alt="Добавить в корзину" />
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src="/delete.svg" alt="Удалить все" />
				</button>
			</div>
		</div>  
	);
}

export default CartItem;