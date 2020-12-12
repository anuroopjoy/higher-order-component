import * as React from 'react';
import { enhance } from '../hoc/enhancer';
import { logEnhance } from '../hoc/logEnhancer';

export class ButtonComponent extends React.Component {
    render() {
        return <button ref={this.props.myRef}>{this.props.text}</button>;
    }
}

export default logEnhance(enhance(ButtonComponent));
