import React from 'react';
import Banner from './Banner/Banner';
import CoreValue from './CoreValue/CoreValue';
import HomepageCourse from './HomePageCourse/HomepageCourse';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CoreValue></CoreValue>
            <HomepageCourse></HomepageCourse>
        </div>
    );
};

export default Home;