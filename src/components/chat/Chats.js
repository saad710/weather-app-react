import { Card, Divider, Grid } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React, { useState } from 'react';
import ChatContent from './ChatContent';
import ChatMsgSent from './ChatMsgSent';
import ChatSidebar from './ChatSidebar';
import { Container } from '@material-ui/core/Container';


const Chats = () => {
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(true);
    return (
        <Grid container>
            <Grid item sm={8}>
            <Card sx={{ display: "flex", p: 0 }} variant="outlined">
        <ChatSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        <Box flexGrow={1}>
          <ChatContent toggleChatSidebar={() => setMobileSidebarOpen(true)} />
          <Divider />
          <ChatMsgSent />
        </Box>
      </Card>
            </Grid>
        </Grid>
    );
};

export default Chats;