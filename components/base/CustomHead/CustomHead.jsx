import Head from 'next/head';
import PropTypes from 'prop-types';

const CustomHead = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
};

CustomHead.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default CustomHead;
