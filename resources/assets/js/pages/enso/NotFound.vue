<template>
	<div class="container">
		<div class="error-container">
			<div class="error-title">404</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'NotFound'
	};

</script>

<style>

	.error-container {
		display:flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		color: #6e7679;
		font-weight: 100;
		font-family: 'Raleway', sans-serif;
	}

	.error-title {
		font-size: 90px;
	}

	.error-content {
		font-size: 40px;
	}

	.error-details {
		font-size: 30px;
	}

</style>