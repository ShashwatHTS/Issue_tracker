import axios from "axios";
import { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BoltIcon from "@mui/icons-material/Bolt";

import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ImgCompany from "./components/ImgCompany";
import AboutCompany from "./components/AboutCompany";
import EstimateSalary from "./components/EstimateSalary";
import Details from "./components/Details";
import FilterTab from "./components/FilterTab";

const PostList = () => {
  const [filters, setFilters] = useState({
    jobRole: [],
    role: [],
    maxJdSalary: [],
    maxExp: [],
    companyName: [],
  });

  const selectRoles = [{ value: "frontend", label: "frontend" }];

  const selectCompany = [
    {
      value: "Dropbox",
      label: "Dropbox",
    },
  ];

  const selectExperience = [
    {
      value: 0,
    },

    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
    {
      value: 6,
    },
    {
      value: 7,
    },
    {
      value: 8,
    },
    {
      value: 9,
    },
  ];

  const selectMaxSalary = [
    {
      value: 5,
    },
    {
      value: 6,
    },
    {
      value: 7,
    },
    {
      value: 3,
    },
    {
      value: 3,
    },
    {
      value: 3,
    },
    {
      value: 3,
    },
    {
      value: 3,
    },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ["job-list"],
    queryFn: () =>
      axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON"),
  });

  const getFilterByKey = (updatedData, key) => {
    return filters[key].length
      ? updatedData.filter((row) => {
          return (
            row[key] === filters[key]?.find((f) => f.value == row[key])?.value
          );
        })
      : updatedData;
  };
  const getFilteredData = (data) => {
    console.log(data);
    let updatedData = data ? [...data] : [];
    // const getFilterTo = (data) => (key) => getFilterByKey(data, key);
    // const getFilterTUpdatedData = getFilterTo(updatedData);
    // updatedData = getFilterTUpdatedData("jobRole");
    // updatedData = getFilterTUpdatedData("companyName");
    updatedData = getFilterByKey(updatedData, "jobRole");
    updatedData = getFilterByKey(updatedData, "companyName");
    updatedData = getFilterByKey(updatedData, "maxExp");
    updatedData = getFilterByKey(updatedData, "maxJdSalary");

    return updatedData;
  };
  return (
    <>
      <div className="flex m-2 p-2 flex-wrap">
        <FilterTab
          list={selectRoles}
          title={"Roles.."}
          onChange={(val) => setFilters({ ...filters, jobRole: val })}
        />
        <FilterTab
          list={selectCompany}
          title={"Company Name"}
          onChange={(val) => setFilters({ ...filters, companyName: val })}
        />
        <FilterTab
          list={selectExperience}
          title={"Experience.."}
          onChange={(val) => setFilters({ ...filters, maxExp: val })}
        />
        <FilterTab
          list={selectMaxSalary}
          title={"Salary.."}
          onChange={(val) => setFilters({ ...filters, maxJdSalary: val })}
        />
      </div>
      <Grid container spacing={2} p={2}>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          getFilteredData(data?.data?.jdList)?.map((post) => (
            <Grid item className="card" key={post.jdUid} xs={12} md={6} lg={4}>
              <div
                style={{ width: "100%" }}
                className="border-2 p-4 border-solid rounded-md"
              >
                <div className="flex">
                  <ImgCompany logoUrl={post.logoUrl} />
                  <Details
                    jdLink={post.jdLink}
                    companyName={post.companyName}
                    jobRole={post.jobRole}
                    location={post.location}
                  />
                </div>

                <EstimateSalary
                  minJdSalary={post.minJdSalary}
                  maxJdSalary={post.maxJdSalary}
                  CurrencyRupeeIcon={CurrencyRupeeIcon}
                />

                <AboutCompany
                  title={"About company:"}
                  description={"About us:"}
                  jobDetailsFromCompany={post.jobDetailsFromCompany}
                />

                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    marginBottom: "3px",
                    color: "#8b8b8b",
                    // cursor: "pointer",
                  }}
                >
                  Minimum Experience: <br />
                  <div className="text-black-900">
                    {post.minExp === null ? 0 : post.minExp}-{post.maxExp} years
                  </div>
                </p>
                <br />
                <button
                  className="w-full bg-green-300 text-black font-medium py-2 px-4 rounded-md"
                  onClick={() => console.log("clicked")}
                >
                  <BoltIcon color="yellow" />
                  Easy Apply
                </button>
              </div>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default PostList;
