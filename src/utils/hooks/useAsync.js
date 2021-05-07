import * as React from 'react';

export const useAsync = (func, inputs) => {
    React.useEffect(() => {
        func().catch(e => console.log(e));
    }, inputs);
}