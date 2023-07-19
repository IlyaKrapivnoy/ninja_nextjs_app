import React from 'react';
import Link from 'next/link';
import styles from './Home.module.scss';
import CustomHead from '../../base/CustomHead/CustomHead';
import { HOME_CUSTOM_HEAD } from '../../../constants/customHead';
import { TypographyWithFirstLinePadding } from '../../base/TypographyWithFirstLinePadding';

const Home = () => {
    const paddingValue = '20px';

    return (
        <>
            <CustomHead
                title={HOME_CUSTOM_HEAD.title}
                description={HOME_CUSTOM_HEAD.description}
            />
            <div>
                <h1 className={styles.homeTitle}>Homepage</h1>

                <TypographyWithFirstLinePadding
                    paddingValue={paddingValue}
                    className="text-slate-600 leading-5"
                    gutterBottom
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </TypographyWithFirstLinePadding>

                <TypographyWithFirstLinePadding
                    paddingValue={paddingValue}
                    className="text-slate-600 leading-5"
                    gutterBottom
                >
                    Urna et pharetra pharetra massa. Sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc pulvinar. Aliquam id
                    diam maecenas ultricies mi eget mauris pharetra. Posuere ac
                    ut consequat semper viverra nam libero. Risus pretium quam
                    vulputate dignissim suspendisse in est ante. Eu augue ut
                    lectus arcu bibendum at varius vel pharetra. Mi bibendum
                    neque egestas congue quisque egestas diam in. Tincidunt eget
                    nullam non nisi. Nisl vel pretium lectus quam id leo in
                    vitae turpis. Aliquet porttitor lacus luctus accumsan tortor
                    posuere. Quisque egestas diam in arcu. Feugiat in ante metus
                    dictum at tempor commodo ullamcorper a. Pulvinar etiam non
                    quam lacus. Pretium aenean pharetra magna ac placerat. Nunc
                    sed augue lacus viverra vitae congue eu consequat ac.
                </TypographyWithFirstLinePadding>

                <Link href="/ninjas" className={styles.btn}>
                    See Ninja Listing
                </Link>
            </div>
        </>
    );
};
export default Home;
