import React from 'react';

export class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  
  handleClickOutside(event) {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.props.onClickOutside && this.props.onClickOutside();
    }
  };
    
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this), true);
  }
  
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  };
  
  render() {
    if(!this.props.show)
      return null; 
    return (
      <div ref={this.ref} className='info-box'>
        {this.props.message}
      </div> );
  }
}
