import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
    static propTypes = {
        titleName4:PropTypes.string,
    };
        
    render() {
        return (
            <div className='footer'>
                <h3 className='footerTitle'>{this.props.titleName4} 2021</h3>
            </div>
            
        )
    }
}
export default Footer;