<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';

	let name = '';
	let email = '';
	let subject = '';
	let message = '';

	const metaTitle = 'Darren Paul';
	const metaDescription =
		'Experienced web developer with a proven track record of delivering user-friendly and responsive websites and applications for clients of all sizes. Highly motivated and up-to-date on the latest trends and technologies.';
	const metaImage =
		'https://res.cloudinary.com/darren-paul-photography/image/upload/v1672140864/darren-paul-developer/darren-paul-cover-min_ytvald.jpg';
	const domain = 'https://www.darrenpaul.dev';
</script>

<section class="contact">
	<form method="POST">
		<h1>Get in touch</h1>

		<!-- FIRST NAME -->
		<div class="--input-group">
			<div class="--label-wrapper">
				<label for="name">Name</label>
			</div>
			<input id="name" name="name" type="text" value={name} aria-label="Name" required />
		</div>

		<!-- EMAIL ADDRESS -->
		<div class="--input-group">
			<label for="email">Email</label>
			<input id="email" name="email" type="email" value={email} aria-label="Email" required />
		</div>

		<!-- SUBJECT -->
		<div class="--input-group">
			<label for="subject">Subject</label>
			<input
				id="subject"
				name="subject"
				type="text"
				value={subject}
				aria-label="Subject"
				required
			/>
		</div>

		<!-- MESSAGE -->
		<div class="--input-group">
			<label for="message">Message</label>
			<textarea id="message" name="message" value={message} aria-label="Message" required />
		</div>

		<button>Send</button>
	</form>

	<div class="--text-wrapper">
		<p>
			I’ve worked with a range of clients from small startups and individuals to large corporations.
			I pride myself in developing user-friendly and responsive websites and applications that draw
			users in and that keeps them engaged. I’m a highly motivated individual who stays up to date
			on the latest trends and technologies. I have a strong work ethic which means that I’m always
			willing to go that extra mile to ensure the best possible results and I have a proven track
			record in delivering a quality of service.
		</p>
	</div>
</section>

<MetaTags
	title={metaTitle}
	titleTemplate="%s | About"
	description={metaDescription}
	canonical={`${domain}/contact`}
	openGraph={{
		type: 'website',
		url: `${domain}/contact`,
		title: metaTitle,
		description: metaDescription,
		images: [
			{
				url: metaImage,
				width: 800,
				height: 600,
				alt: metaTitle
			}
		]
	}}
	twitter={{
		handle: '',
		site: `${domain}/contact`,
		cardType: 'summary_large_image',
		title: metaTitle,
		description: metaDescription,
		image: metaImage,
		imageAlt: metaTitle
	}}
/>

<style lang="scss">
	.contact {
		/* SIZE */
		@apply max-w-screen-2xl;
		min-height: calc(100dvh - 48px);
		/* MARGINS AND PADDING */
		@apply pt-24 md:pt-0 mx-auto;
		/* LAYOUT */
		@apply grid grid-cols-1 md:grid-cols-2 justify-center items-center;
		/* BORDERS */
		/* COLORS */
		/* TEXT */
		/* ANIMATION AND EFFECTS */

		form {
			/* SIZE */
			/* MARGINS AND PADDING */
			@apply px-5 md:px-16 mb-8 md:mb-0;
			/* LAYOUT */
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */

			h1 {
				/* SIZE */
				@apply w-fit;
				/* MARGINS AND PADDING */
				@apply mx-auto mb-6 py-2 px-4;
				/* LAYOUT */
				/* BORDERS */
				@apply border-b-4 border-r-4 border-black;
				/* COLORS */
				/* TEXT */
				@apply text-5xl text-center;
				/* ANIMATION AND EFFECTS */
			}
			.--input-group {
				/* SIZE */
				/* MARGINS AND PADDING */
				@apply mb-3;
				/* LAYOUT */
				@apply grid;
				/* BORDERS */
				/* COLORS */
				/* TEXT */
				/* ANIMATION AND EFFECTS */

				.--label-wrapper {
					/* SIZE */
					/* MARGINS AND PADDING */
					/* LAYOUT */
					@apply flex justify-between;
					/* BORDERS */
					/* COLORS */
					/* TEXT */
					/* ANIMATION AND EFFECTS */
				}

				input {
					/* SIZE */
					/* MARGINS AND PADDING */
					@apply p-2;
					/* LAYOUT */
					/* BORDERS */
					@apply border-2 border-black rounded;
					/* COLORS */
					/* TEXT */
					/* ANIMATION AND EFFECTS */
				}

				textarea {
					/* SIZE */
					@apply h-32;
					/* MARGINS AND PADDING */
					@apply p-2;
					/* LAYOUT */
					/* BORDERS */
					@apply border-2 border-black rounded;
					/* COLORS */
					/* TEXT */
					@apply resize-none;
					/* ANIMATION AND EFFECTS */
				}
			}

			button {
				/* SIZE */
				@apply w-full;
				/* MARGINS AND PADDING */
				@apply p-2;
				/* LAYOUT */
				/* BORDERS */
				@apply border-2 border-black rounded;
				/* COLORS */
				@apply bg-black text-white;
				/* TEXT */
				/* ANIMATION AND EFFECTS */
			}
		}

		.--text-wrapper {
			/* SIZE */
			/* MARGINS AND PADDING */
			@apply px-5 md:px-16 mb-8 md:mb-0;
			/* LAYOUT */
			/* BORDERS */
			/* COLORS */
			/* TEXT */
			/* ANIMATION AND EFFECTS */
		}
	}
</style>
