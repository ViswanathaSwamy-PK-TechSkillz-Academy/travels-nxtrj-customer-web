'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { SiYourtraveldottv } from "react-icons/si";

export default function Logo() {
    const router = useRouter();
    const pathname = usePathname();

    // const reset = useParamsStore(state => state.reset);

    function doReset() {
        if (pathname !== '/ ') router.push('/');

        // reset();
    }

    return (
        <div onClick={doReset} className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-blue-500'>
            <SiYourtraveldottv size={34} />
            <div>Gimmicks Travels</div>
        </div>
    )
}
