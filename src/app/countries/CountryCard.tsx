import { Country } from '@/types';
import Link from 'next/link';
import FlagImage from './FlagImage';

type CountryCardProps = {
    country: Country
};

export default function CountryCard({ country }: CountryCardProps) {
    return (
        <Link href='#' className='group border-solid border-2 border-blue-300 shadow-md p-2'>
            <div className='w-full bg-gray-200 aspect-w-16 aspect-h-10 rounded-lg overflow-hidden'>
                <div>
                    <FlagImage imageUrl='https://placehold.co/600x400/png' />
                </div>
            </div>

            <div className='flex justify-between items-center mt-4'>
                <h3 className='text-blue-500'>{country.countryName}</h3>
                <h3 className='text-blue-500'>{country.capitalState}</h3>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <p className='font-semibold text-sm text-blue-500'>{country.nationalBird}</p>
                <p className='font-semibold text-sm text-blue-500'>{country.countryPopulation}</p>
            </div>
        </Link>
    );

};
