const Footer = () => {
	return (
		<footer className="">
			<div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
				<div className="max-w-sm">
					<div className="mb-6 flex h-10 items-center space-x-2">
						<img
							className="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/>
						<span className="text-lg font-medium">NetServe</span>
					</div>
					<div className="text-gray-500">
						"Providing top-notch network solutions with excellence and
						expertise."
					</div>
				</div>
				<div className="">
					<div className="mt-4 mb-2 font-medium xl:mb-4">Guides</div>
					<nav aria-label="Guides Navigation" className="text-gray-500">
						<ul className="space-y-3">
							<li>
								<a className="hover:text-blue-600 hover:underline" href="/">
									Guidelines
								</a>
							</li>
							<li>
								<a className="hover:text-blue-600 hover:underline" href="/">
									FAQs
								</a>
							</li>
							<li>
								<a className="hover:text-blue-600 hover:underline" href="/">
									Getting help from the community
								</a>
							</li>
							<li>
								<a className="hover:text-blue-600 hover:underline" href="/">
									Pricing vs Hourly Rate
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="">
					<div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
					<nav aria-label="Footer Navigation" className="text-gray-500">
						<ul className="space-y-3">
							<li>
								<a className="hover:text-blue-600 hover:underline" href="/">
									Pricing
								</a>
							</li>
							<li>
								<a className="hover:text-blue-600 hover:underline" href="/">
									Demo
								</a>
							</li>
							<li>
								<a className="hover:text-blue-600 hover:underline" href="/">
									Press
								</a>
							</li>
							<li>
								<a className="hover:text-blue-600 hover:underline" href="/">
									Support Hub
								</a>
							</li>
							<li>
								<a className="hover:text-blue-600 hover:underline" href="/">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="">
					<div className="mt-4 mb-2 font-medium xl:mb-4">
						Support Us on Product Hunt
					</div>
					<div className="flex flex-col">
						<div className="mb-4">
							<a
								href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple"
								target="_blank"
								rel="noreferrer">
								<img
									src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?post_id=100070&theme=light"
									alt="Apple - Think&#0032;Different | Product Hunt"
									style={{ width: "250px", height: "54px" }}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="border-t">
				<div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
					<p className="">© 2022 NetServe | All Rights Reserved</p>
					<p className="-order-1 sm:order-none">Made with ❤️ Remotely</p>
					<p className="">
						<a className="" href="/">
							Privacy Policy
						</a>
						<span>|</span>
						<a className="" href="/">
							Terms of Service
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
