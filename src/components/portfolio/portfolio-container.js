import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };

        // console.log("Portfolio container has rendered");
        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfoiloItems();
        } else {
            {
                this.getPortfoiloItems(filter);
            }
        }
    }

    getPortfoiloItems(filter = null) {
        axios
            .get("https://sombatmayer.devcamp.space/portfolio/portfolio_items")
            .then(response => {
                // handle success
                if (filter) {
                    this.setState({
                        data: response.data.portfolio_items.filter(item => {
                            return item.category === filter;
                        })
                    });
                } else {
                    this.setState({
                        data: response.data.portfolio_items
                    });
                }

            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            // debugger;
            //console.log("item_data", item);
            return <PortfolioItem key={item.id} item={item} />;
        });
    }


    // handlePageTitleUpdate() {
    //     this.setState({
    //         pageTitle: "Something Else"
    //     });
    // }

    componentDidMount() {
        this.getPortfoiloItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter('eCommerce')}>
                        eCommerce
                    </button>

                    <button className="btn" onClick={() => this.handleFilter('Scheduling')}>
                        Scheduling
                    </button>

                    <button className="btn" onClick={() => this.handleFilter('Enterprise')}>
                        Enterprise
                    </button>

                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>
                        All
                    </button>
                </div>

                <div className="portfolio-items-wrapper">{this.portfolioItems()}


                </div>
            </div>
        );
    }
}
