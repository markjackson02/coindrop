import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TypewriterEffect = dynamic(
    () => import('typewriter-effect'),
    {
        loading: () => 'payments',
        ssr: false,
    },
);

const Typewriter = () => {
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        setDidMount(true);
    }, []);
    if (didMount) {
        return (
            <TypewriterEffect
                options={{
                    strings: [
                        'payments',
                        'donations',
                        'tips',
                        // 'gifts',
                    ],
                    autoStart: true,
                    loop: true,
                }}
            />
        );
    }
    return <span>payments</span>;
};

export default Typewriter;
