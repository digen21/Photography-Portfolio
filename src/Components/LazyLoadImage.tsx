interface LazyLoadImage {
    imageUrl: string;
}

const LazyLoadedBackgroundImage = ({ imageUrl }: LazyLoadImage) => {
    return (
        <></>
        // <div className="background-image-container">
        //     <LazyLoad height={200} offset={100}>
        //         <div
        //             className="background-image"
        //             style={{
        //                 backgroundImage: `url(${imageUrl})`
        //             }}></div>
        //     </LazyLoad>
        // </div>
    );
};

export default LazyLoadedBackgroundImage;
