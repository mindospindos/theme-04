import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Making your work easier',
      paragraph: 'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-top" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-16">
                    Digital collaboration
                  </h3>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-01 reveal-rotate-from-left',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                  <div style={imgOddStyle}>
                    <Image
                      src={require('./../../assets/images/features-split-top-01.png')}
                      alt="Features split top 01"
                      width={624}
                      height={512} />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-16">
                    Digital collaboration
                  </h3>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-02 reveal-rotate-from-right',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                  <div style={imgEvenStyle}>
                    <Image
                      src={require('./../../assets/images/features-split-top-02.png')}
                      alt="Features split top 02"
                      width={624}
                      height={512} />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-16">
                    Digital collaboration
                  </h3>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-03 reveal-rotate-from-left',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                  <div style={imgOddStyle}>
                    <Image
                      src={require('./../../assets/images/features-split-top-03.png')}
                      alt="Features split top 03"
                      width={624}
                      height={512} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

const imgOddStyle = {
  position: 'absolute',
  width: '132.95%',
  maxWidth: '132.95%',
  top: '-13.89%',
  left: '-16.47%'
}

const imgEvenStyle = {
  position: 'absolute',
  width: '132.95%',
  maxWidth: '132.95%',
  top: '-13.89%',
  left: '-16.47%'
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;