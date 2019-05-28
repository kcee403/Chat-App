import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import firebase from '../../../firebase';
// import styles from "./UserPanel.module.scss";
import './UserPanel.scss'

class UserPanel extends React.Component {
  dropdownOptions = () => [
    {
      key: "user",
      text:<span> Signed in as<strong>User</strong></span>,
      disabled: true
      
    },
    {
        key: 'avatar',
        text: <span>Change Avatar</span>
    },
    {
        key: 'signout',
        text: <span onClick={this.handleSignout}>Sign Out</span>
    }
  ];

  handleSignout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log('signed out!'));
  }
  render() {
    return (
      <Grid 
      style={{ background: "#4c3c4c" }}>
        <Grid.Column>
          <Grid.Column>
            <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
              {/* App Header */}
              <Header inverted floated="left" as="h2">
                <Icon name="code" />
                <Header.Content>DevChat</Header.Content>
              </Header>
            </Grid.Row>

            {/* User Dropdown */}
            <Header style={{ padding: "0.25em" }} as="h4" inverted />
            <Dropdown
              trigger={<span style={{color: 'white'}}>User</span>}
              options={this.dropdownOptions()}
            />
          </Grid.Column>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;

// === LEFT OFF 3:34 ======
