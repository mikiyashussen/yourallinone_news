import React, { Component } from 'react'

import './CheckBox.css'

class CheckBox extends Component {

    render() {
       const { news, onBoxClick } = this.props;

        return (
            <div>
                 <input type="checkbox"
                        className="checkbox"
                        value={news}
                        key={news}
                        style={{ marignRight: '0.5em'}}
                        onChange={onBoxClick}
                    />
                <label >
                     {news}
                </label>
               
               
               
            </div>
        )
    }
}

export default CheckBox;


