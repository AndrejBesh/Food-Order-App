import { Fragment } from "react/cjs/react.production.min"
import mealsImage from '../../assets/meals.jpg'
import classes from '../Layout/Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of meals' />
        </div>
    </Fragment>
}
export default Header