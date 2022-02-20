import React from "react";
import type { AppProps /*, AppContext*/ } from "next/app";
import NProgress from "nprogress";

import "../styles/globals.css";
import "nprogress/nprogress.css";
import "../components/styles/nprogress.css";
import Layout from "../components/Layout";
import Router from "next/router";
import nProgress from "nprogress";
import { ApolloClient, ApolloProvider } from "@apollo/client";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

interface Props {
	apollo: ApolloClient<{}>;
}

function MyApp({ Component, pageProps, apollo }: AppProps & Props) {
	return (
		<ApolloProvider client={apollo}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

export default MyApp;
