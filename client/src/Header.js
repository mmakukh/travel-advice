import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
export default

class TAHeader extends React.Component{
    render() {
        return( 
        <div className="ta-header">
             <div ta-header-child>Register</div>
             <div ta-header-child>Travel Advice</div>
             <div ta-header-child>Current date</div>
        </div>
        );
    }
}
