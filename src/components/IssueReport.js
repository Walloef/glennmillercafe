import React from 'react'
import { Fragment } from 'react';
import './issue.scss';

const IssueReport = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const enIssue = this.props.enIssue ? <p>{this.props.enIssue}</p> : ''
        const svIssue = this.props.svIssue ?
            <p>{this.props.svIssue}</p>
            : ''
        let Issue = null;
        if (typeof window !== `undefined`) {

            Issue = window.localStorage.getItem('gmLang') === 'en' ? <Fragment>
                <div className="issue__wrapper">
                    {enIssue}
                </div>
            </Fragment> :
                <Fragment>
                    <div className="issue__wrapper">
                        {svIssue}
                    </div>
                </Fragment>;
        }
        return (
            <Fragment>{Issue}</Fragment>
        )
    }
}

export default IssueReport
