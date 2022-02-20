const AccountPage = () => {
	return <div>Account</div>;
};

export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`../../backend/seed-data/data.ts`);
	const data = await res.json();
	console.log(data);

	// Pass data to the page via props
	return { props: { data } };
}

export default AccountPage;
