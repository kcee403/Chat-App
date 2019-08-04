import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import ColorPanel from './colorpanel/ColorPanel'; 
import SidePanel from './sidepanel/SidePanel';
import MetaPanel from './metapanel/MetaPanel'; 
import Messages from './messages/Messages';
import {connect} from 'react-redux';

export class ComponentType<P = any, S = any> extends Component<P, S> {    

}
interface Props {
  currentUser:{displayName:string}
}

export interface Store extends React.Props<any> {
  store?: any;
}


const App: React.FC = ({currentUser}:any) => {
  return (
    <Grid columns="equal" className="app" style={{background: '#eee'}}>
      <ColorPanel />
      <SidePanel currentUser={currentUser} />

      <Grid.Column style={{marginLeft: 320}}>
        <Messages />
      </Grid.Column>

      <Grid.Column width={4}>
        <MetaPanel />      
      </Grid.Column>
    </Grid>
    );
}
const mapStateToProps = (state:any):any => ({
  currentUser: state.user.currentUser
}); 

export default connect(mapStateToProps)(App);
