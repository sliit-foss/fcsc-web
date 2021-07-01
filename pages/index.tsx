import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>SLIIT Faculty of Students' Community | Official Website</title>
				<meta
					name="description"
					content="SLIIT Faculty of Students' Community | Official Website"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
						Welcome{' '}
					</h1>
					<p className="mb-8 leading-relaxed">
						<a href="https://nextjs.org">
							SLIIT Faculty of Students' Community
						</a>
					</p>
				</div>
			</main>
		</div>
	)
}
