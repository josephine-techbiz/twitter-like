<template>
  <div class="add-tweet">
    <div class="add-tweet-profile">
      <img src="data:image/png;base64,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"
      >
    </div>
    <div class="add-tweet-content">
      <div class="tweet-section">
        <textarea
          v-model="tweetContent.text"
          placeholder="What's happening?"
        />
        <div
          v-if="tweetContent.imageList"
          class="tweet-section-images"
        >
          <div
            v-for="(image, i) in tweetContent.imageList"
            :key="i"
            class="image-container"
          >
            <img :src="image.url">
            <div
              class="close-button"
              @click="deleteImage(i)"
            >
              <base-icon icon="close" />
            </div>
          </div>
        </div>
      </div>
      <div class="controls">
        <div class="controls-media">
          <div
            class="controls-media-item"
            @click="$refs.uploadImageInput.click()"
          >
            <base-icon icon="image" />
            <input
              ref="uploadImageInput"
              type="file"
              accept="image/*"
              hidden
              @change="showFiles"
            >
          </div>
          <div class="controls-media-item">
            <base-icon icon="gif" />
          </div>
          <div class="controls-media-item">
            <base-icon icon="graph" />
          </div>
          <div class="controls-media-item">
            <base-icon icon="schedule" />
          </div>
        </div>
        <div class="controls-submit">
          <button
            :disabled="!hasTweetText()"
            @click="handleSubmit"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref , getCurrentInstance} from 'vue'
import BaseIcon from '@/components/BaseIcon'
import { mapGetters } from 'vuex'
import Tweet from '@/models/Tweet'
import User from '@/models/User'
import {uploadTweet} from '@/services/api'
import { useStore } from 'vuex'

export default {
  name: 'AddTweet',
  components:{
    BaseIcon
  },
  setup(props, context){
    const tweetContent = ref(defaultTweetContent())
    const store = useStore();

    const app = getCurrentInstance();
    const $notification = app.parent.appContext.config.globalProperties.$notification;

    function defaultTweetContent(){
      return {
        text: '',
        imageList: []
      }
    }
    
    async function handleSubmit(){
      const newTweetContent = {
        text: tweetContent.value.text,
        photos: tweetContent.value.imageList
      }
      const newTweet = new Tweet(new User(store.getters.getMe), newTweetContent);
      try{
        await uploadTweet(newTweet);
        $notification({
          type: 'info',
          message: 'Tweet sent!'
        })
      }catch(err){
        $notification({
          type: 'error',
          message: 'Error in send tweet'
        })
      }

      context.emit('submit-click')
      tweetContent.value = defaultTweetContent();
    }

    function hasTweetText(){
      return tweetContent.value.text.length > 0 && tweetContent.value.text
    }

    function showFiles(e){
      const [file] = e.target.files;
      const url = URL.createObjectURL(file);
      tweetContent.value.imageList.push({url})
    }

    function deleteImage(index){
      tweetContent.value.imageList.splice(index, 1)
    }

    return {
      tweetContent,
      handleSubmit,
      hasTweetText,
      showFiles,
      deleteImage
    }
  },
  computed:{
    ...mapGetters({
      me: 'getMe'
    }),
  },
}
</script>

<style lang="scss">
@import '@/assets/theme/colors';

.add-tweet{
  padding: 10px 1rem;
  padding-bottom: 0;
  display: flex;
  width: 100%;
  border-top: $border-dark;
  border-bottom: $border-dark;
  &-profile{
    width: 4rem;
    height: 4rem;
    img{
      border-radius: 999px;
      width: 100%;
    }
  }
  &-content{
    margin-left: 15px;
    width: 100%;
    .tweet-section{
      width: 100%;
      textarea{
        appearance: none;
        -webkit-appearance: none;
        display: block;
        padding: 12px;
        font-size: 1.5rem;
        resize: vertical;
        background-color: transparent;
        border: none;
        width: 100%; 
        min-height: 5rem;
        max-height: 10rem;
        border-radius: 5px;
        color: #fff;
        &:focus{
          border: none;
          outline: none;
        }
      }
      &-images{
        display: flex;
        padding: 1rem;
        .image-container{
          & + .image-container{
            margin-left: 15px;
          }
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-grow: 1;
          img{
            width: 100%;
          }
          .close-button{
            position: absolute;
            background-color: rgba($color: $color-dark-gray, $alpha: 0.3);
            top: 0;
            right: 0;
            cursor: pointer;
            margin-top: 10px;
            margin-right: 10px;
            width: 2rem;
            height: 2rem;
            border-radius: 999px;
            padding: 7px;
            svg{
              width: 100%;
              height: 100%;
              fill: #fff;
            }
          }
        }
      }
    }
    .controls{
      border-top: $border-dark;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      &-media{
        display: flex;
        gap: 4px;
        &-item{
          width: 32px;
          height: 32px;
          border-radius: 999px;
          cursor:pointer;
          padding: 5px;
          svg{
            width: 100%;
            fill: $color-blue
          }
          &:hover{
            background-color: rgba($color: $color-blue, $alpha: 0.3);
          }
        }
      }
      &-submit{
        button{
          cursor: pointer;
          background-color: $color-blue;
          color: #fff;
          font-weight: bold;
          padding: 10px 16px;
          outline: none;
          border: none;
          border-radius: 9999px;
          &:disabled{
            cursor: no-drop;
            background-color: rgba($color: $color-blue, $alpha: 0.3);
            color: rgba($color: #fff, $alpha: 0.3);
          }
        }
      }
    }
  }
}
</style>