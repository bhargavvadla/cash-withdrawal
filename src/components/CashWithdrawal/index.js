import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
// import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  onButtonClick = value => {
    const {amount} = this.state
    if (amount - value >= 0) {
      this.setState(prev => ({amount: prev.amount - value}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="app_container">
        <div className="counter_app">
          <div className="name_container">
            <div className="profile_pic">BV</div>
            <h1 className="name">Bhargav Vadla</h1>
          </div>
          <div className="balance_container">
            <p className="balance_title">Your Balance</p>
            <div className="balance_rupees_container">
              <p className="balance_rupees">{amount}</p>
              <p className="balance_rupees_description">In Rupees</p>
            </div>
          </div>
          <div className="app_main_container">
            <p className="app_title">Withdraw</p>
            <p className="app_description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="btn_container">
              {denominationsList.map(e => (
                <DenominationItem
                  key={e.id}
                  value={e.value}
                  reduceFunction={this.onButtonClick}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
