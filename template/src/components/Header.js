import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
        <div>
            <ul>
                <li><Link to ="/">Home</Link></li>
            </ul>
        </div>
        );
    }
}



export default Header
