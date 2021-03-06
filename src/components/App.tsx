import React from 'react';
import {Grid} from 'semantic-ui-react';
import ColorPanel from './colorpanel/ColorPanel'; 
import SidePanel from './sidepanel/SidePanel';
import MetaPanel from './metapanel/MetaPanel'; 
import Messages from './messages/Messages';
import {connect} from 'react-redux';

// Exported Types
export type InputEvent = React.FormEvent<HTMLInputElement>;
export type FormEvent = React.FormEvent<HTMLFormElement>;
export type User = {displayName:string, photoURL:string};
export type Notification = {
  id: number,
  total: number,
  lastKnownTotal: number,
  count: number,
}

export interface IChannel {id:number, name:string, details: string};

export interface INewChannel {
    id: string,
    name: string,
    details: string,
    createdBy: {
        name: string,
        avatar: string
    }
}

export interface Store extends React.Props<any> {
  store?: any;
}

// Non Exported types
interface Props {
  currentUser:{displayName:string}
}

const App: React.FC = ({currentUser, currentChannel, isPrivateChannel,
                        userPosts, primaryColor, secondaryColor}:any) => {
  
  return (
    <Grid columns="equal" style={{background: secondaryColor, height: '100vh', margin: '0' }}> 
      <ColorPanel
        key={currentUser && currentUser.name}
        currentUser={currentUser} />
      <SidePanel
        key={currentUser && currentUser.uid}
        currentUser={currentUser}
        primaryColor={primaryColor}
        />

      <Grid.Column style={{marginLeft: 320}}>
        <Messages
          key={currentChannel && currentChannel.id}
          currentChannel={currentChannel}
          currentUser={currentUser}
          isPrivateChannel={isPrivateChannel}
        />
      </Grid.Column>

      <Grid.Column width={4}>
        <MetaPanel
          key={currentChannel && currentChannel.name}
          currentChannel={currentChannel}
          userPosts={userPosts}
          isPrivateChannel={isPrivateChannel} />      
      </Grid.Column>
    </Grid>
    );
};

const mapStateToProps = (state:any):any => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.user.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor
}); 

export default connect(mapStateToProps)(App);