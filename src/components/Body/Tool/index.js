import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavTool } from "../../../store/favTools-slice";
import { ToolsContext } from "../../../context/toolsContext";

function Tool() {
  const { toolId } = useParams();
  const { tools, isLoading } = React.useContext(ToolsContext);
  const favTools = useSelector((state) => state.favTools.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isLoading) {
    const tool = tools.find(
      (tool) => tool.title.toLowerCase() === toolId.toLowerCase()
    );

    if (!tool) {
      return navigate("/");
    } else {
      document.title = `خارق | ${tool.title}`;
      return (
        <Container sx={{ my: "auto" }}>
          <Grid item>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                minHeight: "100px",
                border: 1,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 4,
              }}
            >
              <CardMedia
                component="img"
                image={"https://khariq.storming-eg.com" + tool.img}
                alt={tool.title}
                sx={{
                  maxWidth: { md: 450 },
                  maxHeight: 400,
                }}
              />
              <CardContent sx={{ p: { sx: 0, md: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  {tool.title}
                </Typography>
                <Typography variant="subtitle1">{tool.desc2}</Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ display: "flex", flexDirection: "row", py: 3 }}
                >
                  <Typography sx={{ pr: 1, fontWeight: "bold" }}>
                    السعر:
                  </Typography>
                  <Typography>{tool.paid ? "مدفوع" : "مجاني"}</Typography>
                </Typography>
                <Stack direction="row" spacing="auto" sx={{ mb: 2 }}>
                  <Button variant="outlined" target="_blank" href={tool.link}>
                    قم بزيارة {tool.title}
                  </Button>
                  <Tooltip title="أضف الى المفضلة" arrow>
                    <Checkbox
                      inputProps={{ "aria-label": "أضف الى المفضلة" }}
                      name={tool.title}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      checked={favTools.some(
                        (favtool) => favtool._id === tool._id
                      )}
                      onChange={() => dispatch(toggleFavTool(tool))}
                    />
                  </Tooltip>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      );
    }
  } else {
    return (
      <Container sx={{ my: "auto" }}>
        <Skeleton variant="rounded" height={300} />
      </Container>
    );
  }
}

export default Tool;
