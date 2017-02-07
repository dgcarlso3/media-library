/**
 * Created by dcate on 2/4/17.
 */
import React, {PropTypes} from "react";

const Books = ({images, handleSelectImage, selectedImage}) => (
    <div id="Books" className="col-md-6">
        <h2> Books </h2>
        <div className="selected-image">
            <div id={selectedImage.id}>
                <img src={selectedImage.mediaUrl} alt={selectedImage.title}/>
            </div>
        </div>
        <div className="image-thumbnail">
            {images.map((image, i) => (
                <div key={i} onClick={handleSelectImage.bind(this, image)}>
                    <img src={image.mediaUrl} alt={image.title}/>
                </div>
            ))}
        </div>
    </div>
);

Books.propTypes = {
    images: PropTypes.array.isRequired,
    selectedImage: PropTypes.object,
    handleSelectImage: PropTypes.func.isRequired
};

export default Books;