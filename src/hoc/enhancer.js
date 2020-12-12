import * as React from 'react';

export function enhance(SimpleComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.myRef = React.createRef();
        }

        componentDidMount() {
            this.myRef.current.addEventListener('click', this.handleClick);
        }
        componentWillUnmount() {
            this.myRef.current.removeEventListener('click', this.handleClick);
        }

        handleClick() {
            console.log(this.myRef.current);
        }

        render() {
            return (
                <SimpleComponent
                    myRef={this.myRef}
                    {...this.props}
                ></SimpleComponent>
            );
        }
    };
}
