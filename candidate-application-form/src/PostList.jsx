import { Button, Dialog, Text } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import BasicModal from "./BasicModal";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Link,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const PostList = () => {
  const [jobPost, setJobPost] = useState([]);
  const [filters, setFilters] = useState({
    role: "",
    numberOfEmployees: "",
    experienceLevel: "",
    jobType: "",
    payScale: "",
    name: "",
  });

  const selectRoles = [
    { value: "frontend", label: "frontend" },
    { value: "backend developer", label: "backend developer" },
    { value: "fullstack developer", label: "fullstack developer" },
    { value: "data scientist", label: "data scientist" },
    { value: "data engineer", label: "data engineer" },
    { value: "data architect", label: "data architect" },
    { value: "data analyst", label: "data analyst" },
    { value: "machine learning engineer", label: "machine learning engineer" },
  ];

  const selectNumberOfEmployees = [
    {
      value: "1-10",
      label: "1-10",
    },
    {
      value: "11-50",
      label: "11-50",
    },
    {
      value: "51-100",
      label: "51-100",
    },
    {
      value: "100+",
      label: "100+",
    },
  ];

  const selectExperience = [
    {
      value: "fresher",
      label: "fresher",
    },
    {
      value: "1-2 years",
      label: "1-2 years",
    },
    {
      value: "2-5 years",
      label: "2-5 years",
    },
  ];
  const selectjobType = [
    {
      value: "full time",
      label: "full time",
    },
    {
      value: "part time",
      label: "part time",
    },
    {
      value: "contract",
      label: "contract",
    },
    {
      value: "internship",
      label: "internship",
    },
  ];

  const selectBaseSalary = [
    {
      value: "10k-20k",
      label: "10k-20k",
    },
    {
      value: "20k-30k",
      label: "20k-30k",
    },
    {
      value: "30k-40k",
      label: "30k-40k",
    },
    {
      value: "40k-50k",
      label: "40k-50k",
    },
  ];

  useEffect(() => {
    getPosts();
  }, []);

  const _now = filters ? jobPost : [];
  const getPosts = async () => {
    try {
      const res = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON"
      );
      const response = await res.data.jdList;
      //   console.log(response.filter((e) => e.jobRole === "frontend"));
      setJobPost(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const { data, isLoading } = useQuery({
    queryKey: ["job-list"],
    queryFn: () =>
      axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON"),
  });
  console.log({ filters });
  console.log({ data: data?.data?.jdList });
  const getFilteredData = (data) => {
    let updatedData = data ? [...data] : [];
    if (filters.role)
      updatedData = updatedData.filter((row) => row.jobRole === filters.role);
    if (filters.companyName)
      updatedData = updatedData.filter(
        (row) => row.companyName === filters.companyName
      );

    return updatedData;
  };
  return (
    <>
      <div>
        <div>
          <Box sx={{ minWidth: 120, pt: 2, px: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                value={filters.role}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Role"
                onChange={(e) =>
                  setFilters({ ...filters, role: e.target.value })
                }
              >
                <MenuItem value={"frontend"}>Frontend</MenuItem>
                <MenuItem value={"android"}>Android</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Company</InputLabel>
              <Select
                value={filters.Company}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Company"
                onChange={(e) =>
                  setFilters({ ...filters, companyName: e.target.value })
                }
              >
                <MenuItem value={"Sony"}>SONY</MenuItem>
                <MenuItem value={"LG"}>LG</MenuItem>
                <MenuItem value={"Dropbox"}>{"Dropbox"}</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="flex flex-wrap gap-[32px] m-2">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          getFilteredData(data?.data?.jdList)?.map((post) => (
            <div
              key={post.jdUid}
              className="w-[250px]  grow shrink-0 basis-[450px]  border-2 p-4 border-solid rounded-md"
            >
              <div className="w-full">
                <div className="flex">
                  <div className="m-2">
                    <img
                      src={post.logoUrl}
                      alt="company logo"
                      width={"40px"}
                      height={"30px"}
                    />
                  </div>
                  <div>
                    <div className="flex flex-col pl-2">
                      <div className="flex ">
                        <Link
                          href={post.jLink}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <Text
                            style={{
                              fontSize: "13px",
                              fontWeight: "600",
                              letterSpacing: "1px",
                              marginBottom: "3px",
                              color: "#8b8b8b",
                              cursor: "pointer",
                            }}
                          >
                            {post.companyName}
                          </Text>
                        </Link>
                      </div>
                      <Text
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.5",
                          textTransform: "Capitalize",
                        }}
                      >
                        {post.jobRole}
                      </Text>

                      <div className=" capitalize text-[12px] mt-2 text-gray-900 font-bold space[.2rem]">
                        <Text>{post.location}</Text>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>

                <div>
                  <Text
                    style={{
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                  >
                    Estimated Salary : <CurrencyRupeeIcon sx={{ fontSize: 18 }} />
                    {post.minJdSalary === null ? 0 : post.minJdSalary} -{" "}
                    {post.maxJdSalary} LPA ✅
                  </Text>
                </div>
                <br />
                <div className="relative">
                  <div className=" h-[200px] overflow-hidden">
                    <div className="text-xl font-bold[200]">About company:</div>
                    <div className="text-xl font-bold">About us:</div>
                    <div
                      style={{
                        background:
                          "-webkit-linear-gradient(bottom, rgb(255 255 255), rgb(51, 51, 51)) text",
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                      }}
                    >
                      <Text>{post.jobDetailsFromCompany}</Text>
                    </div>

                    <BasicModal
                      btnName={"View Job"}
                      text={post.jobDetailsFromCompany}
                    />
                  </div>
                </div>

                <br />
                <Text
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
                </Text>
                <br />
                <Button
                  className="w-full bg-green-300 text-black font-medium py-2 px-4 rounded-md"
                  onClick={() => console.log("clicked")}
                >
                  Easy Apply
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PostList;
