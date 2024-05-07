/* eslint-disable react/prop-types */

import { Link } from "@mui/material";

const Details = ({ jdLink, companyName, jobRole, location }) => {
  // console.log(jdLink)
  return (
    <div>
      <div className="flex flex-col pl-2">
        <div className="flex ">
          <Link
            target="_blank"
            href={jdLink}
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            {" "}
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                letterSpacing: "1.5px",
                marginBottom: "3px",
                color: "#8b8b8b",
                cursor: "pointer",
              }}
            >
              {companyName}
            </p>
          </Link>
        </div>
        <p className="text-[12px] mt-0.5 text-gray-900 capitalize  ">
          {jobRole}
        </p>

        <div className="capitalize text-[13px] text-gray-900 font-bold">
          <p>{location}</p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Details;
