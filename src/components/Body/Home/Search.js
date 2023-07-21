import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Popper from "@mui/material/Popper";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { ToolsContext } from "../../../context/toolsContext";
import { createFilterOptions } from "@mui/material/Autocomplete";

// MUI Autocomplete suggestions limiy
const OPTIONS_LIMIT = 35;
const defaultFilterOptions = createFilterOptions();
const filterOptions = (options, state) => {
  return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
};

const SearchTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&": {
      backgroundColor: "rgba(0,0,0,1)",
      paddingTop: 5,
      paddingBottom: 5,
      boxSizing: "border-box",
      borderRadius: "25px",
      backgroundClip: "padding-box",
      border: "solid 2 transparent",
    },
    "&:before": {
      backgroundImage:
        "linear-gradient(135deg,#ff51d7,#ff4848 30%,#6248ff 70%,#1862ff )",
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      borderRadius: "inherit",
      margin: -2,
    },
    "& fieldset": {
      borderWidth: 0,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "&:hover fieldset": {
      borderWidth: 0,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "&.Mui-focused fieldset": {
      borderWidth: 0,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
});

const SearchPopper = (props) => {
  const modifiers = [
    {
      name: "flip",
      options: {
        fallbackPlacements: [],
      },
    },
  ];

  return (
    <Popper
      {...props}
      modifiers={modifiers}
      popperOptions={{
        placement: "bottom",
      }}
    />
  );
};

const SearchAutoComplete = styled(Autocomplete)({
  "&.Mui-expanded": {
    ".MuiOutlinedInput-root": {
      borderRadius: "24px 24px 0 0",
    },
    ".MuiOutlinedInput-root:before": {
      borderRadius: "25px 25px 0 0",
    },
  },
});

const ListPaper = (props) => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#1a1a1a",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        mt: "2px",
        mx: "-2px",
      }}
      {...props}
    />
  );
};

function renderOption(props, option, { selected }) {
  if (option.type === "tag") {
    return (
      <li {...props} selected={selected}>
        <span>{option.label}</span>
      </li>
    );
  } else if (option.type === "tool") {
    return (
      <Link
        {...props}
        selected={selected}
        to={`/tool/${option.label.toLowerCase()}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <span>{option.label}</span>
      </Link>
    );
  }
}

export default function Search({ setSearchTerm }) {
  const { tools, isLoading } = React.useContext(ToolsContext);
  const [searchOptions, setSearchOptions] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoading) {
      const resultTags = new Set(tools.flatMap(({ tags }) => tags));

      const options_tag = Array.from(resultTags).map((tag) => {
        return { label: tag, type: "tag" };
      });
      const options_tool = tools.map((tool) => {
        return { label: tool.title, type: "tool" };
      });

      setSearchOptions([...options_tag, ...options_tool]);
    }
  }, [isLoading, tools]);

  function handleChange(e, option) {
    if (option) {
      if (option.type === "tool") {
        setSearchTerm(null);
        navigate(`/tool/${option.label.toLowerCase()}`);
      } else if (option.type === "tag") {
        setSearchTerm(option.label);
      }
    } else {
      setSearchTerm(null);
    }
  }

  return (
    <SearchAutoComplete
      options={searchOptions}
      renderOption={renderOption}
      getOptionLabel={(option) => option.label}
      onChange={handleChange}
      filterOptions={filterOptions}
      id="search-autocomplete"
      PaperComponent={ListPaper}
      PopperComponent={(props) => <SearchPopper {...props} />}
      sx={{ maxWidth: { md: 580, sm: 780 }, mx: "auto" }}
      renderInput={(params) => (
        <SearchTextField
          {...params}
          autoFocus
          placeholder="ابحث عن الأداة المناسبة..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  mr: 1,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
