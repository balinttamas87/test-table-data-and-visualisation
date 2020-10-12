import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";


describe("Test pagination component", () => {
    it("should render pagination", () => {
        const { queryByText } = render(
            <Pagination
                page={1}
                perPage={5}
                count={100}
                onChangePage={() => { }}
                onChangePerPage={() => { }}
            />
        );

        expect(queryByText(/Next/i)).not.toBeNull();
        expect(queryByText(/Previous/i)).not.toBeNull();
        expect(queryByText(/Page: 1/i)).not.toBeNull();
        expect(queryByText(/Per page: 5/i)).not.toBeNull();
    });

    it("should render pagination with Previous button disabled", () => {
        const { queryByText } = render(
            <Pagination
                page={1}
                perPage={5}
                count={100}
                onChangePage={() => { }}
                onChangePerPage={() => { }}
            />
        );

        expect(queryByText(/Previous/i).closest('button')).toBeDisabled();
    });

    it("should render pagination with Next button disabled", () => {
        const { queryByText } = render(
            <Pagination
                page={20}
                perPage={5}
                count={100}
                onChangePage={() => { }}
                onChangePerPage={() => { }}
            />
        );

        expect(queryByText(/Next/i).closest('button')).toBeDisabled();
    });

    it("should call onChangePage", () => {
        const onChangePage = jest.fn();

        const { queryByText } = render(
            <Pagination
                page={1}
                perPage={5}
                count={100}
                onChangePage={onChangePage}
                onChangePerPage={() => { }}
            />
        );

        const nextButton = queryByText(/Next/i).closest('button');
        fireEvent.click(nextButton)

        expect(onChangePage).toHaveBeenCalled();
    });

    it("should call onChangePerPage", () => {
        const onChangePerPage = jest.fn();

        const { queryByDisplayValue } = render(
            <Pagination
                page={1}
                perPage={5}
                count={100}
                onChangePage={() => {}}
                onChangePerPage={onChangePerPage}
            />
        );

        const input = queryByDisplayValue("5");
        fireEvent.change(input, { target: { value: '10' } })
        
        expect(onChangePerPage).toHaveBeenCalled();

    });


});