import React from 'react'
import PropTypes from 'prop-types'
import "./expandable.css"


/**
 * This is a simple component which has a header and an expandable body
 * Toggling of the body should be handled externally
 * 
 * @param {*} props
 * @author [Vinod Krishna Vellampalli](https://github.com/vinodkv2511)
 */
function Expandable(props) {

    return (
        <div className="wal_acc_exp_container"> 
            <div className="wal_acc_exp_header" onClick={props.toggleHandler}>
                { props.data.icon && <i className="material-icons">{props.data.icon}</i>}
                <p>
                    {props.data.header}
                </p>
            </div>
            <div className={"wal_acc_exp_body " + (props.collapsed ? "collapsed" : "" )} style={{maxHeight: props.contentHeight}} >
                <p>
                    {props.data.body}
                </p>
            </div>
        </div>
    )
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
    toggleHandler: PropTypes.func,
    contentHeight: PropTypes.string
}

export default Expandable