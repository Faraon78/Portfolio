import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Maincontent from './Maincontent';
import './index.css'
import './light.css'
import './dark.css'

class TodoList extends React.Component {
      
    state = {
      selectedLang:1,      //выбранный язык 1-английский, 2-русский
      ifThemeDark:false    // false - светлая тема оформления, true - темная тема
    }

    switchThemes = () => {      
      if (this.state.ifThemeDark){
        this.setState({ifThemeDark:false}) 
        
      }
      else
        this.setState({ifThemeDark:true})
      
    }  
    switchLang = (id) => {      
      if (id=='1eng'){
        this.setState({selectedLang:1}) 
      }
      else if(id=='2ru')
        this.setState({selectedLang:2})   
    }  
    
  
    render() {
      
      let titles;
      if(this.state.selectedLang==1){
          titles=require('./langEnglish.json');
      } else if(this.state.selectedLang==2) {
          titles=require('./langRussian.json');
      } 
      let theme;
      let titleSwitch
      if(!this.state.ifThemeDark){
          theme = 'light';
          titleSwitch=titles.titleName2;
       } else if (this.state.ifThemeDark){
          theme = 'dark';
          titleSwitch=titles.titleName3
     }    
     let allNoteList
     if(!localStorage.todoList){allNoteList=null}
     else allNoteList=JSON.parse(localStorage.todoList)

    return (
        <div className={theme}> 
            <Header className='header'  lang={this.state.selectedLang} titleName1={titles.titleName1} titleSwitch={titleSwitch} 
            cbswitchThemesClick={this.switchThemes} cbswitchLangClick={this.switchLang}/>
            <Maincontent className='main' titles={titles} allNoteList={allNoteList}/> 
           <Footer className='footer' titleName4={titles.titleName4}/>     
        </div>        
      )  
    }
  }
  
  export default TodoList