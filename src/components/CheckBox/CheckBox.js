import React, { Component } from 'react'

 class CheckBox extends Component {

    render() {
       const { news } = this.props;

        return (
            <div>
                 <input type="checkbox"
                        value={news}
                        key={news}
                        style={{ marignRight: '0.5em'}}
                    />
                <label >
                     News
                </label>
               
               
               
            </div>
        )
    }
}

export default CheckBox;


