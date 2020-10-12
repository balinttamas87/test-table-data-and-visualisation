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
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import getRandomColor from "./helpers/getRandomColor";
import "./styles.css";

const ProfessionalTableSimple = () => {
  const dispatch = useDispatch();
  const professionalData = useSelector(selectProfessionals);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);

  useEffect(() => {
    dispatch(getProfessionals());
  }, []);

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

      <BarChart
        labels={professionals.map((p) => `${p.firstName} ${p.lastName}`)}
        title="Relation between years of experience and salary"
        data={professionals.map((p) => p.yearsOfExperience)}
        secondaryData={professionals.map((p) => (p.salary / 10000))}
        backgroundColors={professionals.map(() => getRandomColor())}
      />

      <BarChart
        labels={professionals.map((p) => `${p.firstName} ${p.lastName}`)}
        title="Years of Experience"
        data={professionals.map((p) => p.yearsOfExperience)}
        backgroundColors={professionals.map(() => getRandomColor())}
      />

      <BarChart
        labels={professionals.map((p) => `${p.firstName} ${p.lastName}`)}
        title="Salary"
        data={professionals.map((p) => p.salary)}
        backgroundColors={professionals.map(() => getRandomColor())}
      />

      <PieChart
        labels={professionals.map((p) => `${p.firstName} ${p.lastName}`)}
        title="Years of Experience"
        data={professionals.map((p) => p.yearsOfExperience)}
        backgroundColors={professionals.map(() => getRandomColor())}
      />

      <PieChart
        labels={professionals.map((p) => `${p.firstName} ${p.lastName}`)}
        title="Salary"
        data={professionals.map((p) => p.salary)}
        backgroundColors={professionals.map(() => getRandomColor())}
      />
    </div>
  );
};

export default ProfessionalTableSimple;
