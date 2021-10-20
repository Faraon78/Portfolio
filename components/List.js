import React from 'react';
import PropTypes from 'prop-types';

import Noterow from './Noterow';

class List extends React.Component {
    static propTypes = {
        titles:PropTypes.object,
        noteList:PropTypes.array,
        selectedPagesNum:PropTypes.number
    };
    state = {
      noteList:this.props.noteList,
      selectedPagesNum:1,
      selectedTitleNote:null,
      filteredTitle:'',
      filteredList:''
    }

    deleteRow = (id) => {
      this.props.cbDeleteRow(id)
    }
    selectedNoteId= (id) => {
      
      this.props.cbSelectedNoteId(id)
    }

    sortRow = (EO) => {
      
      let sortNoteList=this.state.noteList
      if(EO.target.value=='sortbyDate'){
        sortNoteList.sort((a,b) => new Date( a.dataendNote)-new Date(b.dataendNote))
      } else if (EO.target.value=='sortbyPrior'){
        sortNoteList.sort((a,b) => b.priorNote-a.priorNote)
      } else if (EO.target.value=='noSort'){
        sortNoteList.sort((a,b) => {
        if (a.id > b.id) return 1; 
        if (a.id == b.id) return 0; 
        if (a.id < b.id) return -1;})
      }
      this.setState({noteList:sortNoteList})
    }
    selectPages = (EO) => {
      
      this.setState({selectedPagesNum:EO.target.value})
    }
    filterTitle = (EO) => {  
      this.setState( { filteredTitle:EO.target.value} );
      let filterArr=this.state.noteList
      if(EO.target.value){
      let line=EO.target.value.toLowerCase()
      
      if(line){
        filterArr=filterArr.filter( item => item.titleNote.toLowerCase().includes(line) );
      }
     }   
      this.setState( { filteredList:filterArr});
      
    }

    render() {
      let currentList
      if(this.state.filteredList){
        currentList=this.state.filteredList
      } else currentList=this.state.noteList
      let listLength=currentList.length;
        let pages=Math.ceil(listLength/10);

        let pagesCount=[];
        for(let p=1; p<=pages;p++){
            let count=<li value={p} onClick={this.selectPages} key={p} id={p}>{p}</li>;
            pagesCount.push(count);
        }
        
        let itemPageStart=Number((this.state.selectedPagesNum-1)*10);
        let itemPageEnd=(this.state.selectedPagesNum*10);
        
        let itemNote=currentList.slice(itemPageStart,itemPageEnd);
        let itemNotePage=itemNote.map(v =>
            
            <Noterow note={v} key={v.id} id={v.id} title={v.titleNote} dataEnd={v.dataendNote} 
            prior={v.priorNote} cbselectedNote={this.selectedNoteId} titles={this.props.titles} cbDeleteNote={this.deleteRow}/>
            );  
          
        
     
    return (
      <div>
        <div className='filtrsortList'> 
        <label>{this.props.titles.titleName17}
          <select className='sort'  onChange={this.sortRow}> 
            <option value='noSort' id='s0' ></option>
            <option value='sortbyDate' id='s1'>{this.props.titles.titleName8}</option>
            <option value='sortbyPrior' id='s2' >{this.props.titles.titleName9}</option>
          </select>
          </label>
          
          
          <span className='labelSort'>{this.props.titles.titleName20}</span>
          <label className='sortbyTitle'>{this.props.titles.titleName6}
              <input type='text' onChange={this.filterTitle} ></input>
          </label>
          
        </div>
      <ul className='pagesCount'>{this.props.titles.titleName14} {  pagesCount  }</ul>
       
      <table className='table'>         
         <tbody className='tableRow'>{itemNotePage}</tbody>      
      </table>
   </div> 
      )  
    }
  }
  
  
  
  export default List