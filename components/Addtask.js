import React from 'react';
import PropTypes from 'prop-types';

class Addtask extends React.Component {
    static propTypes = {
        titles:PropTypes.object,
    };
      
    state = {
        dealName:"", 
        dealDescr:'',
        dealData:'',   
        dealPrior:0,
        errorTitle:'',
        errorData:''  
    }

    setTitle =(EO) => {
        this.setState({dealName:EO.target.value})
    }
    setDescript=(EO) => {
        this.setState({dealDescr:EO.target.value})
    }
    setDate =(EO) => {
        this.setState({dealData:EO.target.value})
      }
    setPriority =(EO) => {
        if (EO.target.id=='star1'&&this.state.dealPrior!=1){
            this.setState({dealPrior:1})
        }else if (EO.target.id=='star1'&&this.state.dealPrior==1){
            this.setState({dealPrior:0})
        }else if (EO.target.id=='star2'&&this.state.dealPrior!=2){
            this.setState({dealPrior:2})
        }else if (EO.target.id=='star2'&&this.state.dealPrior==2){
            this.setState({dealPrior:1})
        }else if (EO.target.id=='star3'&&this.state.dealPrior!=3){
            this.setState({dealPrior:3})
        }else if (EO.target.id=='star3'&&this.state.dealPrior==3){
            this.setState({dealPrior:2})
        }
    }
    resetNote =() => {
        this.setState({dealName:'', 
            dealDescr:'',
            dealData:'',   
            dealPrior:0,
            errorTitle:'',
            errorData:''  })
    }
    cancelAdd =() => {
        this.setState({dealName:'', 
            dealDescr:'',
            dealData:'',   
            dealPrior:0,
            errorTitle:'',
            errorData:''  })
        this.props.cbCancelEdit()
    }
    
    trySaveNote = () => {
       
        if (!this.state.dealName){
            this.setState({errorTitle:this.props.titles.titleName12})
        }else if (!this.state.dealData){
            this.setState({errorData:this.props.titles.titleName13})
        }else {
            if(this.state.dealName||!this.state.dealDescr){
                this.setState({dealDescr:this.state.dealName})
            }
            this.setState({errorTitle:'', errorData:''})
            
            let note={
                titleNote:this.state.dealName,
                descriptNote:this.state.dealDescr||this.state.dealName,
                dataendNote:this.state.dealData,
                priorNote:this.state.dealPrior
            }
            
            this.setState({dealName:'', 
            dealDescr:'',
            dealData:'',   
            dealPrior:0,
            errorTitle:'',
            errorData:''  })
            this.props.cbaddNote(note)
        }

    }

    render() {
        let starEmpty='../components/image/star2.png';
        let starFull='../components/image/star3.png';
        let iconStar1;
        let iconStar2;
        let iconStar3;
        if(this.state.dealPrior==0){
            iconStar1=starEmpty;
            iconStar2=starEmpty;
            iconStar3=starEmpty;
        }else if(this.state.dealPrior==1){
            iconStar1=starFull;
            iconStar2=starEmpty;
            iconStar3=starEmpty;
        }
        else if(this.state.dealPrior==2){
            iconStar1=starFull;
            iconStar2=starFull;
            iconStar3=starEmpty;
        }if(this.state.dealPrior==3){
            iconStar1=starFull;
            iconStar2=starFull;
            iconStar3=starFull;
        }
      
    return (
        <div className='addtask'> 
            <h2>{this.props.titles.titleName5}</h2>
            <form>
            <div className='addRow'>
                <span className="addTitle">{this.props.titles.titleName6}</span>
                <input type="text" className='field' placeholder={this.props.titles.titleName6} onChange={this.setTitle}></input>
                <span className='errorRow'>{this.state.errorTitle}</span>
            </div>
            
            <div className='addRow'>
                <span className="addTitle">{this.props.titles.titleName7}</span>
                <textarea  className='field' placeholder={this.props.titles.titleName7} rows='10' onChange={this.setDescript}></textarea>
            </div>
            <div className='addRow'>
                <span className="addTitle">{this.props.titles.titleName8}</span>
                <input type="date" onChange={this.setDate}></input> <span className='errorRow'>{this.state.errorData}</span>
            </div>
            <div className='addRow'><span className="addTitle">{this.props.titles.titleName9}</span>
                <div className='add-star'><img id='star1' src={iconStar1} onClick={this.setPriority}/></div>
                <div className='add-star'><img  id='star2' src={iconStar2} onClick={this.setPriority}/></div>
                <div className='add-star'><img id='star3' src={iconStar3} onClick={this.setPriority}/></div>
            
            </div>
            <div className='addButton'>
                <button type='button' value='save' onClick={this.trySaveNote}>{this.props.titles.titleName10}</button> 
                <button type='reset' value='reset' onClick={this.resetNote}>{this.props.titles.titleName11}</button>
                <button type='button' value="cancel" onClick={this.cancelAdd}>{this.props.titles.titleName19}</button>
            </div></form>
        </div>        
      )  
    }
  }
  
  export default Addtask