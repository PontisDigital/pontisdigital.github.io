import React from "react";
import { Button } from '../buttonElement';

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Button
            to='#'
            onClick={(e) => {
                window.open(mailto, "_blank");
                e.preventDefault();
            }}
        >
            {label}
        </Button>
    );
};

export default ButtonMailto;
