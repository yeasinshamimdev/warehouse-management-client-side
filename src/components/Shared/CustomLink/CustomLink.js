import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {

    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    borderBottom: match ? "2px solid lime" : "",
                    backgroundColor: match ? "black" : "",
                    color: match ? "white" : "",
                    padding: match ? "1px 10px" : "",
                    borderRadius: match ? "5px" : "5px",
                    border: match ? "" : "1px solid black"
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;