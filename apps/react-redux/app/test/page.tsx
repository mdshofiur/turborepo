"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react";

const Text = () => {
    const { pending } = useFormStatus();
    return (
        <div>
            <input
                type="submit"
                className={pending ? "button-pending" : "button-normal"}
                disabled={pending}
            >
                Submit
            </input>
        </div>
    );
};

export default Text;
