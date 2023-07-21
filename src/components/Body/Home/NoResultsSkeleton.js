import React from "react";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";

function NoResultsSkeleton() {
  return (
    <Grid item xs={12}>
      <Alert severity="info">عذراً لم يتم العثور على نتائج</Alert>
    </Grid>
  );
}

export default NoResultsSkeleton;
