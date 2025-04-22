import React, { useState } from 'react';

export function CounterFunction( ){
    const [profile, setProfile] = useState({
        name: '',
        age: 0
    });
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1> {profile} </h1>

            <button onClick={() => setCount}></button>
        </div>
    )
}

class CounterFunction extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CounterFunction;