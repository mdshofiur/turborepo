import React, { forwardRef , Fragment, LegacyRef, Ref } from 'react';

export const Input = forwardRef((props, ref: Ref<HTMLInputElement>) => {
    console.log("ref", ref)
    console.log("props", props)

    return (
        <Fragment>
            <input {...props} ref={ref} type="text" className='p-3 rounded-md focus:outline-none my-3'/> <br />
        </Fragment>
    );
})


