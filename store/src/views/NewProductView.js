import React, { Component } from "react";

import { FormattedMessage } from "react-intl";

import { ProductService } from "../services/ProductService";

class NewProductView extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            description: "",
            price: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { target } = event,
            { name, value } = target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const newProduct = this.state;

        if(newProduct.description && newProduct.price) {
            ProductService.create(newProduct);
            this.setState({
                image: "",
                description: "",
                price: ""
            })
        }
    }

    render() {
        const { state } = this;

        return (
            <div>
                <h1>
                    <FormattedMessage defaultMessage="New Product" id="product.new.title" />
                </h1>
                <form className="product-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label><FormattedMessage defaultMessage="Image" id="product.new.image" /></label>
                        <input name="image" type="text" value={state.image} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label><FormattedMessage defaultMessage="Description" id="product.new.description" /></label>
                        <input name="description" type="text" value={state.description} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label><FormattedMessage defaultMessage="Price" id="product.new.price" /></label>
                        <input name="price" type="text" value={state.price} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit"><FormattedMessage defaultMessage="Create Product" id="product.new.create" /></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewProductView;