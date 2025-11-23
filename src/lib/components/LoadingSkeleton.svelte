<div class="bg-neutral-0 rounded-lg md:rounded-xl p-6 md:p-10 shadow-sm animate-pulse">
	<!-- Avatar and Basic Info Skeleton -->
	<div class="flex flex-col md:flex-row gap-6 md:gap-10 mb-6 md:mb-8">
		<div class="w-24 h-24 md:w-32 md:h-32 bg-neutral-200 rounded-full"></div>

		<div class="flex-1">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2 md:mb-4">
				<div class="h-8 bg-neutral-200 rounded w-48 mb-1 md:mb-0"></div>
				<div class="h-5 bg-neutral-200 rounded w-32"></div>
			</div>

			<div class="h-6 bg-neutral-200 rounded w-40 mb-4 md:mb-6"></div>

			<div class="h-5 bg-neutral-200 rounded w-full mb-6"></div>
		</div>
	</div>

	<!-- Stats Skeleton -->
	<div class="bg-neutral-100 rounded-lg p-4 md:p-6 mb-6 md:mb-8 grid grid-cols-3 gap-4">
		<div class="text-center">
			<div class="h-4 bg-neutral-200 rounded w-12 mx-auto mb-2"></div>
			<div class="h-7 bg-neutral-200 rounded w-16 mx-auto"></div>
		</div>
		<div class="text-center">
			<div class="h-4 bg-neutral-200 rounded w-16 mx-auto mb-2"></div>
			<div class="h-7 bg-neutral-200 rounded w-16 mx-auto"></div>
		</div>
		<div class="text-center">
			<div class="h-4 bg-neutral-200 rounded w-14 mx-auto mb-2"></div>
			<div class="h-7 bg-neutral-200 rounded w-16 mx-auto"></div>
		</div>
	</div>

	<!-- Links Skeleton -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each [0, 1, 2, 3] as i (i)}
			<div class="flex items-center gap-4" style="animation-delay: {i * 100}ms;">
				<div class="w-5 h-5 bg-neutral-200 rounded"></div>
				<div class="h-5 bg-neutral-200 rounded w-32"></div>
			</div>
		{/each}
	</div>
</div>
