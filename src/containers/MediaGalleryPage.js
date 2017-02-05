/**
 * Created by dcate on 2/4/17.
 */
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import {
    searchMediaAction,
    selectedImageAction,
    selectedVideoAction
} from "../actions/mediaActions";
import PhotoPage from '../components/Photos';
import Videos from '../components/Videos';
import '../../public/styles.css';

class MediaGalleryPage extends Component {

    componentDidMount() {
        this.props.dispatch(searchMediaAction(""));
    }

    renderLoadingGif() {
        return ( <img src="loading.gif" className="loading-image" alt="Loading..."/> );
    }

    handleSearch(event) {
        event.preventDefault();
        if (this.query) {
            this.props.dispatch(searchMediaAction(this.query.value));
            this.query.value = '';
        }
    }

    handleSelectImage(selectedImage) {
        this.props.dispatch(selectedImageAction(selectedImage));
    }

    handleSelectVideo(selectedVideo) {
        this.props.dispatch(selectedVideoAction(selectedVideo));
    }

    renderPhotos({images, selectedImage}) {
        if (images && selectedImage) {
            return (
                <PhotoPage
                    images={images}
                    selectedImage={selectedImage}
                    onHandleSelectImage={this.handleSelectImage.bind(this)}
                />
            );
        } else {
            this.renderLoadingGif()
        }
    }

    renderVideos({videos, selectedVideo}) {
        if (videos && selectedVideo) {
            return (
                <Videos
                    videos={videos}
                    selectedVideo={selectedVideo}
                    onHandleSelectVideo={this.handleSelectVideo.bind(this)}
                />
            );
        } else {
            this.renderLoadingGif();
        }
    }

    render() {
        console.log(this.props.images, "Images");
        console.log(this.props.videos, "Videos");
        console.log(this.props.selectedImage, "Selected Image");
        console.log(this.props.selectedVideo, "Selected Video");
        const {images, videos, selectedImage, selectedVideo} = this.props;
        return (
            <div id="MediaGalleryPage" className="container-fluid">
                <div className="row">
                    <input
                        type="text"
                        ref={ref => (this.query = ref)}
                    />
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Search Library"
                        onClick={this.handleSearch.bind(this)}
                    />
                </div>
                <div className="row">
                    { this.renderPhotos({images, selectedImage}) }
                    { this.renderVideos({videos, selectedVideo}) }
                </div>
            </div>
        );
    }
}

MediaGalleryPage.propTypes = {
    images: PropTypes.array,
    selectedImage: PropTypes.object,
    videos: PropTypes.array,
    selectedVideo: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({images, videos}) => ({
    images: images[0],
    selectedImage: images.selectedImage,
    videos: videos[0],
    selectedVideo: videos.selectedVideo
});


export default connect(mapStateToProps)(MediaGalleryPage);