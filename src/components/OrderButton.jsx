import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ButtonGroup, IconButton } from "@mui/material";

export default function OrderButton({ onClick, sortOrder }) {
  return (
    <ButtonGroup
      orientation="vertical"
      sx={{
        border: "1px solid rgb(94, 132, 194, 0.3)",
        paddingX: 0.5,
      }}
    >
      <IconButton sx={{ padding: 0 }} onClick={() => onClick("asc")}>
        <ArrowDropUpIcon
          color={sortOrder === "desc" ? "disabled" : ""}
          fontSize="small"
        />
      </IconButton>
      <IconButton sx={{ padding: 0 }} onClick={() => onClick("desc")}>
        <ArrowDropDownIcon
          color={sortOrder === "asc" ? "disabled" : ""}
          fontSize="small"
        />
      </IconButton>
    </ButtonGroup>
  );
}
