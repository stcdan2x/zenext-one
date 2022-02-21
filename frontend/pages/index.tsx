import React, { useState } from "react";
import { ContentfulClientApi, createClient } from "contentful";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Head from "next/head";

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

// export async function getServerSideProps() {
// 	const client = createClient({
// 		space: process.env.CONTENTFUL_SPACE_ID,
// 		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
// 	});

// 	const res = await client.getEntries({ content_type: "zenextone" });

// 	console.log(res);

// 	return {
// 		props: {
// 			zenextoneItems: res.items
// 		}
// 	};
// }

export interface Product {
	name: string;
	price: string;
	status: string;
	description: string;
}

const Index = () => {
	//console.log(zenextoneItems);
	//const products = zenextoneItems;
	const [items, setItems] = useState([]);
	const { data, error, loading } = useQuery(ALL_PRODUCTS_Q, {
		onCompleted: (data) => {
			const {
				zenextoneCollection: { items }
			} = data;
			setItems(items);
		}
	});

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			{!loading && (
				<ul className="index-container">
					{items.map((product: Product, idx) => {
						return (
							<li key={idx}>
								<h1>{product.name}</h1>
								<h4>{product.price}</h4>
								<h4>{product.status}</h4>
								<p>{product.description}</p>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};

export default Index;
