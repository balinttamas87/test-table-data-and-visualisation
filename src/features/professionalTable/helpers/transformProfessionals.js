const transformProfessionals = (data) => {
    /* 
        could transform the object keys dynamically
        using Regex to remove the underscore and apply camelCase
    */
    return data.reduce((acc, professional) => {
        const transformedProfessional = {
            id: professional.id,
            firstName: professional.first_name,
            lastName: professional.last_name,
            dateOfBirth: professional.date_of_birth,
            industry: professional.industry,
            salary: professional.salary,
            yearsOfExperience: professional.years_of_experience,
        };
        return [...acc, transformedProfessional];
    }, []);
};

export default transformProfessionals;