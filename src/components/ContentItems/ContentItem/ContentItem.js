import React from 'react';
import classes from './ContentItem.css';

const contentItem = (props) => (
    <div
        className={classes.ContentItem}
        onClick={props.clicked}>
        <div className={classes.PriceContainer}>
            <div className={classes.CountName}>{props.accountName}</div>
            <div className={classes.ExpenseName}>{props.expenseName}</div>
            <div className={classes.ExpenseCategoryName}>{props.expenseCategory}</div>
        </div>
        <div className={classes.ExpenseAmount}>{props.expenseAmount} грн</div>
    </div>
);

export default contentItem;