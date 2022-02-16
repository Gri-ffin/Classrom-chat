export const Card = ({ children }) => {
  return (
    <div className='text-center w-[40%] m-auto absolute top-[150px] left-[30%] bg-gray-700 text-white rounded-md p-[16px] shadow-md'>
      {children}
    </div>
  );
};
