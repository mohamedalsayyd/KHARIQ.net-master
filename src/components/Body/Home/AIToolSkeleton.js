import React from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

function AIToolSkeleton() {
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Skeleton variant="rounded" height={200} sx={{ mb: 1 }} />
        <Skeleton />
        <Skeleton width="60%" />
        <Skeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Skeleton variant="rounded" height={200} sx={{ mb: 1 }} />
        <Skeleton />
        <Skeleton width="60%" />
        <Skeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Skeleton variant="rounded" height={200} sx={{ mb: 1 }} />
        <Skeleton />
        <Skeleton width="60%" />
        <Skeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Skeleton variant="rounded" height={200} sx={{ mb: 1 }} />
        <Skeleton />
        <Skeleton width="60%" />
        <Skeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Skeleton variant="rounded" height={200} sx={{ mb: 1 }} />
        <Skeleton />
        <Skeleton width="60%" />
        <Skeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Skeleton variant="rounded" height={200} sx={{ mb: 1 }} />
        <Skeleton />
        <Skeleton width="60%" />
        <Skeleton />
      </Grid>
    </>
  );
}

export default AIToolSkeleton;
