// import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import PropTypes from "prop-types";
import classNames from "classnames";
const Button = ({children,onClick,className, ...rest}) => {

  const classes = classNames('btn',className)
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
    // <img src={SearchPhoto} alt="Search" width='74px' height='68px'/>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node,PropTypes.string]),
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;
