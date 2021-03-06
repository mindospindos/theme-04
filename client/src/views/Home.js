import React from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import Clients from '../components/sections/Clients';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Pricing from '../components/sections/Pricing';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit invertMobile imageFill className="illustration-section-01" />
        <Clients topDivider bottomDivider />
        <FeaturesTiles />
        <FeaturesSplit topDivider invertMobile imageFill />
        <Testimonial hasBgColor invertColor />
        <Pricing pricingSwitcher />
        <Cta topDivider bottomDivider split className="reveal-from-top" />
        <div className="spacer-64 spacer-48-mobile"></div>
      </React.Fragment>
    );
  }
}

export default Home;