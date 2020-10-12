import professionalTableSlice, { initialState, setPage, setPerPage, sortBy, selectPage, selectPerPage, selectProfessionals } from "./professionalTableSlice.js";
import isEqual from "lodash.isequal";
import transformProfessionals from "../helpers/transformProfessionals.js";
import mockData from "../../../../public/MOCK_DATA.json";

describe("professionalTableSlice slice", () => {
  describe("reducer, actions and selectors", () => {
    it("should return the initial state on first run", () => {
      // Arrange
      const nextState = initialState;

      // Act
      const result = professionalTableSlice.reducer(undefined, {});

      // Assert
      expect(result).toEqual(nextState);
    });

    it("should properly set the state when changing to specific page", () => {
      // Arrange
      const page = 2;

      // Act
      const nextState = professionalTableSlice.reducer(initialState, setPage(page));

      // Assert
      const rootState = { professionalTable: nextState };
      expect(selectPage(rootState)).toEqual(page);
    });

    it("should properly set the state when changing 'per page'", () => {
      // Arrange
      const perPage = 10;

      // Act
      const nextState = professionalTableSlice.reducer(initialState, setPerPage(perPage));

      // Assert
      const rootState = { professionalTable: nextState };
      expect(selectPerPage(rootState)).toEqual(perPage);
    });

    it("should properly sort data when sorting by date of birth", () => {
      // Arrange
      const mockResults = mockData.slice(0, 3);
      
      const stateWithProfessionalsLoaded = {
        ...initialState,
        professionals: [
          ...transformProfessionals(mockResults)
        ]
      }

      const expectedResults = transformProfessionals(mockResults).reverse();

      // Act
      const nextState = professionalTableSlice.reducer(
        stateWithProfessionalsLoaded,
        sortBy({ field: "dateOfBirth" })
      );

      // Assert
      const rootState = { professionalTable: nextState };
      expect(isEqual(selectProfessionals(rootState), expectedResults)).toEqual(true);
    });
  });
});