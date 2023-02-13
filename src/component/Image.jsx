import PropTypes from "prop-types";
import defaultIMg from '../assets/icons/Ellipse.svg'
import classNames from "classnames";

const Image = ({src, alt, className, circle, width, height}) => {
 const classes = classNames(className,{circle})
  return (
    <img src={src} alt={alt} className={classes} width={width} height={height}/>
  );
};

Image.propTypes = {
 src: PropTypes.string,
 alt: PropTypes.string,
 className: PropTypes.string,
 circle: PropTypes.bool,
 width:PropTypes.string,
 height:PropTypes.string
}
Image.defaultProps = {
 src: defaultIMg,
 width:'50px',
 height:'50px',
}
export default Image;
