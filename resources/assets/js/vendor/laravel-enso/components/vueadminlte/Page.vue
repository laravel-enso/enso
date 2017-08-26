<template>

	<span>
		<section class="content-header">
			<slot name="header">
			</slot>
			<breadcrumbs></breadcrumbs>
	    </section>
	    <section class="content">
	        <div class="row">
	        	<slot></slot>
	        </div>
	    </section>
    </span>

</template>

<script>

	export default {
		props: {
			customRender: {
				type: Function,
				default: null
			}
		}
	};

</script>