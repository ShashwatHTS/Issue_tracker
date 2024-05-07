/* eslint-disable react/prop-types */

const EstimateSalary = ({ minJdSalary, maxJdSalary, CurrencyRupeeIcon }) => {
  return (
    <div className="text-md font-bold[100-200]">
      <p>
        Estimated Salary :<CurrencyRupeeIcon fontSize="small" />
        {minJdSalary === null ? 0 : minJdSalary} - {maxJdSalary} LPA ✅
      </p>
    </div>
  );
};

export default EstimateSalary;
