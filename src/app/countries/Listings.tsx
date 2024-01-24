'use client';

import { Country, PagedResult } from '@/types';
import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { getData } from '../actions/countriesActions';

export default function Listings() {

    const [data, setData] = useState<PagedResult<Country>>();
    const pagedResults : PagedResult<Country> = {results: [], pageCount: 0, totalCount: 0};

    useEffect(() => {
        getData('')
            .then((data: any) => {
                pagedResults.results = data;
                setData(pagedResults);
            })
    }, []);

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className='grid grid-cols-4 gap-6'>
                {data.results?.map((country: Country) => (
                    <CountryCard key={country.countryId} country={country} />
                ))}
            </div>

        </>
    );
}


// const data: PagedResult<Country> = {
//     results: [
//         {
//             countryId: 1,
//             countryName: 'India',
//             countryPopulation: 100000000,
//             nationalBird: 'Peacock',
//             capitalState: 'Delhi'
//         },
//         {
//             countryId: 2,
//             countryName: 'USA',
//             countryPopulation: 100000000,
//             nationalBird: 'Eagle',
//             capitalState: 'Washington'
//         },
//         {
//             countryId: 3,
//             countryName: 'UK',
//             countryPopulation: 100000000,
//             nationalBird: 'Swan',
//             capitalState: 'London'
//         },
//         {
//             countryId: 4,
//             countryName: 'Australia',
//             countryPopulation: 100000000,
//             nationalBird: 'Emu',
//             capitalState: 'Canberra'
//         },
//         // {
//         //     countryId: 5,
//         //     countryName: 'Canada',
//         //     countryPopulation: 100000000,
//         //     nationalBird: 'Gray Jay',
//         //     capitalState: 'Ottawa'
//         // }
//     ],
//     pageCount: 5,
//     totalCount: 1,
// }
