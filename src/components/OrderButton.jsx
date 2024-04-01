import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ButtonGroup, IconButton } from "@mui/material";
import { PropTypes } from "prop-types";

export default function OrderButton({ onClick, sortOrder, disabled }) {
  return (
    <ButtonGroup
      orientation="vertical"
      sx={{
        border: "1px solid rgb(94, 132, 194, 0.3)",
        paddingX: 0.5,
      }}
    >
      <IconButton
        sx={{ padding: 0 }}
        onClick={() => onClick("asc")}
        disabled={disabled}
      >
        <ArrowDropUpIcon
          color={sortOrder === "desc" ? "disabled" : ""}
          fontSize="small"
        />
      </IconButton>
      <IconButton
        sx={{ padding: 0 }}
        onClick={() => onClick("desc")}
        disabled={disabled}
      >
        <ArrowDropDownIcon
          color={sortOrder === "asc" ? "disabled" : ""}
          fontSize="small"
        />
      </IconButton>
    </ButtonGroup>
  );
}

OrderButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  sortOrder: PropTypes.oneOf(["desc", "asc"]).isRequired,
  disabled: PropTypes.bool.isRequired,
};

OrderButton.defaultProps = {
  sortOrder: "desc",
  disabled: false,
};
