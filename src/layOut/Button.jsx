/* eslint-disable react/prop-types */
function Button({ title }) {
  return (
    <div className="px-6 w-42 py-1 border-2  border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full">
      {title}
    </div>
  );
}

export default Button;
