import {
  EmptyState,
  Layout,
  Page,
  ResourcePicker,
  Card,
  TextStyle,
  ResourceList,
  Thumbnail,
  Query,
  TopBar,
  FilterType,
  Avatar
} from "@shopify/polaris";
import store from "store";
import React from "react";
import ImageListing from "../components/ImageListing";

class Index extends React.Component {
  state = {
    searchValue: "",
    appliedFilters: [
      {
        key: "accountStatusFilter",
        value: "Account enabled"
      }
    ]
  };

  handleSearchChange = searchValue => {
    this.setState({ searchValue });
  };

  handleFiltersChange = appliedFilters => {
    this.setState({ appliedFilters });
  };

  renderItem = item => {
    const { id, url, name, location } = item;
    const media = <Avatar customer size="medium" name={name} />;

    return (
      <ResourceList.Item id={id} url={url} media={media}>
        <h3>
          <TextStyle variation="strong">{name}</TextStyle>
        </h3>
        <div>{location}</div>
      </ResourceList.Item>
    );
  };

  render() {
    <Layout>
      <Layout.Section>
        <Card title="Online store dashboard" sectioned>
          <p>View a summary of your online store’s performance.</p>
        </Card>
      </Layout.Section>
    </Layout>;
    const filters = [
      {
        key: "orderCountFilter",
        label: "Number of orders",
        operatorText: "is greater than",
        type: FilterType.TextField
      },
      {
        key: "accountStatusFilter",
        label: "Account status",
        operatorText: "is",
        type: FilterType.Select,
        options: ["Enabled", "Invited", "Not invited", "Declined"]
      }
    ];

    const filterControl = (
      <ResourceList.FilterControl
        filters={filters}
        appliedFilters={this.state.appliedFilters}
        onFiltersChange={this.handleFiltersChange}
        searchValue={this.state.searchValue}
        onSearchChange={this.handleSearchChange}
        additionalAction={{
          content: "Save",
          onAction: () => console.log("New filter saved")
        }}
      />
    );

    return (
      <Page title="Phomas Images">
        <ImageListing />
      </Page>
    );
  }
}

export default Index;
