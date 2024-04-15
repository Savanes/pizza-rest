import { Await, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import { Suspense } from 'react';
import Button from '../../components/Button/Button';
import { cartActions } from '../../store/cart.slice';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import styles from './Product.module.css';

export function Product(){

	const data = useLoaderData() as { data: Product};
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const location = useLocation();


	const nav = () => {
		navigate('/');
	};

	const locationId = Number(location.pathname[9]);
	console.log(locationId);
	

	// добавить в корзину
	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(locationId));
		console.log(e);
	};



	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await
				resolve={data.data}
			>
				{({data}: {data: Product})=>(

					<div className={styles['product']}>	
						<div className={styles['product-header']}>
							<div className={styles['header']}>
								<button className={styles['back-button']} onClick={nav}>{'<'}</button>&nbsp;&nbsp;
								{data.name}
								
							</div>
							<div>
								<Button appearence='small' onClick={add}>В корзину</Button>

							</div>
						</div>


						<div className={styles['img-info']}>
							<div className={styles['image-wrap']}>
								<img className={styles['image']} src={data.image} alt="" />
							</div>

							<div className={styles['info']}>
								<div className={styles['price']}>
									Цена {data.price}
								</div>
								<div className={styles['rating']}>
									Рейтинг {data.rating}
								</div>
								{/* <div>
									{data.ingredients}
								</div> */}
							</div>
						</div>

					</div>
				)}
			</Await>
		</Suspense>
	</>;
}