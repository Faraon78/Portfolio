import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    static propTypes = {
        lang:PropTypes.number,
        titleName1:PropTypes.string,
        titleSwitch:PropTypes.string
    };
    switchThemesClick = (EO) => {
        this.props.cbswitchThemesClick(this.props.titleSwitch);        
      }
    switchLangClick = (EO) => {
        this.props.cbswitchLangClick(EO.target.id);        
      }
    
    render() {
        return (
            <div className='header'>
                <div className='switchTheme'>
                    <button className='switchTheme-button' onClick={this.switchThemesClick}>{this.props.titleSwitch}</button>
                </div>
                <h1 className='headerTitle'>{this.props.titleName1}</h1>
                <div className='switchLang'>
                <button className='switchLang-button' id='1eng' onClick={this.switchLangClick}>En</button>
                <button className='switchLang-button' id='2ru' onClick={this.switchLangClick}>Ru</button>
                </div>
            </div>
            
        )
    }
}
export default Header;
