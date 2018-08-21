import React from "react";

export default function SidebarFeedback() {
    return (
        <div className="sidebar-help">
            <h2>Feedback</h2>

            <p>
                How can{" "}
                <a
                    href="https://dgraph.io/about.html"
                    target="_blank"
                    className="team-link"
                    rel="noopener noreferrer"
                >
                    we
                </a>{" "}
                improve Dgraph browser?
            </p>

            <section>
                <h3>Ways to let us know</h3>

                <ul className="list-unstyled">
                    <li>
                        <a
                            className="typeform-share button"
                            href="https://sung8.typeform.com/to/CTeDKi"
                            data-mode="popup"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="far fa-envelope-open link-icon" />
                            Write a short feedback
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/dgraph-io/dgraph/issues/new"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas fa-bug link-icon" />
                            File a GitHub issue
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
