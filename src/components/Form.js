import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
       this.state = {name: '',
                    URL:''}
    }

    // handleChange = event => {
      
    //         event.preventDefault()
           
    //         this.setState({ name: event.target.value ,
    //                         URL})
    // }

        handleName = event => {
            this.setState({name : event.target.value})
        }

        handleUrl = event => {
            this.setState({URL : event.target.value})
        }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        this.props.handleSubmit (this.state)
        
    }

    render() {

        return (
            <form>
              <label>
                  name
              </label>
            
            <input type="text"
          value={this.state.name}
          onChange={this.handleName}>
            

            </input>

            

            <label>
                URL
            </label>

            <input type="text"
          value={this.state.URL}
          onChange={this.handleUrl}>
            

            </input>
            <button onClick={this.onFormSubmit}>Submit!</button>



            </form>
        )
    
    }
}

export default Form;
