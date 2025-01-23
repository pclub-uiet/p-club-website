const HoverableImage = ({ imageUrl }) => {
    return (
        <div className="relative group overflow-hidden h-full w-full">
            <img
                src={imageUrl}
                className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-110"
                alt="Event Image"
            />
        </div>
    );
};

export default HoverableImage;