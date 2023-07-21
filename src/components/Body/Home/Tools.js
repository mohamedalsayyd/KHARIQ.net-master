import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AIToolCard from "./AIToolCard";
import AIToolSkeleton from "./AIToolSkeleton";
import NoResultsSkeleton from "./NoResultsSkeleton";
import { filterSearchResults } from "./filterSearchResults";
import Search from "./Search";
import { ToolsContext } from "../../../context/toolsContext";

function Tools() {
  document.title = "خارق";
  const { tools, isLoading } = React.useContext(ToolsContext);
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <Container maxWidth="lg">
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Search setSearchTerm={setSearchTerm} />
      </Container>
      <Grid container spacing={3}>
        {isLoading ? (
          <AIToolSkeleton />
        ) : (
          (() => {
            const results = filterSearchResults(tools, searchTerm);
            if (searchTerm === null) {
              return tools.map((tool) => (
                <AIToolCard key={tool._id} {...tool} />
              ));
            }
            if (results.length > 0) {
              return results.map((tool) => (
                <AIToolCard key={tool._id} {...tool} />
              ));
            }
            return <NoResultsSkeleton />;
          })()
        )}
      </Grid>
    </Container>
  );
}

export default Tools;
