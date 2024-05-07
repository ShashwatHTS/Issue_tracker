/* eslint-disable react/prop-types */

const ImgCompany = ({ logoUrl }) => {
  return (
    <div className="m-1 ">
      <img
        src={logoUrl}
        alt="company logo"
        loading="lazy"
        className="h-[57px] w-[40px]"
      />
    </div>
  );
};

export default ImgCompany;
