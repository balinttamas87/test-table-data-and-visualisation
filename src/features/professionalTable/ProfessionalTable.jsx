import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProfessionals,
  selectPage,
  selectPerPage,
} from "./store/professionalTableSlice";
import {
  getProfessionals,
  setPage,
  setPerPage,
  sortBy,
} from "./store/professionalTableSlice";
import Pagination from "./pagination/Pagination.jsx";
import ExperienceBarChart from "./charts/ExperienceBarChart";
import SalaryBarChart from "./charts/SalaryBarChart";
import ExperiencePieChart from "./charts/ExperiencePieChart";
import SalaryPieChart from "./charts/SalaryPieChart";
import getRandomColor from "./helpers/getRandomColor";
import "./styles.css";

const ProfessionalTableSimple = () => {
  const dispatch = useDispatch();
  const professionalData = useSelector(selectProfessionals);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;

  const professionals = useMemo(
    () => professionalData.slice(startIndex, endIndex),
    [professionalData, startIndex, endIndex]
  );

  const onChangePage = (page) => {
    dispatch(setPage(page));
  };
  const onChangePerPage = (perPage) => {
    perPage > 0 && dispatch(setPerPage(perPage));
  };

  useEffect(() => {
    dispatch(getProfessionals());
  }, []);

  return (
    <div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First name</th>
              <th>Last name</th>
              <th
                onClick={() => dispatch(sortBy({ field: "dateOfBirth" }))}
                className="sortable-column"
              >
                Date of birth
              </th>
              <th
                onClick={() => dispatch(sortBy({ field: "industry" }))}
                className="sortable-column"
              >
                Industry
              </th>
              <th
                onClick={() => dispatch(sortBy({ field: "salary" }))}
                className="sortable-column"
              >
                Salary
              </th>
              <th>Years of experience</th>
            </tr>
          </thead>
          <tbody>
            {professionals.map((professional) => {
              return (
                <tr key={professional.id}>
                  <td>{professional.id}</td>
                  <td>{professional.firstName}</td>
                  <td>{professional.lastName}</td>
                  <td>{professional.dateOfBirth}</td>
                  <td>{professional.industry}</td>
                  <td>{professional.salary}</td>
                  <td>{professional.yearsOfExperience}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        perPage={perPage}
        count={professionalData.length}
        onChangePage={onChangePage}
        onChangePerPage={onChangePerPage}
      />

      <ExperienceBarChart
        labels={professionals.map(p => `${p.firstName} ${p.lastName}`)}
        data={professionals.map(p => p.yearsOfExperience)}
        backgroundColors={professionals.map(() => getRandomColor())}
      />

      <SalaryBarChart
        labels={professionals.map(p => `${p.firstName} ${p.lastName}`)}
        data={professionals.map(p => p.salary)}
        backgroundColors={professionals.map(() => getRandomColor())}
      />

      <ExperiencePieChart
        labels={professionals.map(p => `${p.firstName} ${p.lastName}`)}
        data={professionals.map(p => p.yearsOfExperience)}
        backgroundColors={professionals.map(() => getRandomColor())}
      />

      <SalaryPieChart
        labels={professionals.map(p => `${p.firstName} ${p.lastName}`)}
        data={professionals.map(p => p.salary)}
        backgroundColors={professionals.map(() => getRandomColor())}
      />

    </div>
  );
};

export default ProfessionalTableSimple;
