import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import axios from ' axios;
import { getCurriculum,createCurriculum,deleteCurriculum,updateCurriculum } from './actions';
import { connect } from 'react-redux';


class App extends Component {
   state = {
     id:'',
     name:'',
     edit:''
   }

   componentDidmMount(){
     this.props.getCurriculum();
   }
   handleDelete = (e) => {
     const {id} = e.target;
     this.props.deleteCurriculum(id);
   }
   handleChange =(e)=>{
     var name = e.target.name,
     value = e.target.value;
     this.setState({[name] : value});
   }
   handleSubmit = (e) => {
     e.preventDefault();
     const {name} = this.state;
     this.props.createCurriculum({
       name : name
     });
     this.setState({
       name : ''
     });
   }
   handleUpdate = (e) => {
     e.preventDefault();
     const {id,edit} = this.state;
     this.props.updateCurriculum(id,{
       name:edit
     });
     this.setState({
       name : '',
       edit: ''
     });
   }

  render() {
    const {curriculum} = this.props;
    return (
      <div>
      <h1>College of Computing</h1>
      <ul>
{
curriculum.map((curriculums , index) => {
return (





  <li key={curriculums.id}>
{curriculums.id + '. ' + curriculums.name + ' '}
<button id={curriculums.id} onClick={this.handleDelete} >Delete</button>
</li>
)
})
}
      </ul>
      <h1>Add Curriculum</h1>
      <form onSubmit={this.handleSubmit}>
      <input type="text"  name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name}/>
      <button type="submmit" >Add</button>
      </form>

      <h1>Edit Curriculum</h1>
      <form onSubmit={this.handleUpdate}>
      <input type="text" name="id" placeholder="ID" onChange={this.handleChange} value={this.state.id}/><br/>
      <input type="text" name="edit" placeholder="Name" onChange={this.handleChange} value={this.state.edit}/><br/>
      <button type="submit" >Update</button>
      </form>

      </div>
    );
  }
}

const mapStatetoProps = ({ curriculum }) => {
  return { curriculum, }
}

export default connect(mapStatetoProps , { getCurriculum, createCurriculum,deleteCurriculum,updateCurriculum})(App);
