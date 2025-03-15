import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size = 'normal', variant = 'default', children, onClick, className, ...props }) {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "rounded-full flex items-center justify-center font-bold",
        {
          // Size stilleri
          'px-4 h-8 text-[14px] leading-[18px]': size === 'small',
          'px-4 h-8 w-fit text-[14px] leading-[18px]': size === 'normal',
          'px-4 h-12 w-full': size === 'large',

          // Variant stilleri
          'bg-[#1d9bf0] text-white hover:bg-[#1a8cd8] cursor-pointer ': variant === 'default',
         'bg-[color:var(--color-primary)] text-white hover:opacity-90 cursor-pointer ': variant === 'primary',
          'bg-[#eff3f4] text-[#292c32] hover:bg-[#D7DBDC] cursor-pointer ': variant === 'white',
          ' border border-[#536471] hover:border-[#67070f] cursor-pointer hover:bg-[#f4212e1a] hover:text-[#f4212e] ': variant === 'white-outline',
        },
        className
      )}
    >
      {children}
    </div>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  variant: PropTypes.oneOf(['default', 'white', 'white-outline','primary']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};