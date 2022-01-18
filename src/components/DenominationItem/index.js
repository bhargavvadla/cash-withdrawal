import './index.css'
import {Component} from 'react'

class DenominationItem extends Component {
  render() {
    const {value, reduceFunction} = this.props
    const reduceAmount = () => {
      reduceFunction(value)
    }

    return (
      <li>
        <button
          className="denomination_btn"
          type="button"
          onClick={reduceAmount}
        >
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
