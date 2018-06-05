<template>

	<div class="box box-info">
        <div class="box-header">
        	<span v-if="!editMode">
        		<h3 class="box-title">
	                {{ video.description }}
	            </h3>
	            <span class="pull-right" style="display:flex">
		            <file-uploader
		            	v-if="!video.poster_saved_name"
	                    @upload-successful="$emit('add-poster', $event)"
	                    @upload-error="reportError"
	                    :url="'/howToPosters/' + video.id">
	                    <span slot="upload-button">
	                    	<button class="btn btn-xs btn-info">
				            	<i class="fa fa-picture-o"/>
				            	<i class="fa fa-upload"/>
				            </button>
	                    </span>
	                </file-uploader>
	                <button class="btn btn-xs btn-danger"
	                	v-if="video.poster_saved_name"
	                	@click="$emit('delete-poster')">
		            	<i class="fa fa-picture-o"/>
		            	<i class="fa fa-times"/>
		            </button>
		            <i class="fa fa-pencil-square-o btn btn-xs btn-warning margin-left-xs"
				        @click="editMode=true"/>
		            <i class="fa fa-trash-o btn btn-xs btn-danger margin-left-xs"
				        @click="showModal=true"/>
	            </span>
        	</span>
        	<span v-else>
        		<input type="text"
        			style="width:60%"
        			v-model="description"
        			v-if="editMode"
        			v-focus
        			@keypress.enter="updateDescription">
        		<span class="pull-right">
        			<i class="btn btn-xs btn-danger fa fa-times"
        				@click="description=video.description;editMode=false"/>
        			<i class="btn btn-xs btn-success fa fa-check" @click="updateDescription"/>
        		</span>
        	</span>
        </div>
        <div class="box-body">
            <video-player :options="getPlayerOptions(video)"
                class="vjs-custom-skin"
                playsinline/>
        </div>
        <div class="box-footer">
            <vue-select :options="tagList"
                multiple
                v-model="video.tagList"
                :placeholder="labels.selectTags"
                @input="$emit('update-video')"/>
        </div>
        <modal :show="showModal"
            @cancel-action="showModal=false"
            @commit-action="$emit('delete-video'); showModal=false"/>
    </div>
</template>

<script>

import VueVideoPlayer from 'vue-video-player';

Vue.use(VueVideoPlayer);
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');

export default {
    name: 'HowToVideo',

    props: {
        video: {
            type: Object,
            required: true,
        },
        tagList: {
            type: Object,
            required: true,
        },
    },

		data() {
			return {
				labels: Store.labels,
				editMode: false,
				description: this.video.description,
				showModal: false
			}
		},

		computed: {},

		watch: {},

		mounted() {},

		methods: {
			getPlayerOptions(video) {
                return {
                    muted: false,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: 'video/mp4',
                        src: '/howToVideos/' + video.id
                    }],
                    poster: this.video.poster_saved_name ? '/howToPosters/' + this.video.id : ''
                };
            },
            updateDescription() {
            	this.video.description = this.description;
            	this.editMode = false;
            	this.$emit('update-video');
            },
			reportError() {
                toastr.error('Error uploading poster');
            },
		},,
};

</script>
