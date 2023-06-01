<template>
  <div class="product__details-review">
    <div class="postbox__comments">
      <div class="postbox__comment-title mb-30">
        <h3>Avaliações ({{ item.reviews?.length }})</h3>
      </div>
      <div class="latest-comments mb-30">
        <ul>
          <li v-for="(review, index) in item.reviews" :key="`${index}_sender_${review.showReply}`">
            <div class="comments-box">
              <!-- <div class="comments-avatar">
                        <img :src="review.img" alt="" />
                      </div> -->
              <div class="comments-text">
                <div class="user-rating">
                  <ul>
                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                    <li><a href="#"><i class="fal fa-star"></i></a></li>
                  </ul>
                </div>
                <div class="avatar-name">
                  <h5>{{ review.clientEmail }}</h5>
                </div>
                <p>{{ review.reviewComment }}</p>
              </div>
            </div>
            <li v-if="review.showReply" class="children">
              <div class="comments-box row">
                <Icon name="zondicons:subdirectory-right" size="1.5em" class="col-1" />
                <div class="comments-avatar col-1">
                  <img src="@/assets/img/logo/Logo_fundo_mar.png" alt="" class="img-thumbnail img-fluid " />
                </div>
                <div class="comments-text col-9">
                  <div class="avatar-name">
                    <h5>{{ review.replyEmail }}</h5>
                  </div>
                  <p>{{ review.replyComment }}</p>
                </div>
              </div>
            </li>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="app.logged" class="post-comments-form mb-100">
      <div class="post-comments-title mb-30">
        <h3>Avalie o produto!</h3>
        <div class="post-rating">
          <span>Sua avaliação :</span>
          <ul>
            <li>
              <a href="#">
                <i class="fal fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fal fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fal fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fal fa-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fal fa-star"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- review-form -->
      <review-form />
      <!-- review-form -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import ProductType from '~~/types/productType';
import ReviewForm from '../forms/ReviewForm.vue';
import { useAppStore } from '~/store/app';

const app = useAppStore()
const props = defineProps({
  item: {
    type: Object as PropType<ProductType>,
    default: {},
    required: true
  }
})
</script>
