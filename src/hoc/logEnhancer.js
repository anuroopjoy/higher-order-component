import * as React from 'react';

export function logEnhance(SimpleComponent) {
    return class extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('Previous props ', prevProps);
            console.log('Current props ', this.props);
        }

        render() {
            return (
                <SimpleComponent
                    {...this.props}
                ></SimpleComponent>
            );
        }
    };
}
