import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Contador extends Component {
  state = {
    contador: 0,
  };
  increment() {
    if (this.state.contador < this.props.limite) {
      this.setState({ contador: this.state.contador + 1})
    }
  }
  decrement() {
    if (this.state.contador > this.props.limite) {
      this.setState({ contador: this.state.contador - 1})
    }
  }
  reset() {
    if (this.state.contador >= this.props.limite) {
      this.setState({ contador: 0})
    }
  }
  render() {
    return (
      <View>
        <Button title="Incrementar" onPress={() => this.increment()} />
        <Button title="Decrementar" onPress={() => this.decrement()} />
        <Button title="Reset" onPress={() => this.reset()} />
        <Text>Contador: {this.state.contador}</Text>
      </View>
    );
  }
}
