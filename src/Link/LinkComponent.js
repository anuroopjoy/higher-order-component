import * as React from 'react';
import { enhance } from '../hoc/enhancer';
import { logEnhance } from '../hoc/logEnhancer';

export class LinkComponent extends React.Component {
    render() {
        return (
            <a
                ref={this.props.myRef}
                className="App-link"
                href={this.props.href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {this.props.text}
            </a>
        );
    }
}

export default enhance(logEnhance(LinkComponent));
