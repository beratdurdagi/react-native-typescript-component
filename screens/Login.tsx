import { StyleSheet } from "react-native";
import React, { memo } from "react";
import { Block, Input, Button, Text } from "../components";
import useTheme from "./../hooks/useTheme";

const Login = () => {
  const { sizes, colors } = useTheme();
  return (
    
    <Block marginTop={sizes.xxl} paddingHorizontal={sizes.padding}>
      <Text weight="bold" h1 marginBottom={sizes.m}>Log in</Text>
      <Text  weight='500'>Email</Text>
      <Input placeholder="Email" marginVertical={sizes.base}  marginBottom={sizes.md}
      padding={10} placeholderTextColor={colors.black} style={{fontWeight:'500'}}/>


      <Text  weight='500'>Password</Text>
      <Input placeholder="Password" marginVertical={sizes.base} marginBottom={sizes.md}
      padding={10} placeholderTextColor={colors.text} style={{fontWeight:'500'}}/>

    <Button align="center" justify="center" borderColor={'white'} style={styles.shadows} color={
colors.primary
    }>
      <Text h4 weight="800" color={colors.white}>Log in</Text>
    </Button>
    </Block>

    
    
  );
};

export default memo(Login);

const styles = StyleSheet.create({
  shadows: {
    shadowOpacity: 0.5,
    
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 2,
  },
});
