import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import Link from 'next/link';
import CustomHead from '../../components/base/CustomHead/CustomHead';
import { NINJAS_CUSTOM_HEAD } from '../../constants/customHead';
import { useLoadingState } from '../../hooks';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    };
};

const Index = ({ ninjas }) => {
    const router = useRouter();
    const { isLoading, handleButtonClick } = useLoadingState();
    const [sortingOption, setSortingOption] = useState('idSmallToBig');

    const handleNavigation = (id) => {
        router.push(`/ninjas/${id}`);
    };

    const sortNinjas = (option) => {
        switch (option) {
            case 'idSmallToBig':
                return [...ninjas].sort((a, b) => a.id - b.id);
            case 'idBigToSmall':
                return [...ninjas].sort((a, b) => b.id - a.id);
            case 'shortestName':
                return [...ninjas].sort(
                    (a, b) => a.name.length - b.name.length
                );
            case 'longestName':
                return [...ninjas].sort(
                    (a, b) => b.name.length - a.name.length
                );
            case 'alphabet':
                return ninjas.sort((a, b) => a.name.localeCompare(b.name));
            default:
                return ninjas;
        }
    };

    const handleSortingChange = (event) => {
        setSortingOption(event.target.value);
    };

    const sortedNinjas = sortNinjas(sortingOption);

    return (
        <>
            <CustomHead
                title={NINJAS_CUSTOM_HEAD.title}
                description={NINJAS_CUSTOM_HEAD.description}
            />
            <div className="flex justify-between items-center">
                <Typography variant="h1" className="font-semibold text-4xl">
                    Total Ninjas
                </Typography>
                <FormControl>
                    <InputLabel id="sorting-option-label">
                        Sorting Option
                    </InputLabel>
                    <Select
                        labelId="sorting-option-label"
                        id="sorting-option"
                        value={sortingOption}
                        label="Sorting Option"
                        onChange={handleSortingChange}
                    >
                        <MenuItem value="idSmallToBig">
                            Sort by ID (Small to Big)
                        </MenuItem>
                        <MenuItem value="idBigToSmall">
                            Sort by ID (Big to Small)
                        </MenuItem>
                        <MenuItem value="shortestName">
                            Sort by Shortest Name
                        </MenuItem>
                        <MenuItem value="longestName">
                            Sort by Longest Name
                        </MenuItem>
                        <MenuItem value="alphabet">Sort by Alphabet</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {isLoading ? (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                    <RotateRightIcon className="animate-spin h-10 w-10" />
                </div>
            ) : (
                <ul>
                    {sortedNinjas.map((ninja) => (
                        <li
                            className="bg-white block my-5 px-4 py-5 border-l-8 border-white rounded cursor-pointer transition-colors duration-300 hover:border-customIndianRed hover:bg-customSeaSalt"
                            key={ninja.id}
                            onClick={() => {
                                handleNavigation(ninja.id);
                                handleButtonClick();
                            }}
                        >
                            <Link href={`/ninjas/${ninja.id}`} legacyBehavior>
                                <a className="text-base font-semibold visited:text-neutral-500">
                                    {`#${ninja.id}. ${ninja.name}`}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Index;
