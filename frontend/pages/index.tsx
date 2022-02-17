import React from "react";
import { ContentfulClientApi, createClient } from "contentful";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const ALL_PRODUCTS_Q = gql`
	query ALL_PRODUCTS {
		zenextoneCollection {
			items {
				sys {
					publishedAt
					publishedVersion
					id
					spaceId
					environmentId
				}
				name
				description
				status
				price
				photo {
					size
					fileName
					contentfulMetadata {
						tags {
							name
							id
						}
					}
				}
			}
		}
	}
`;

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	});

	const res = await client.getEntries({ content_type: "zenextone" });

	//console.log(res);

	return {
		props: {
			zenextoneItems: res.items
		}
	};
}

const Index = ({ zenextoneItems }) => {
	//console.log(zenextoneItems);
	const products = zenextoneItems;
	const { data, error, loading } = useQuery(ALL_PRODUCTS_Q);
	console.log(data);
	console.log(loading);

	return (
		<>
			<ul className="index-container">
				{products.map((product, idx) => {
					return (
						<li key={idx}>
							<h1>{product.fields.name}</h1>
							<h4>{product.fields.price}</h4>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Index;
