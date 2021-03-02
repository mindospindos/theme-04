import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Testimonial extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap illustration-section-03',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Testimonials',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-top">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                      I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">@mikesmith</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien. Quisque egestas diam in arcu cursus euismod quis.
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">@mikesmith</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                      I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">@mikesmith</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien. Quisque egestas diam in arcu cursus euismod quis.
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">@mikesmith</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                      I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">@mikesmith</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien. Quisque egestas diam in arcu cursus euismod quis.
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">@mikesmith</a>
                    </span>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;