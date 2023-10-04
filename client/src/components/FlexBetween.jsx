const { styled } = require("@mui/system");
const { Box } = require("@mui/material");

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignIItems: "center"
});

export default FlexBetween;