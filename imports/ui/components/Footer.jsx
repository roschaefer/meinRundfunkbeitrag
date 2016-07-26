import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
export default class Footer extends Component {
  render() {
    return(
        <footer className="mdl-mini-footer">
            <div className="mdl-mini-footer__right-section">
              <div className="mdl-logo">Want to give us Feedback?</div>
              <ul className="mdl-mini-footer__link-list">
                <li><a href="https://github.com/roschaefer/mein-rundfunkbeitrag/issues" target='_blank'>GitHub</a></li>
                <li><a href="mailto:robert.schaefer@student.hpi.de?Subject=User%20Feedback" target='_top'>E-Mail</a></li>
              </ul>
            </div>
        </footer>
    );
  }
}
