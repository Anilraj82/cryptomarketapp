import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';

export class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptos: [],
            asc: 0
        };
    }

    componentDidMount() {
        var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=5';
        axios.get(url).then(response => {
            const cryptos = response.data;
            this.setState({
                cryptos: cryptos
            });
        })
    }

    shortByName(sortBy) {
        console.log("clicked");
        var data = [...this.state.cryptos];
        let asc = this.state.asc;
        asc = (asc + 1) % 3
        let num = asc === 1 ? 1 : -1;
        // data.sot((a,b) => a['price_usd'] - b['price_usd']);
        data.sort((a, b) => this.compare(a, b) * num);
        console.log("data sorted", data);
        if (sortBy !== 'name') {
            function compare(a, b) {
                return a[sortBy] - b[sortBy];
            }
        }

        this.setState({
            cryptos: data,
            asc
        })

    }

    compare(a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }


    render() {


        var data = this.state.cryptos;
        console.log(data);


        return (
            <div className="container-body">

                <table id="customers">
                    <tr>
                        <th onClick={() => this.shortByName('market_cap_usd')}>#</th>
                        <th onClick={() => this.shortByName('name')}>Name</th>
                        <th onClick={() => this.shortByName('market_cap_usd')}>Market Capitalization</th>
                        <th onClick={() => this.shortByName('price_usd')}>Price (USD)</th>
                        <th onClick={() => this.shortByName('total_supply')}>Volume(24h)</th>
                        <th onClick={() => this.shortByName('market_cap_usd')}>Circulating Supply</th>
                        <th onClick={() => this.shortByName('market_cap_usd')}>Change(24h)</th>
                    </tr>

                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.rank}</td>
                                <td>{item.name}</td>
                                <td>{item.market_cap_usd}</td>
                                <td>{item.price_usd}</td>
                                <td>{item.total_supply}</td>
                                <td>{item.total_supply}</td>
                                <td>{item.percent_change_24h}</td>
                            </tr>
                        )}
                </table>
            </div>
        );
    }
}
