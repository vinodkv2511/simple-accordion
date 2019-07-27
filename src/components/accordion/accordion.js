import React from 'react'
import Expandable from '../expandable/expandable'
import PropTypes from 'prop-types'
import './accordion.css'


/**
 * This is a simple Accordion component
 * Depends on Expandable
 * 
 * Works best when all items have similar height and contentHeight Prop is set - Will be fixed in future versions
 * Default content height is set to 300px
 *
 * @class Accordion
 * @extends {React.Component}
 * @author [Vinod Krishna Vellampalli](https://github.com/vinodkv2511)
 * 
 */
class Accordion extends React.Component{

    constructor(props){
        super(props)
        let collapsedArray = new Array(props.data.length).fill(true);
        if(props.defaultOpenIndex != null && props.defaultOpenIndex < props.data.length){
            collapsedArray[props.defaultOpenIndex] = false
        }
        this.state = {
            collapsed: collapsedArray
        }

        this.togHandler = this.togHandler.bind(this)
    }

    togHandler(index){
        let newCollapsedArray;
        if(this.props.allowMultiple){
            newCollapsedArray = this.state.collapsed.slice()
        }
        else{
            newCollapsedArray = new Array(this.props.data.length).fill(true)
        }

        newCollapsedArray[index] = !this.state.collapsed[index]
        this.setState({
            collapsed: newCollapsedArray
        })
    }


    /**
     * This function generates list of Expandables based on the data
     *
     * @param {*} data
     * @returns Array of Expandable elements
     * @memberof Accordion
     */
    getExpandables(data){
        return data.map( (dataObj, index) => {
            return <Expandable 
            key={index} data={dataObj} 
            toggleHandler={()=> this.togHandler(index) } 
            collapsed={this.state.collapsed[index]}
            contentHeight={this.props.contentHeight}
             />
        })
    }

    render(){
        return (
            <div className="wal_acc_container" style={this.props.style}>
                {this.getExpandables(this.props.data)}
            </div>
            ) 
    }
}

Accordion.propTypes = {
    data : PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        header: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })).isRequired,
    defaultOpenIndex: PropTypes.number,
    allowMultiple: PropTypes.bool,
    contentHeight: PropTypes.string
}

export default Accordion;