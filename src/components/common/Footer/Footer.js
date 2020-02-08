import React from 'react';
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment
  } from 'semantic-ui-react';
  import ScrollButtonToTop from '../ScrollButtonToTop/ScrollButtonToTop'
  import logo from '../../../nykaa_logo.svg';

function Footer() {
    return (
        <Segment style={{margin: '2.5em 0em 0em', padding: '2.5em 0em', background: '#ccc' }} vertical inverted>
            <Container textAlign='center'>
                <Grid columns={4} divided stackable inverted>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h4' content='Group 1' />
                            <List link >
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' content='Group 2' />
                            <List link >
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' content='Group 3' />
                            <List link >
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' content='Group 4' />
                            <List link >
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider inverted section />
                <Image src={logo} centered size='mini' />
                <List horizontal divided link size='small'>
                    <List.Item as='a' href='#'>
                    Site Map
                    </List.Item>
                    <List.Item as='a' href='#'>
                    Contact Us
                    </List.Item>
                    <List.Item as='a' href='#'>
                    Terms and Conditions
                    </List.Item>
                    <List.Item as='a' href='#'>
                    Privacy Policy
                    </List.Item>
                </List>
            </Container>
            <ScrollButtonToTop/>
        </Segment>
        
    );
}

export default Footer;
