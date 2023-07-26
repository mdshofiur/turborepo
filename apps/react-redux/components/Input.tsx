import React, { forwardRef , Fragment, Ref } from 'react';

export const Input = forwardRef((props, ref: Ref<HTMLInputElement>) => {
   
    return (
        <Fragment>
            <input {...props} ref={ref} type="text" className='p-3 rounded-md focus:outline-none my-3'/> <br />
        </Fragment>
    );
})
