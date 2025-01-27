import { string } from 'prop-types';

const HoverableImage = ({ imageUrl }) => {
    return (
        <div className="relative w-full h-full overflow-hidden group">
            <img
                src={imageUrl}
                className="group-hover:scale-110 w-full h-full transition-transform duration-300 object-cover"
                alt="Event Image"
            />
        </div>
    );
};
HoverableImage.propTypes = {
    imageUrl: string.isRequired
}
export default HoverableImage;