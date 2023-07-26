import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton
} from '@mui/material';
import Link from 'next/link';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomHead from '../../components/base/CustomHead/CustomHead';
import { NINJAS_CUSTOM_HEAD } from '../../constants/customHead';
import { useHydratedState, useLoadingState } from '../../hooks';
import Spinner from '../../components/base/Spinner';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    };
};

const Index = ({ ninjas: initialNinjas }) => {
    const router = useRouter();
    const { isLoading, handleButtonClick } = useLoadingState();
    const [sortingOption, setSortingOption] = useState('idSmallToBig');
    const [ninjas, setNinjas] = useState(initialNinjas);
    const isHydrated = useHydratedState();

    const handleNavigation = (id) => {
        router.push(`/ninjas/${id}`);
        handleButtonClick();
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

    const handleDelete = (id) => {
        setNinjas((prevNinjas) =>
            prevNinjas.filter((ninja) => ninja.id !== id)
        );
    };

    return (
        <>
            <CustomHead
                title={NINJAS_CUSTOM_HEAD.title}
                description={NINJAS_CUSTOM_HEAD.description}
            />

            <div className="flex flex-col items-center pb-10">
                <div className="flex justify-between pb-6 flex w-full items-center h-[56px]">
                    <Typography variant="h1" className="font-semibold text-4xl">
                        Total Ninjas
                    </Typography>
                    <FormControl className={isHydrated ? '' : 'hidden'}>
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
                            <MenuItem value="alphabet">
                                Sort by Alphabet
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <Typography variant="body1" className="indent-6">
                    This a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using &apos;Content here, content here&apos;, making it look
                    like readable English. Many desktop publishing packages and
                    web page editors now use Lorem Ipsum.
                </Typography>
            </div>
            {isLoading ? (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                    <Spinner small danger circle />
                </div>
            ) : (
                <ul>
                    {sortedNinjas.map((ninja) => (
                        <li
                            className="flex items-center justify-between bg-white block my-5 px-4 py-5 border-l-8 border-white rounded cursor-pointer transition-colors duration-300 hover:border-customIndianRed hover:bg-customSeaSalt"
                            key={ninja.id}
                        >
                            <div
                                onClick={() => {
                                    handleNavigation(ninja.id);
                                }}
                            >
                                <Link
                                    href={`/ninjas/${ninja.id}`}
                                    legacyBehavior
                                >
                                    <a className="text-base font-semibold visited:text-neutral-500">
                                        {`#${ninja.id}. ${ninja.name}`}
                                    </a>
                                </Link>
                            </div>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleDelete(ninja.id)}
                            >
                                <DeleteForeverIcon />
                            </IconButton>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Index;
