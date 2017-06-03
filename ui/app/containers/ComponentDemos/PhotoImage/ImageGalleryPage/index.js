/*
  Get more info from:
  https://github.com/xiaolin/react-image-gallery
*/

import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import PageBase from '../../../../components/PageBase';

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';
const embedUrl1 = 'https://www.youtube.com/embed/iNJdPyoqt8U?autoplay=1&showinfo=0';
const embedUrl2 = 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0';

class ImageGalleryPage extends React.Component {
  constructor() {
    super();
    this.state = {
      autoplay: true,
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      slideDuration: 450,
      slideInterval: 2000,
      thumbnailPosition: 'bottom',
      showVideo: {
        [embedUrl1]: false,
        [embedUrl2]: false,
      },
    };

    this.toggleShowVideo = this.toggleShowVideo.bind(this);
    this.renderVideo = this.renderVideo.bind(this);
    this.getStaticImages = this.getStaticImages.bind(this);
    this.resetVideo = this.resetVideo.bind(this);
    this.onSlide = this.onSlide.bind(this);

    this.images1 = [
      {
        thumbnail: `${PREFIX_URL}4v.jpg`,
        original: `${PREFIX_URL}4v.jpg`,
        embedUrl: embedUrl2,
        renderItem: this.renderVideo,
      },
      {
        thumbnail: `${PREFIX_URL}3v.jpg`,
        original: `${PREFIX_URL}3v.jpg`,
        embedUrl: embedUrl1,
        description: 'Render custom slides within the gallery',
        renderItem: this.renderVideo,
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1t.jpg`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: 'Custom class for slides & thumbnails',
      },
    ].concat(this.getStaticImages());

    this.images2 = [].concat(this.getStaticImages());
    this.images3 = [].concat(this.getStaticImages());
  }

  onSlide() {
    this.resetVideo();
  }

  getStaticImages() {
    const images = [];
    for (let i = 2; i < 12; i += 1) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail: `${PREFIX_URL}${i}t.jpg`,
      });
    }

    return images;
  }

  resetVideo() {
    this.setState({
      showVideo: {},
    });

    if (this.state.showPlayButton) {
      this.setState({
        showGalleryPlayButton: true,
      });
    }

    if (this.state.showFullscreenButton) {
      this.setState({
        showGalleryFullscreenButton: true,
      });
    }
  }

  toggleShowVideo(url) {
    this.state.showVideo[url] = !this.state.showVideo[url];

    this.setState({
      showVideo: this.state.showVideo,
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({
          showGalleryPlayButton: false,
        });
      }

      if (this.state.showFullscreenButton) {
        this.setState({
          showGalleryFullscreenButton: false,
        });
      }

      this.imageGallery2.pause();
    } else {
      this.imageGallery2.play();
    }
  }

  renderVideo(item) {
    return (
      <div className="image-gallery-image">
        {
          this.state.showVideo[item.embedUrl] ?
            <div className="video-wrapper">
              <button
                className="close-video"
                onClick={this.toggleShowVideo.bind(this, item.embedUrl)} // eslint-disable-line
              >
              </button>
              <iframe
                width="560"
                height="315"
                src={item.embedUrl}
                frameBorder="0"
                allowFullScreen
              >
              </iframe>
            </div>
            :
            <button
             onClick={this.toggleShowVideo.bind(this, item.embedUrl)} // eslint-disable-line
            >
              <div className="play-button"></div>
              <img src={item.original} alt={item.description} />
              {
                item.description &&
                <span
                  className="image-gallery-description"
                  style={{ right: '0', left: 'initial' }}
                >
                  {item.description}
                </span>
              }
            </button>
        }
      </div>
    );
  }

  render() {
    return (
      <PageBase
        title="Image Gallery"
        navigation="Application / Display Images / Image Gallery "
        minHeight={1000}
      >
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p>Video Gallery Items</p>
            <ImageGallery
              ref={(imageGallery) => { this.imageGallery1 = imageGallery; }}
              items={this.images1}
              lazyLoad={false}
              infinite={this.state.infinite}
              onSlide={this.onSlide}
              showBullets={this.state.showBullets}
              showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
              showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
              showThumbnails={this.state.showThumbnails}
              showIndex={this.state.showIndex}
              showNav={this.state.showNav}
              thumbnailPosition={this.state.thumbnailPosition}
              slideDuration={parseInt(this.state.slideDuration, 10)}
              slideInterval={parseInt(this.state.slideInterval, 10)}
              slideOnThumbnailHover={this.state.slideOnThumbnailHover}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <p>Auto play</p>
            <ImageGallery
              autoPlay={this.state.autoplay}
              ref={(imageGallery) => { this.imageGallery2 = imageGallery; }}
              items={this.images2}
              lazyLoad={false}
              infinite={this.state.infinite}
              onSlide={this.onSlide}
              showBullets={this.state.showBullets}
              showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
              showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
              showThumbnails={this.state.showThumbnails}
              showIndex={this.state.showIndex}
              showNav={this.state.showNav}
              thumbnailPosition={this.state.thumbnailPosition}
              slideDuration={parseInt(this.state.slideDuration, 10)}
              slideInterval={parseInt(this.state.slideInterval, 10)}
              slideOnThumbnailHover={this.state.slideOnThumbnailHover}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md m-b-15">
            <p>Full width</p>
            <ImageGallery
              ref={(imageGallery) => { this.imageGallery3 = imageGallery; }}
              items={this.images3}
              lazyLoad={false}
              infinite={this.state.infinite}
              onSlide={this.onSlide}
              showBullets={this.state.showBullets}
              showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
              showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
              showThumbnails={this.state.showThumbnails}
              showIndex={this.state.showIndex}
              showNav={this.state.showNav}
              thumbnailPosition={this.state.thumbnailPosition}
              slideDuration={parseInt(this.state.slideDuration, 10)}
              slideInterval={parseInt(this.state.slideInterval, 10)}
              slideOnThumbnailHover={this.state.slideOnThumbnailHover}
            />
          </div>
        </div>
      </PageBase>
    );
  }
}

export default ImageGalleryPage;
