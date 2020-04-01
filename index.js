/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ApolloProvider} from '@apollo/react-hooks';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';

const client = new ApolloClient({
	link: new HttpLink({
		uri: 'http://localhost:4000/graphql',
	}),
	cache: new InMemoryCache(),
});
const x = () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
AppRegistry.registerComponent(appName, () => x);
