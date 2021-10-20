import React from 'react';
import PropTypes from 'prop-types';

import Addtask from './Addtask';
import List from './List';
import Viewing from './Viewing';
import Edittask from './Edittask';


class Maincontent extends React.Component {
    static propTypes = {
        titles:PropTypes.object,
    };
    state = {
        dealCardMode:1,      //что отображается справа: 1 - ввод новой задачи, 2- просмотр записи, 3 - редактирование
        allNoteList:this.props.allNoteList,
        taskView:''
        
    }
    addNote= (note) => {
        
        if(!this.state.allNoteList||this.state.allNoteList.length==0){
            
            let noteList=[];
            note.id=1
            noteList.push(note);
            localStorage.setItem("todoList", JSON.stringify(noteList))
            
            this.setState({allNoteList:noteList, taskView:note, dealCardMode:2 }) 
        }else{
            
            let noteList=this.state.allNoteList
            let idList=this.state.allNoteList.map(v=>v.id);
            
            let id=1;
            for (let i = 1; i < idList.length; ++i) {
            if (idList[i] > id) id = idList[i];
            }  
            
            note.id=id+1
            
            noteList.push(note);            
            this.setState({allNoteList:noteList, taskView:note, dealCardMode:2})
            localStorage.setItem("todoList", JSON.stringify(noteList))
            
        }         
    }    
    deleteRow= (id) => {
        
        this.setState({dealCardMode:1})
        let arr=this.state.allNoteList
        let index = arr.findIndex(item => item.id == id)
        let newNoteList=arr.splice(index,1)
        console.log(index, newNoteList)
        this.setState({taskView:"", allNoteList:arr})
        localStorage.setItem("todoList", JSON.stringify(arr))
    }
    selectNote= (id) => {
        let arr=this.state.allNoteList
        let index = arr.findIndex(item => item.id == id)
        let note=arr[index]
        this.setState({ dealCardMode:2, taskView:note}) 
    }
    addTaskFromView= () => {
        this.setState({taskView:"", dealCardMode:1})
    }
    editTaskFromView= () => {
        
        this.setState({dealCardMode:3})
    }
    editNote= (note) => {
        let arr=this.state.allNoteList
        let index = arr.findIndex(item => item.id == note.id)
        arr[index]=note
        this.setState({ dealCardMode:2, allNoteList:arr, taskView:note}) 
        localStorage.setItem("todoList", JSON.stringify(arr))
    }
    cancelEdit=() => {
        
        if (this.state.taskView==''){
            this.setState({dealCardMode:2,taskView:this.state.allNoteList[0]})
        }
        else this.setState({dealCardMode:2})
    }
    
    render() {
                
        return (
            <div className='wrap-main'>
                {(!localStorage.todoList||this.state.allNoteList.length==0)&& <h2>{this.props.titles.titleName16}</h2>}
                {(localStorage.todoList)&&<List className='list' titles={this.props.titles} noteList={this.state.allNoteList} 
                    cbDeleteRow={this.deleteRow}  cbSelectedNoteId={this.selectNote}/>}

                 {(this.state.dealCardMode==1) && <Addtask className='card' titles={this.props.titles} cbaddNote={this.addNote} cbCancelEdit={this.cancelEdit}/>} 
                 {(this.state.dealCardMode==2) && <Viewing className='card' titles={this.props.titles}  note={this.state.taskView} cbAddTask={this.addTaskFromView}
                    cbEditTask={this.editTaskFromView}  cbDeleteTask={this.deleteRow}/>} 
                 {(this.state.dealCardMode==3) && <Edittask className='card' titles={this.props.titles}  note={this.state.taskView} cbEditNote={this.editNote}
                 cbCancelEdit={this.cancelEdit}/>}
            </div>
            
        )
    }
}
export default Maincontent;
