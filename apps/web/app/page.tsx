import Link from 'next/link';
import React from 'react'
import { Button } from "ui";

const Web = () => {
    return (
        <div>
            <h1> Web Hello Remote Cache!</h1>
            <h1><Link href="/hello">Hello</Link></h1>
            <h1><Link href="/test-2">Test 2</Link></h1>
            <Button />
        </div>
    );
};

export default Web;
