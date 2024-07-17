import React from 'react';
import TitlePrimary from './TitlePrimary';

const About = () => {
    const words1 = ["industria"];
    const words2 = ["natural"];

    return (
        <div id='nosotros' className='px-6 py-20 text-white bg-marron-50 font-ebGaramond md:px-16 lg:h-[100vh] flex items-center' style={styles.img_bg}>

            <div className='mx-auto max-w-7xl'>

                <div className='flex justify-center lg:justify-start'>
                    <TitlePrimary words1={words1} words2={words2} dynamic={false} className="mb-12 text-white lg:mb-16" />
                </div>

                <div className='flex flex-col gap-8 text-base lg:gap-16 md:text-xl lg:flex-row'>
                    <p className='flex-1'>Lorem ipsum dolor sit amet consectetur adipiscing elit nisl senectus, volutpat augue diam nunc dictum suspendisse dictumst viverra, torquent urna nascetur tincidunt phasellus enim eget maecenas. Massa magna odio senectus class congue ridiculus mus mauris turpis leo, ultrices neque curae nisi justo accumsan primis felis fames metus, mattis posuere pharetra quis sagittis non vitae ultricies iaculis. Ornare pharetra dignissim auctor hac velit mauris, vulputate platea pretium rutrum dis, himenaeos euismod nisl nascetur vel.</p>

                    <p className='flex-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis assumenda et dolorem reiciendis dicta nostrum recusandae nulla officiis, tenetur doloremque quidem! Tenetur, velit quo? Corporis totam mollitia voluptate quisquam animi?</p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    img_bg: {
        backgroundImage: "url('/images/bg_textura_right.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top"
    }
};

export default About;
