<script setup lang="ts"></script>

<template>
	<div
		class="flex flex-col-reverse md:flex-row justify-center items-center gap-8 mt-16 md:mt-0 py-4 mb:py-16"
	>
		<div
			class="flex flex-col justify-center items-center h-full max-w-[80ch] p-4"
		>
			<h1 class="text-neutral-950 tracking-tighter text-2xl leading-6">
				<span> Hey there,</span>

				<br>

				<span
					class="text-4xl md:text-6xl font-black uppercase bg-gradient-to-r from-neutral-800 to-red-500 bg-clip-text text-transparent"
				>
					I'm Darren Paul
					<br>
					a Software Developer
				</span>
				<br>
				<span> with a passion for frontend development and design. </span>
			</h1>
		</div>

		<div
			class="bg-white rounded-full border-2 border-neutral-950 overflow-hidden shadow-hard"
		>
			<NuxtImg
				src="https://res.cloudinary.com/darren-paul-photography/image/upload/v1693379390/darren-paul-developer/darren-paul-cartoon_bs40kv.webp"
				alt="Darren Paul Dev Landing Image"
				class="h-72 md:h-96 object-cover aspect-square"
			/>
		</div>
	</div>
</template>
