import React from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import classes from './DialogSummary.css';

const dialogSummary = (props) => (
    <Aux>
        <form className={classes.Decor}>
            <div className={classes.FormLeftDecoration}></div>
            <div className={classes.FormRightDecoration}></div>
            <div className={classes.Circle}></div>
            <div className={classes.FormInner}>
                <h3>Внести трату</h3>
                <input type="text" placeholder="Название категории траты"/>
                <input type="text" placeholder="Название траты"/>
                <input type="text" placeholder="Сумма"/>
                <div className={classes.Button} onClick={props.clicked}>Сохранить</div>
            </div>
        </form>
    </Aux>
);

export default dialogSummary;