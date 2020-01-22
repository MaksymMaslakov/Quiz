import React from "react";
import ErrorBoundary from "../error-boundary";

const withErrorBoundary = (Comp) => {
    return (props) => {

        return (
            <ErrorBoundary>
                <Comp {...props}/>
            </ErrorBoundary>
        );
    }
};

export default withErrorBoundary;