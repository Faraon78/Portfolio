import React from 'react';
import PropTypes from 'prop-types';

class Noterow extends React.Component {
    static propTypes = {
        titles:PropTypes.object,
    };
    state = {
      noteList:this.props.noteList,
      selectedPagesNum:1,
      selectedTitleNote:null,
      
    }
    deleteNote = (EO) => {
      EO.stopPropagation()
      this.props.cbDeleteNote(this.props.id)
    }
    ifChecked= (EO) => {
      if(EO.checked){
        getElementByTagName
      }
    }
    selectedNote = () => {
      this.props.cbselectedNote(this.props.id)
    }
    render() {
      let starEmpty='../components/image/star2.png';
        let starFull='../components/image/star3.png';
        let iconStar1;
        let iconStar2;
        let iconStar3;
        if(this.props.prior==0){
            iconStar1=starEmpty;
            iconStar2=starEmpty;
            iconStar3=starEmpty;
        }else if(this.props.prior==1){
            iconStar1=starFull;
            iconStar2=starEmpty;
            iconStar3=starEmpty;
        }
        else if(this.props.prior==2){
            iconStar1=starFull;
            iconStar2=starFull;
            iconStar3=starEmpty;
        }if(this.props.prior==3){
            iconStar1=starFull;
            iconStar2=starFull;
            iconStar3=starFull;
        }
        return (
            <tr key={this.props.id} className='noteRow' id={this.props.id} onClick={this.selectedNote}>
               
                <td className ='table-noteTitle'> {this.props.title}</td>
                <td className ='table-noteDataend'>{this.props.dataEnd}</td>
                <td className='table-notePrior'>
                  <div className='add-star-list'><img  src={iconStar1} /></div>
                  <div className='add-star-list'><img   src={iconStar2} /></div>
                  <div className='add-star-list'><img  src={iconStar3} /></div>            
                </td>
                <td >
                  <button className = 'table-delete' onClick={this.deleteNote}>{this.props.titles.titleName15}</button>
                </td>
              </tr>
            )
            
  }
  
  }
  const mapStateToProps = function (state) {
    return {
      // весь раздел Redux state под именем order будет доступен
      // данному компоненту как this.props.order
      order: state.order,
    };
  };

    export default Noterow