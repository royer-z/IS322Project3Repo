import React from 'react';

class VariableTask extends React.Component {

    render() {

        return (
            <div>
                <h1>{ this.props.match.params.id }</h1>
            </div>
        );
    };
}

export default VariableTask;