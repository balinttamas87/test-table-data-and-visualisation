import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "./store/professionalTableSlice.js";
import { getProfessionals } from "./store/professionalTableSlice.js";
import transformProfessionals from "./helpers/transformProfessionals";
import "./styles.css";

const ProfessionalTableSimple = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  const professionals = useMemo(
    () =>
      transformProfessionals(data).slice(0, 5),
    [data]
  );

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
    </div>
  );
};

export default ProfessionalTableSimple;
