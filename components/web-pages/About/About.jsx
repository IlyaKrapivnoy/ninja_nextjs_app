import React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import CustomHead from '../../base/CustomHead/CustomHead';
import { ABOUT_CUSTOM_HEAD } from '../../../constants/customHead';
import { TypographyWithFirstLinePadding } from '../../base/TypographyWithFirstLinePadding';
import AboutPic from '../../../public/about.png';

const About = () => {
    const paddingValue = '20px';

    return (
        <>
            <CustomHead
                title={ABOUT_CUSTOM_HEAD.title}
                description={ABOUT_CUSTOM_HEAD.description}
            />
            <div>
                <Typography
                    variant="h1"
                    className="text-333 text-9xl font-semibold text-center"
                    gutterBottom
                >
                    About
                </Typography>
                <TypographyWithFirstLinePadding
                    paddingValue={paddingValue}
                    className="text-slate-600 leading-5 text-justify"
                    gutterBottom
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Aliquet bibendum enim facilisis gravida. Fames ac
                    turpis egestas sed tempus urna. Condimentum mattis
                    pellentesque id nibh tortor id aliquet. Tempor id eu nisl
                    nunc mi. Morbi blandit cursus risus at ultrices. Massa
                    tincidunt dui ut ornare lectus sit amet est. Eget felis eget
                    nunc lobortis mattis aliquam.
                </TypographyWithFirstLinePadding>
                <div className="flex items-start flex-row">
                    <div className="flex flex-col">
                        <TypographyWithFirstLinePadding
                            paddingValue={paddingValue}
                            className="text-slate-600 leading-5 text-justify"
                            gutterBottom
                        >
                            Pellentesque adipiscing commodo elit at imperdiet.
                            Et malesuada fames ac turpis egestas maecenas
                            pharetra convallis posuere. Cras ornare arcu dui
                            vivamus arcu felis bibendum ut tristique. Mi tempus
                            imperdiet nulla malesuada. Non consectetur a erat
                            nam at. Arcu odio ut sem nulla pharetra diam sit.
                            Massa ultricies mi quis hendrerit dolor magna eget
                            est lorem. Sit amet mauris commodo quis. Aenean sed
                            adipiscing diam donec adipiscing. Placerat orci
                            nulla pellentesque dignissim enim sit amet. Nullam
                            non nisi est sit amet facilisis magna. Neque vitae
                            tempus quam pellentesque nec nam aliquam sem et.
                            Consectetur adipiscing elit duis tristique. At augue
                            eget arcu dictum. Nec ullamcorper sit amet risus
                            nullam eget felis eget. Consectetur adipiscing elit
                            pellentesque habitant morbi. Ut ornare lectus sit
                            amet est. Dui vivamus arcu felis bibendum. Non odio
                            euismod lacinia at quis. Ut ornare lectus sit amet
                            est placerat in.
                        </TypographyWithFirstLinePadding>
                        <TypographyWithFirstLinePadding
                            paddingValue={paddingValue}
                            className="text-slate-600 leading-5 text-justify"
                            gutterBottom
                        >
                            Molestie ac feugiat sed lectus. Et netus et
                            malesuada fames ac turpis. Mattis nunc sed blandit
                            libero volutpat. Pellentesque elit eget gravida cum
                            sociis natoque penatibus. Tristique risus nec
                            feugiat in fermentum. Dui faucibus in ornare quam
                            viverra orci sagittis eu volutpat. Praesent
                            elementum facilisis leo vel fringilla est
                            ullamcorper eget nulla. Congue eu consequat ac felis
                            donec et. Massa id neque aliquam vestibulum morbi
                            blandit cursus. Enim nunc faucibus a pellentesque
                            sit amet porttitor eget. Euismod quis viverra nibh
                            cras pulvinar mattis nunc sed. Eget egestas purus
                            viverra accumsan. Dictumst vestibulum rhoncus est
                            pellentesque elit ullamcorper dignissim cras
                            tincidunt. Cursus in hac habitasse platea dictumst
                            quisque sagittis purus sit.
                        </TypographyWithFirstLinePadding>
                    </div>
                    <Image
                        src={AboutPic}
                        alt="logo"
                        width={130}
                        className="min-w-min pl-10"
                    />
                </div>
                <TypographyWithFirstLinePadding
                    paddingValue={paddingValue}
                    className="text-slate-600 leading-5 text-justify"
                    gutterBottom
                >
                    Ultrices neque ornare aenean euismod elementum nisi quis.
                    Enim praesent elementum facilisis leo vel fringilla. Sit
                    amet risus nullam eget felis eget. Pulvinar etiam non quam
                    lacus suspendisse faucibus interdum posuere. Diam quam nulla
                    porttitor massa id neque aliquam vestibulum morbi. Senectus
                    et netus et malesuada fames ac. Luctus accumsan tortor
                    posuere ac ut. Viverra adipiscing at in tellus integer
                    feugiat. Dui sapien eget mi proin sed libero enim sed
                    faucibus. Quam nulla porttitor massa id. Semper auctor neque
                    vitae tempus quam. Dictumst vestibulum rhoncus est
                    pellentesque elit ullamcorper dignissim cras. Ridiculus mus
                    mauris vitae ultricies leo integer malesuada nunc vel.
                </TypographyWithFirstLinePadding>
            </div>
        </>
    );
};

export default About;
