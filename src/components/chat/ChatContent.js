import { Box } from '@material-ui/system';
import React from 'react';
import FeatherIcon from "feather-icons-react";
import { useSelector } from 'react-redux';
import { Avatar, ListItem, Typography } from '@material-ui/core';
import { ListItemAvatar } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import ScrollBar from 'react-perfect-scrollbar';

const ChatContent = (props) => {
    const chatDetails = useSelector(
      (state) => state.chatReducer.chats[state.chatReducer.chatContent - 1]
    );

    console.log(chatDetails)
    return (
      <Box>
        {chatDetails ? (
          <div>
            <Box
              display="flex"
              alignItems="center"
              p={2}
              sx={{
                pt: "8px",
                pb: "7px",
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", md: "block", lg: "none" },
                  mr: "10px",
                }}
              >
                <FeatherIcon
                  icon="menu"
                  width="18"
                  onClick={props.toggleChatSidebar}
                />
              </Box>
              <ListItem key={chatDetails.id} dense disableGutters>
                <ListItemAvatar>
                  <Avatar alt={chatDetails.name} src={chatDetails.thumb} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h4">{chatDetails.name}</Typography>
                  }
                  secondary={chatDetails.status}
                />
              </ListItem>
            </Box>
            <Divider />
            <ScrollBar style={{ height: "calc(100vh - 445px)" }}>
              <Box p={2}>
                {Object.keys(chatDetails.chatHistory).map((chat) =>
                  Object.keys(chatDetails.chatHistory[chat]).map((key) =>
                    Object.keys(chatDetails.chatHistory[chat][key]).map((k) =>
                      k === "from" ? (
                        <Box
                          display="flex"
                          alignItems="start   "
                          flexDirection="row"
                          key={k}
                        >
                          <ListItemAvatar>
                            <Avatar
                              alt={chatDetails.name}
                              src={chatDetails.thumb}
                            />
                          </ListItemAvatar>
                          <div className="pl-3">
                            {chatDetails.chatHistory[chat][key][k].map((v) => (
                              <Box
                                mb={1}
                                key={v}
                                sx={{
                                  p: 2,
                                  backgroundColor: "primary.light",
                                  borderRadius: "6px",
                                  color: (theme) =>
                                    `${
                                      theme.palette.mode === "dark"
                                        ? "rgba(0, 0, 0, 0.87)"
                                        : "rgba(0, 0, 0, 0.87)"
                                    }`,
                                }}
                              >
                                {v}
                              </Box>
                            ))}
                          </div>
                        </Box>
                      ) : (
                        <Box key={k}>
                          {chatDetails.chatHistory[chat][key][k].map((v) => (
                            <Box
                              mb={1}
                              display="flex"
                              alignItems="flex-end"
                              flexDirection="row-reverse"
                              className="chat-content"
                              key={v}
                            >
                              <Box
                                sx={{
                                  p: 2,
                                  backgroundColor: "primary.light",
                                  ml: "auto",
                                  borderRadius: "6px",
                                  color: (theme) =>
                                    `${
                                      theme.palette.mode === "dark"
                                        ? "rgba(0, 0, 0, 0.87)"
                                        : "rgba(0, 0, 0, 0.87)"
                                    }`,
                                }}
                              >
                                {v}
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      )
                    )
                  )
                )}
              </Box>
            </ScrollBar>
          </div>
        ) : (
          <Box display="flex" alignItems="center" p={2} pb={1} pt={1}>
            <Box
              sx={{
                display: { xs: "flex", md: "flex", lg: "none" },
                mr: "10px",
              }}
            >
              <FeatherIcon
                icon="menu"
                width="18"
                onClick={props.toggleChatSidebar}
              />
            </Box>
            <Typography varient="h4">Select Chat</Typography>
          </Box>
        )}
      </Box>
    );
  };
export default ChatContent;