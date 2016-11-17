const React = require('react')

class Keypad extends React.Component{
  pw(){
    console.log("Entering password...")
  }
  render(){
    return(
      <input type="password" onKeyUp={this.pw}></input>
    )
  }
}

module.exports = Keypad
