import React from 'react';
import CustomHead from '../../base/CustomHead/CustomHead';
import { ABOUT_CUSTOM_HEAD } from '../../../constants/customHead';

const About = () => {
    return (
        <>
            <CustomHead
                title={ABOUT_CUSTOM_HEAD.title}
                description={ABOUT_CUSTOM_HEAD.description}
            />
            <div>
                <h1 className="title">About</h1>
                <p className="font-black">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque delectus deserunt distinctio dolore, facere illum
                    maxime molestias rerum tempora vitae? A alias cumque debitis
                    eaque itaque labore, repudiandae totam vero!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque delectus deserunt distinctio dolore, facere illum
                    maxime molestias rerum tempora vitae? A alias cumque debitis
                    eaque itaque labore, repudiandae totam vero!
                </p>
            </div>
        </>
    );
};

export default About;
