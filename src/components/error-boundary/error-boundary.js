import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';

class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        return (
            <div>
                {this.state.hasError ? <ErrorIndicator /> : this.props.children}
            </div>
        );
    }
}

export default ErrorBoundary;