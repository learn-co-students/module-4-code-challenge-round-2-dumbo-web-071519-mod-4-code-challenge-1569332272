import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import Search from './Search'

class AccountContainer extends Component {

  state ={
    transactions: [],
    searchTerm: "",
    sortTerm: "All"
  }


  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(transactions => {

        this.setState({transactions: transactions})
      })
  }


  

  

  handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    this.setState({ searchTerm })
  }

  handleRadio = () => {
    const sortTerm = this.state.sortTerm
    this.setState({ sortTerm })
    console.log(this.state.sortTerm)
  }

  render() {
    // console.log(this.state.transactions)
    const {searchTerm, sortTerm} = this.state
    const transaction = this.state.transactions.filter(t=> { return t.description.toLowerCase().includes(searchTerm) || t.category.toLowerCase().includes(sortTerm)})
    return (
      <div className="ui grid container">
        <CategorySelector handleRadio={this.handleRadio} sortTerm={sortTerm}/>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={transaction}/>
      </div>
    )
  }
}

export default AccountContainer



