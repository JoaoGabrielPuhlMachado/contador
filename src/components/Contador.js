import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Contador extends Component {
  state = {
    contador: 0
  }
  incrementar() {
    if (this.state.contador < this.props.limite) {
      this.setState({ contador: this.state.contador + 1 })
    }
  }
  decrementar() {
    if (this.state.contador < this.props.limite) {
      this.setState({ contador: this.state.contador - 1 })
    }
  }
  reset() {
    if (this.state.contador = 10) {
      this.setState({contador: 0})
    }
  }
  render() {
    return (
      <View>
        <Text>Contador</Text>
        <Text>{this.state.contador}</Text>
        <Button title="Incrementar" onPress={() => this.incrementar()} />
        <Button title="Decrementar" onPress={() => this.decrementar()} />
        <Button title="Reset" onPress={() => this.reset()}/>
      </View>
    )
  }
}
