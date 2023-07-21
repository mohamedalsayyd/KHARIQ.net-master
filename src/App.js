import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ToolsContext } from "./context/toolsContext";
import { RouterProvider } from "react-router-dom";
import { CacheProvider } from "@emotion/react";

import { router } from "./router";
import { theme, cacheRtl } from "./theme";

export default function App() {
  const [tools, setTools] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/tools.json");
        const data = await response.json();
        setTools(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <ToolsContext.Provider value={{ tools, isLoading }}>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cacheRtl}>
          <CssBaseline />
          <RouterProvider router={router} />
        </CacheProvider>
      </ThemeProvider>
    </ToolsContext.Provider>
  );
}
