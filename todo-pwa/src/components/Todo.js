import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => dispatch(toggleTodo(id))
    }
}

const Item = styled.li`
    padding-left: 1em;
    cursor: pointer;
    overflow-wrap: break-word;
    &:before {
        content: ""
    }
`;

const Todo = ({id, text, completed, onItemClick}) => {
    return (
        <Item 
            className={"padding-small margin-small " + (completed ? 'background-primary' : 'shadow shadow-hover')}
            key={id}
            onClick={e => onItemClick(id)}
            style={completed ? {textDecoration: 'line-through'} : {}}
        >
            {text}
        </Item>
    )
}

export default connect(null, mapDispatchToProps)(Todo);