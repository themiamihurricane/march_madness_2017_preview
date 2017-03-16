export const tableSelect = (team) => {
    console.log(team);
    return {
        type: "TABLE_OPTION_SELECTED",
        payload: team
    };
};