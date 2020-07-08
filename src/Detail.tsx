import React from 'react';

const message = (props: { text: String}): JSX.Element => {
    return (
    <p>This is functional component {props.text}</p>
    );
}

export default message;
