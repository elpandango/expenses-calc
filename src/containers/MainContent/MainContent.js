import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import ContentItems from '../../components/ContentItems/ContentItems';
import DialogButton from '../../components/DialogButton/DialogButton';
import DialogSummary from '../../components/DialogSummary/DialogSummary';
import axios from '../../axios';
import Modal from "../../components/UI/Modal/Modal";

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
        ],
        showModal: false
    };

    componentWillMount() {
        axios.get('https://expenses-calc-8cbca.firebaseio.com/accountName.json')
            .then(response => {
                console.log(response.data);
                // this.setState({ingredients: response.data});
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true})
            });
    }

    onClickEditHandler = (index) => {
        alert(index);
    }

    dialogButtonHandler = () => {
        // const modal = this.state.showModal;
        this.setState({showModal: true});
        // alert(this.state.showModal);
    }

    dialogModalClosed = () => {
        this.setState({showModal: false});
    }

    addNewExpenseHandler = () => {
        alert('123');
        // const expenses = { ...this.state.expenses };
        //
        // expenses.push({
        //     accountName: 'bassdfsdfsfaccount',
        //     expenseName: 'hawaisdfsdf tickets',
        //     expenseCategory: '234234 expenses',
        //     expenseAmount: 344
        // });
        //
        // this.setState({expenses: expenses});

    }

    render() {
        return (
            <Aux>
                <ContentItems
                    expenses={this.state.expenses}
                    clicked={this.onClickEditHandler}/>

                <DialogButton clicked={this.dialogButtonHandler}/>
                <Modal
                    show={this.state.showModal}
                    modalClicked={this.dialogModalClosed}>
                    <DialogSummary clicked={this.addNewExpenseHandler}/>
                </Modal>
            </Aux>
        );
    }
}

export default MainContent;