import React from "react";
import type { AppProps /*, AppContext*/ } from "next/app";
import NProgress from "nprogress";

import "../styles/globals.css";
import "nprogress/nprogress.css";
import "../components/styles/nprogress.css";
import Layout from "../components/Layout";
import Router from "next/router";
import nProgress from "nprogress";
import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) => {
			alert(`Graphql Error: ${message} in ${locations}. PATH:${path}`);
		});
	}
});

const link = from([
	errorLink,
	new HttpLink({
		uri: process.env.CONTENTFUL_URI,
		headers: { Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}` }
	})
]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
	ssrMode: typeof window === "undefined" // set to true for SSR
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

export default MyApp;
