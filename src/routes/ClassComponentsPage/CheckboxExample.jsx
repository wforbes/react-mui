import React from 'react'
import PropTypes from 'prop-types'

class CheckboxExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.initialChecked
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.setState((state) => ({ checked: !state.checked }))
  }

  getStatus() {
    if (this.props.strongStatus) {
      return (<strong>{this.state.checked.toString()}</strong>)
    }
    return this.state.checked.toString();
  }

  render() {
    return (
      <div style={ this.props.style }>
        <label>
          <input
            type='checkbox' 
            checked={this.state.checked}
            onChange={() => this.onChange()}
          />
          {this.props.labelText}
        </label>
        <p>
          {this.props.statusText} {this.getStatus()}
        </p>
      </div>
    )
  }
}

CheckboxExample.defaultProps = {
  style: {},
  initialChecked: false,
  labelText: "default-label",
  statusText: "default-status: ",
  strongStatus: false
}

CheckboxExample.propTypes = {
  style: PropTypes.object.isRequired,
  initialChecked: PropTypes.bool.isRequired,
  labelText: PropTypes.string.isRequired,
  statusText: PropTypes.string.isRequired,
  strongStatus: PropTypes.bool.isRequired
}

export default CheckboxExample
