<template>
<section class="bg-grey-lighter w-full min-h-screen relative gradient">
		<Head />
		<section>
    <div>
    
    
    
        <div class="flex flex-col pb-10">    
            <div class="flex flex-col w-5/6 md:w-3/4 mx-auto">
                <div class="editorDiv">
                    <div class="my-10">
                        <label class="font-bold ml-px text-blue-darker underline">Post Title</label>
                        <input type="text" v-model="titleNew" class="bg-gray-200 border border-b-4 border-blue-darker mt-1 px-4 py-2 relative rounded shadow-lg text-blue-darker text-sm w-full" placeholder="Post Title..." />
                    </div>
    
                    <!-- <div class="my-5 relative"><input type="file" v-on:change="iconNew" class="mt-2 bg-transparent block border-b-2 border-gray-500 px-2 pb-0 pt-4 text-gray-500 text-lg w-full"><span class="highlight"></span> <span class="bar relative block w-full"></span>                                        <label class="label absolute font-bold label left-0 pointer-events-none text-blue-500 text-sm top-0 underline">Primary Image</label> </div> -->
    
                    <label class="font-bold ml-px text-blue-darker underline">Post Content</label>
                     <div class="bg-white border border-b-4 border-blue-darker mt-1 my-5 relative rounded shadow-lg">
                        <vue-editor v-model="descriptionNew" class=""></vue-editor>
                    </div>
                    <div class="text-center my-5"> <button @click="showPreview" class="bg-grey-light border border-blue-darker font-bold hover:bg-white hover:shadow-md modal-close mx-2 px-3 py-1 rounded text-blue-darker">Preview</button>
                        <button @click="closeEditor" class="bg-grey-light border border-blue-darker font-bold hover:bg-white hover:shadow-md modal-close mx-2 px-3 py-1 rounded text-blue-darker">Cancel</button></div>
                </div>
    
            </div>
    
            <div v-if="preview == true" class="absolute top-0 flex h-full justify-center z-10 pt-24" style="background-color: #000000bd;">
                <div class="cursor-not-allowed flex flex-col mx-auto lg:w-1/2 md:w-3/4 w-5/6 rounded-lg shadow-2xl bounce">
                    <div class="previewDivShadow flex-col flex">
                        <img src="../assets/header.png" class="w-full">
                        <div class="min-h-25 bg-grey-lightest border px-2 py-2 previewDiv">
                            <!-- <div class="w-1/4" v-if="!this.iconNew == ''">
                                                        <div class="w-full border border-black rounded-lg h-full ml-4">
                                                            <img :src="icon" class="w-auto h-64">
                                                        </div>
                                                    </div> -->
                            <div class="px-10">
                                <h1 class="font-bold text-2xl text-gray-800 pb-2 underline text-center">{{titleNew}}</h1>
                                <div class="text-xs border-b border-gray-400 pt-1 pb-2 text-gray-800 text-center"><span>{{currentDate}}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Posted by</span>
                                    <div class="relative inline-block px-1">
                                        <a href="/dashboard/good-read/profile">
                            <b class="text-brand-400">{{nameNew}}</b>
                          </a>
                                    </div>
                                </div>
                                <div v-html="descriptionNew" class="break-words pt-1 text-gray-800 whitespace-pre-line"></div>
                            </div>
                        </div>
                        <img src="../assets/footer.png" class="w-full">
                    </div>
                                    <div class="text-center my-5"> <button @click="addPost" class="bg-grey-light border border-blue-darker font-bold hover:bg-white hover:shadow-md modal-close mx-2 px-3 py-1 rounded text-blue-darker">Add Post</button>
                        <button @click="closePreview" class="bg-grey-light border border-blue-darker font-bold hover:bg-white hover:shadow-md modal-close mx-2 px-3 py-1 rounded text-blue-darker">Go Back</button></div>
            </div>
            </div>
        </div>
    </div>
		</section>
        <section class="absolute bottom-0 w-full">
          <div class="bg-white py-2 px-16 flex items-center border-t border-grey-dark">
            <p class="text-sm mx-auto font-thin">&copy; Copyright 2020, Stone Paper Scissors. All Rights Reserved</p>
          </div>
        </section>
</section>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Head from './mobile/campaigns/head.vue';
import allarticles from './all-articles/articles.json';

// import ReadComponent from '../components/ReadComponent.vue';
export default {
    name: 'PostCreate',
    data() {
        return {
            modalName: 'consent-form',
            articles : allarticles,
            showConsent: '',
            loader: false,
            titleNew: '',
            descriptionNew: '',
            nameNew: 'Anonymous',
            // iconNew: '',
            currentDate: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
            open,
            newId: '',
            postCreate: true,
            postSummary: false,
            preview: false,
            activeBtn: 'desktop',
        };

    },
    components: {
        VueEditor,
        Head,
    },

    methods: {
        //     iconNew(event) {
        //     console.log(event);
        //     this.iconNew = event.target.file[0];
        // // },
        // closeM(){
        //     this.open = false;
        //     console.log(this.open);
        // },
        closeEditor: function() {
        this.$router.push({ path: '/blog' });
        },
        closePreview: function() {
            this.preview = false;
        },
        showPreview: function() {
            this.preview = true;
        },
        addPost: function() {
            const newId = this.articles.length;
            if (this.titleNew && this.descriptionNew && this.nameNew) {
                const element = {
                    id: newId + 1,
                    title: this.titleNew,
                    date: this.currentDate,
                    author: this.nameNew,
                    description: this.descriptionNew,
                    links: false,
                    icon: 'icon/tour.png',
                    routeToProf: 'read more profile',
                    routeTo: 'read more',
                    disabled: false,
                };

                this.articles.push(element);
                this.titleNew = '';
                this.nameNew = '';
                this.descriptionNew = '';
                this.preview = false;
                this.$router.push({ path: '/blog' });
            } else {
                alert('Fields Empty');
            }
        },

        removeComment: function(index) {
            this.cards.remove(index);
        }
    },

}
</script>
<style>
.active {
    background-color: #4299e1;
}

.bounce {
    animation: fadein .8s;
}

@keyframes fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.gradient {
  background: linear-gradient(90deg, #33d574 0%, #28b0c5 100%);
}

.ql-toolbar {
    background-color: #cbd5e0;
    display: flex;
    justify-content: center;
    padding-top: 14px!important;
}
</style>