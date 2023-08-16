import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PrivateRoutes} from './routes/private';
import {Login} from './screen/auth';

const Routes = () => {
  return (
    // <PrivateRoutes />
    <Login />
  );
};

export default Routes;

const styles = StyleSheet.create({});
