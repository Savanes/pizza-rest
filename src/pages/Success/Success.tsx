import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Success.module.css';

export function Success(){

	const navigate = useNavigate();

	return (
		<div className={styles['success']}>
			<img src="/pizza-img.png" alt="изображение пиццы" />
			<div className={styles['text']}>Ваш заказ успешно оформлен!</div>
			<Button appearence='big' onClick={() => navigate('/')}>Сделать новый</Button>
		</div> 
	);
}

export default Success;