import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      activeId: '0',
      activeState: [
        { isActive: true },
        { isActive: false },
        { isActive: false },
      ]
    };
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          {this._renderActiveScreen(this.state.activeId)}
        </Content>
        <Footer>
          <FooterTab>
            <Button
              vertical
              transparent={this.state.activeState[0].isActive}
              onPress={() => this._onFooterTabPress('0')}
              activeOpacity={1}
            >
              <Icon type="Entypo" name="shop" />
              <Text>市场</Text>
            </Button>
            <Button
              vertical
              transparent={this.state.activeState[1].isActive}
              onPress={() => this._onFooterTabPress('1')}
              activeOpacity={1}
            >
              <Icon type="MaterialCommunityIcons" name="bookmark-plus-outline" />
              <Text>自选</Text>
            </Button>
            <Button
              vertical
              transparent={this.state.activeState[2].isActive}
              onPress={() => this._onFooterTabPress('2')}
              activeOpacity={1}
            >
              <Icon type="MaterialCommunityIcons" name="layers" />
              <Text>持有</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
  _renderActiveScreen(activeId) {
    switch (activeId) {
      case '0':
        return (
          <Text>市场</Text>
        )
      case '1':
        return (
          <Text>自选</Text>
        )
      case '2':
        return (
          <Text>持有</Text>
        )
    }
  }
  _onFooterTabPress(activeId) {
    switch (activeId) {
      case '0':
        this.setState({
          activeId: '0',
          activeState: [
            { isActive: true },
            { isActive: false },
            { isActive: false },
          ]
        })
        break
      case '1':
        this.setState({
          activeId: '1',          
          activeState: [
            { isActive: false },
            { isActive: true },
            { isActive: false },
          ]
        })
        break
      case '2':
        this.setState({
          activeId: '2',          
          activeState: [
            { isActive: false },
            { isActive: false },
            { isActive: true },
          ]
        })
        break
    }
  }
}