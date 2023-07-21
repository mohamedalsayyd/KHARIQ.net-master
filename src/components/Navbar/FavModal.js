import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavTool } from "../../store/favTools-slice";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import LaunchIcon from "@mui/icons-material/Launch";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  minWidth: 320,
  maxWidth: 400,
  bgcolor: "rgb(0,0,0)",
  border: 1,
  borderColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

function FavModal({ open, handleClose }) {
  const favTools = useSelector((state) => state.favTools.value);
  const dispatch = useDispatch();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" textAlign="center">
          العناصر المفضلة
        </Typography>
        <List sx={{ width: "100%" }}>
          {favTools.length > 0 ? (
            favTools.map((tool) => {
              return (
                <ListItem
                  key={tool._id}
                  secondaryAction={
                    <Tooltip title={`قم بزيارة ${tool.title}`} arrow>
                      <IconButton
                        edge="end"
                        aria-label="comments"
                        target="_blank"
                        href={tool.link}
                      >
                        <LaunchIcon />
                      </IconButton>
                    </Tooltip>
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <Tooltip title="إزالة" arrow>
                        <Checkbox
                          edge="start"
                          checked={true}
                          icon={<DeleteIcon />}
                          checkedIcon={<DeleteIcon />}
                          onChange={() => dispatch(toggleFavTool(tool))}
                          inputProps={{ "aria-labelledby": tool.title }}
                        />
                      </Tooltip>
                    </ListItemIcon>
                    <ListItemText id={tool._id} primary={tool.title} />
                  </ListItemButton>
                </ListItem>
              );
            })
          ) : (
            <Typography
              align="center"
              sx={{ py: 4, color: "rgba(255,255,255,0.5)" }}
            >
              لا يوجد عناصر مفضله
            </Typography>
          )}
        </List>
      </Box>
    </Modal>
  );
}

export default FavModal;
