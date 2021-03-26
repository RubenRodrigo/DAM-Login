import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      form: {
        textUser: '',
        textPassword: '',
      },
    };
  }
  changeInput = (name, text) => {
    console.log(this.state.form);
    this.setState({
      form: {
        ...this.state.form,
        [name]: text,
      },
    });
  };

  onPress = () => {
    this.setState({submit: true});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./img/tecsup_logo.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>Iniciar Sesion</Text>
        </View>
        <View style={{ paddingBottom: 20 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.changeInput('textUser', text)}
            value={this.state.form.textUser}
            placeholder="Ingresa tu usuario"
          />
        </View>
        <View style={{ paddingBottom: 20 }}>
          <TextInput
            secureTextEntry={true}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.changeInput('textPassword', text)}
            value={this.state.form.textPassword}
            placeholder="Ingresa tu contraseña"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Touch Here</Text>
        </TouchableOpacity>
        {this.state.submit && (
          <View style={styles.text}>
            <Text style={styles.subtitle}>Hola {this.state.form.textUser}</Text>
            <Text style={styles.subtitle}>
              Tu contraseña es: {this.state.form.textPassword}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20,
  },
  image: {
    flex: 1,
    width: 300,
    resizeMode: 'contain',
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countCotainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});
