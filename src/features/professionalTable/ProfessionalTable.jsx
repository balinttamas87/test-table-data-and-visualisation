import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectData, selectPage, selectPerPage } from "./store/professionalTableSlice.js";
import { getProfessionals, setPage, setPerPage } from "./store/professionalTableSlice.js";
import transformProfessionals from "./helpers/transformProfessionals";
import Pagination from "./pagination/Pagination.jsx";
import "./styles.css";

const ProfessionalTableSimple = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;

  const professionals = useMemo(
    () =>
      transformProfessionals(data).slice(startIndex, endIndex),
    [data, startIndex, endIndex]
  );

  const onChangePage = (page) => {
    dispatch(setPage(page));
  };
  const onChangePerPage = (perPage) => {
    dispatch(setPerPage(perPage));
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
            <th>Date of birth</th>
            <th>Industry</th>
            <th>Salary</th>
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
        count={data.length}
        onChangePage={onChangePage}
        onChangePerPage={onChangePerPage}
      />

    </div>
  );
};

export default ProfessionalTableSimple;
