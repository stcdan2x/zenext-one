import React from "react";
import type { AppProps /*, AppContext*/ } from "next/app";
import NProgress from "nprogress";

import "../styles/globals.css";
import "nprogress/nprogress.css";
import "../components/styles/nprogress.css";
import Layout from "../components/Layout";
import Router from "next/router";
import nProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
