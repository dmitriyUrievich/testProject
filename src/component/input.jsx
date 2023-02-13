import classNames from "classnames";
import PropTypes from "prop-types";

const Input = ({id,className,onChange, value,...rest}) => {
  const classes = classNames(
    'input',className
  )
  return (
        <input
               onChange={onChange}
               value={value}
               name={id}
               className={className}
               {...rest}/>
  );
};

Input.propTypes = {
  id:PropTypes.number,
  className:PropTypes.string
}

export default Input;
