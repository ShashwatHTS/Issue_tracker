/* eslint-disable react/prop-types */
import BasicModal from "./BasicModal";

const AboutCompany = ({ jobDetailsFromCompany, title, description }) => {
  return (
    <div className="relative mt-2 mb-2">
      <div className=" h-[150px] overflow-hidden">
        <div className="text-xl font-bold[200]">{title}</div>
        <div className="text-xl font-bold">{description}</div>
        <div
          style={{
            background:
              "-webkit-linear-gradient(bottom, rgb(255 255 255), rgb(51, 51, 51)) text",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          <p>{jobDetailsFromCompany}</p>
        </div>
        <BasicModal btnName={"View Job"} text={jobDetailsFromCompany} />
      </div>
    </div>
  );
};

export default AboutCompany;
