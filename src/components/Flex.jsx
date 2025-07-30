const Flex = ({ className,children }) => {
  return <div className={`lg:flex flex-wrap ${className}`}>{children}</div>;
};
export default Flex