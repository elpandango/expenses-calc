import React from 'react';
import ContentItem from './ContentItem/ContentItem';

const contentItems = (props) => {

    return props.expenses.map((expenseItem, index) => {
        return <ContentItem
            key={index}
            accountName={expenseItem.accountName}
            expenseName={expenseItem.expenseName}
            expenseCategory={expenseItem.expenseCategory}
            expenseAmount={expenseItem.expenseAmount}
            clicked={() => props.clicked(index)}
        />
    })
};

export default contentItems;