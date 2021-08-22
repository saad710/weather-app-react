import { ListItem } from '@material-ui/core';
import { ListItemAvatar } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { Box, Divider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import Scrollbar from './../custom-scroll/Scrollbar';
import { chatSearch, fetchChats, openChat } from './../../redux/chats/Action';
import { CustomTextField } from '../custom-elements/CustomTextField';



const ChatListing = () => {
    //const searchTerm = useSelector((state) => state.chatReducer.chatSearch);
    const dispatch = useDispatch();
    const activeChat = useSelector((state) => state.chatReducer.chatContent);

    console.log(activeChat)
    useEffect(() => {
      dispatch(fetchChats());
    }, [dispatch]);
  
    const filterChats = (chats, chatSearch) => {
      if (chats)
        return chats.filter((t) =>
          t.name.toLocaleLowerCase().includes(chatSearch.toLocaleLowerCase())
        );
      else return chats;
    };
  
    const chats = useSelector((state) =>
      filterChats(state.chatReducer.chats, state.chatReducer.chatSearch)
    );
    return (
      <div>
        <Box
          p={2}
          sx={{
            pt: "21px",
            pb: "21px",
          }}
        >
          <CustomTextField
            id="outlined-search"
            placeholder="Search contacts"
            size="small"
            type="search"
            variant="outlined"
            inputProps={{ 'aria-label': 'Search Contacts' }}
            fullWidth
            onChange={(e) => dispatch(chatSearch(e.target.value))}
          />
        </Box>
        <Divider />
        <List sx={{ height: { lg: "calc(100vh - 365px)", sm: "100vh" }, p: 1 }}>
          <Scrollbar>
            {chats.map((chat) => (
              <ListItem
                button
                alignItems="flex-start"
                key={chat.id}
                onClick={() => dispatch(openChat(chat.id))}
                selected={activeChat === chat.id}
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={chat.thumb} />
                </ListItemAvatar>
                <ListItemText primary={chat.name} secondary={chat.excerpt} />
              </ListItem>
            ))}
          </Scrollbar>
        </List>
      </div>
    );
  };

export default ChatListing;