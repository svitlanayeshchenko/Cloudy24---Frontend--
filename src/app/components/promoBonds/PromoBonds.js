import './PromoBonds.css';
import React, { Component } from 'react';

class PromoBonds extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
    }

    
    render() {
        return (
            <div className="promo-bonds">
                <div className="under-development-bonds">
                    Розділ "Облігації"<br /> знаходиться у стадії розробки
                </div>
            </div>
        );
    }
}

export default PromoBonds;