function Textbox({
  name,
  type = "text",
  placeholder = "",
  isRequired = true,
  onChange,
  className = "",
  value,
  defaultValue = "",
}) {
  const isControlled = value !== undefined;
  const cn =
    "rounded-full border border-stone-200 px-4 py-2 text-sm transition-all " +
    "duration-300 placeholder:text-stone-400 focus:outline-none focus:ring " +
    "focus:ring-yellow-400 md:px-6 md:py-3 " +
    className;

  return (
    <input
      type={type}
      name={name}
      value={isControlled ? value : undefined}
      defaultValue={!isControlled ? defaultValue : undefined}
      onChange={onChange}
      placeholder={placeholder}
      className={cn}
      required={isRequired}
    />
  );
}

export default Textbox;
