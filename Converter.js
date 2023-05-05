import React , {Component} from 'react';
import './App.css';
class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyFrom: 'USD',
            currencyTo: 'EUR',
            amount: 0,
            result:0,
            };
        }
    
    handleCurrencyFromChange(event) {
        this.setState({ currencyFrom: event.target.value});
    }
    handleCurrencyToChange(event) {
        this.setState({ currencyTo: event.target.value});
    }

    handleAmountChange = (event) => {
        this.setState({ amount: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <from onSubmit={this.handleSubmit}>
                <label>
                    Convert from:
                    <select value={this.state.currencyFrom} onChange={this.handleCurrencyFromChange}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </label>
                <label>
                    Convert to:
                    <select value={this.state.currencyTo} onChange={this.handleCurrencyToChange}>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                    </select>
                </label>
                <label>
                    Amount:
                    <input type="number" value={this.state.amount} onChange={this.handleAmountChange} />
                </label>
                <button type="submit">Convert</button>
                <p>Result: {this.state.result}</p>
            </from>
        );
    }
}

export default Converter;
