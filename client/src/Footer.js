import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
export default

class TAFooter extends React.Component{
    render() {
        return( 
        <div className="ta-footer">
             <div ta-footer-child>thanks for visiting</div>
             <div ta-footer-child>find us on:</div>
             <div ta-footer-child>Travel Advice</div>
        </div>
        );
    }
}
