import React from "react";

const BlogFeaturedImage = props => {
    //cleaner codes to show and hide img in blog
    // {
    //     featured_image_url ?
    //         <div className="featured-image-wrapper">
    //             < img src={featured_image_url} />
    //         </div >
    //         : null
    // }

    if (!props.img) { //! in front means if does not exist if img not exist, then show null
        return null;
    }

    return (
        <div className="featured-image-wrapper">
            < img src={props.img} />
        </div >
    );
};

export default BlogFeaturedImage;