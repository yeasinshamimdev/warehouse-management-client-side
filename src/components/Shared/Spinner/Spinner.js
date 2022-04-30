import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("");

    return (
        <div className="sweet-loading">
            <button onClick={() => setLoading(!loading)}></button>
            <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

            <ClipLoader color={color} loading={loading} css={override} size={150} />
        </div>
    );
};

export default Spinner;