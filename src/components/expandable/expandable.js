import React from 'react'
import PropTypes from 'prop-types'
import "./expandable.css"


/**
 * This is a simple component which has a header and an expandable body
 * Toggling of the body should be handled externally
 * 
 * @param {*} this.props
 * @author [Vinod Krishna Vellampalli](https://github.com/vinodkv2511)
 */
class Expandable extends React.Component {

    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }

    componentDidMount(){
        this.setMaxHeight();
    }

    componentDidUpdate(){
        this.setMaxHeight();
    }

    setMaxHeight(){
        let bodyElem = this.myRef.current
        const paddingVertical = 40 // Need to find a way to read it from css style
        let pixelMaxHeight = bodyElem.firstElementChild.clientHeight
        bodyElem.style.maxHeight = pixelMaxHeight + paddingVertical + "px"
    }

    render(){
        return (
            <div className="wal_acc_exp_container"> 
                <div className="wal_acc_exp_header" onClick={this.props.toggleHandler}>
                    { this.props.data.icon && <i className="material-icons">{this.props.data.icon}</i>}
                    <p>
                        {this.props.data.header}
                    </p>
                </div>
                <div  ref={this.myRef} className={"wal_acc_exp_body " + (this.props.collapsed ? "collapsed" : "" )} >
                    <p>
                        {this.props.data.body}
                    </p>
                </div>
            </div>
        )
    }
}

Expandable.propTypes = {
    data: PropTypes.shape(
        {
            icon: PropTypes.string,
            header: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired
        }
    ).isRequired,
    collapsed: PropTypes.bool,
    toggleHandler: PropTypes.func
}

export default Expandable