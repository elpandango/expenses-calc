import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import ContentItems from '../../components/ContentItems/ContentItems';

class MainContent extends Component {
    state = {
        expenses: [
            {
                accountName: 'base account',
                expenseName: 'house buing',
                expenseCategory: 'daily expenses',
                expenseAmount: 1200
            },
            {
                accountName: 'base account',
                expenseName: 'car wash',
                expenseCategory: 'daily expenses',
                expenseAmount: 500
            },
            {
                accountName: 'base account',
                expenseName: 'hawaii vacation tickets',
                expenseCategory: 'holiday expenses',
                expenseAmount: 13500
            }
        ]
    };

    render() {
        return (
            <Aux>
                <ContentItems expenses={this.state.expenses} />
            </Aux>
        );
    }
}

export default MainContent;