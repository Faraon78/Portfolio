import React from 'react';
import PropTypes from 'prop-types';

class Viewing extends React.Component {
    static propTypes = {
        titles:PropTypes.object,
    };

    addTask =() => {  
        this.props.cbAddTask()
    }
    editTask =() => {  
        this.props.cbEditTask()
    }
    deleteTask =() => {  
        this.props.cbDeleteTask(this.props.note.id)
    }
    
    

    render() {
        let starEmpty='../components/image/star2.png';
        let starFull='../components/image/star3.png';
        let iconStar1;
        let iconStar2;
        let iconStar3;
        if(this.props.note.priorNote==0){
            iconStar1=starEmpty;
            iconStar2=starEmpty;
            iconStar3=starEmpty;
        }else if(this.props.note.priorNote==1){
            iconStar1=starFull;
            iconStar2=starEmpty;
            iconStar3=starEmpty;
        }
        else if(this.props.note.priorNote==2){
            iconStar1=starFull;
            iconStar2=starFull;
            iconStar3=starEmpty;
        }if(this.props.note.priorNote==3){
            iconStar1=starFull;
            iconStar2=starFull;
            iconStar3=starFull;
        }
             
    return (
        <div className='viewTask'> 
            <h2>{this.props.note.titleNote}</h2>
            <h3>{this.props.titles.titleName7}</h3>
            <p>{this.props.note.descriptNote}</p>
            <h3>{this.props.titles.titleName8}</h3>
            <p>{this.props.note.dataendNote}</p>
            <h3>{this.props.titles.titleName9}</h3>
            <div className='table-notePrior'>
                  <div className='add-star-list'><img  src={iconStar1} /></div>
                  <div className='add-star-list'><img   src={iconStar2} /></div>
                  <div className='add-star-list'><img  src={iconStar3} /></div>            
            </div>
            <div className='view-button'>
                <button type='button' value='change' onClick={this.editTask}>{this.props.titles.titleName18}</button> 
                <button type='button' value='add' onClick={this.addTask}>{this.props.titles.titleName5}</button>
                <button type='button' value='delete' onClick={this.deleteTask}>{this.props.titles.titleName15}</button>
            </div>
        </div>        
      )  
    }
  }
  
  export default Viewing