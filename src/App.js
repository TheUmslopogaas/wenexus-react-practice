import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/styles.css";
import Cookies from "js-cookie";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import React from "react";

const { SHOPIFY_API_KEY } = process.env;

const client = new ApolloClient({
  fetchOptions: {
    credentials: "include"
  }
});

class MyApp extends App {
  state = {
    shopOrigin: Cookies.get("shopOrigin")
  };

  render() {
    const { Component, pageProps } = this.props;
    const theme = {
      colors: {
        topBar: {
          background: "#FFF"
        }
      },
      logo: {
        width: 124,
        topBarSource:
          "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
        url: "http://jadedpixel.com",
        accessibilityLabel: "Jaded Pixel"
      }
    };
    return (
      <React.Fragment>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider
          shopOrigin={this.state.shopOrigin}
          apiKey={API_KEY}
          forceRedirect
          theme={theme}
        >
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
