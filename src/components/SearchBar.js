import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
      this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
      event.preventDefault(); //makes sure that the page doen't automatically refresh

      this.props.onTermSubmit(this.state.term); //calls the prop everytime the user submits the form
                                                //Tells the parent component what the current search term is
    };

    render(){
        return (
        <div className="search-bar ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                  <label>Video Search</label>
                  <input type="text" 
                  value={this.state.term}
                  onChange={this.onInputChange}
                   />
              </div>
          </form>
        </div>
        );
    }
}

export default SearchBar;