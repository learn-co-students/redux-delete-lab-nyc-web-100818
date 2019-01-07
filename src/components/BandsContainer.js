import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
        {this.props.bands.map((band,i) => (<Band key={i} band={band} deleteBand={this.props.deleteBand} />))}
        </ul>
      </div>
    )
  }
}

const mapState = ({ bands }) => ({ bands })

const mapDispatch = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch ({ type: 'DELETE_BAND', id})
})

export default connect(mapState, mapDispatch)(BandsContainer)
