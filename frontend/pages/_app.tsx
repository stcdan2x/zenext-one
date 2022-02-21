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

function MyApp({ Component, pageProps }: AppProps) {
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
			uri: "https://graphql.contentful.com/content/v1/spaces/dxiopi40liwa/environments/master",
			headers: { Authentication: "Bearer iGhTpR2RDNMlW_uo9SEec15D6vzh_GMZwkM965L2Y-g" }
		})
	]);

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: link,
		ssrMode: typeof window === "undefined" // set to true for SSR
	});

	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

export default MyApp;
