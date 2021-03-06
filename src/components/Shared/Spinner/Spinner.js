import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

const Spinner = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("");

    return (
        <div className="sweet-loading">
            <button onClick={() => setLoading(!loading)}></button>
            <input className='bg-slate-100' value={color} onChange={(input) => setColor(input.target.value)} />

            <ClipLoader color={color} loading={loading} css={override} size={150} />
        </div>
    );
};

export default Spinner;