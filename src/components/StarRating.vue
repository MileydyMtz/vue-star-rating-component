<template>
<div class="star-rating">
    <button v-for="(star, index) in stars" :key="index" :class="{'star': true, 'star--filled': finalStars[index]}" @click="setRating(index + 1)" @mouseover="setHover(index + 1)" @mouseleave="setHover(0)">
        <span class="star-char">★</span>
    </button>
</div>
</template>

<script>
export default {
    name: 'StarRating',
    data() {
        return {
            stars: [false, false, false, false, false],
            hoverStars: [false, false, false, false, false]
        }
    },
    methods: {
        setRating(rating) {
            for (let i = 0; i < this.stars.length; i++) {
                this.stars[i] = i < rating
            }
        },
        setHover(rating) {
            for (let i = 0; i < this.hoverStars.length; i++) {
                this.hoverStars[i] = i < rating
            }
        }
    },
    computed: {
        finalStars() {
            return this.stars.map((star, i) => star || this.hoverStars[i])
        }
    }
}
</script>

<style lang="scss">
$star-color: gray;
$star-filled-color: gold;

.star-rating {
    display: flex;
    justify-content: center;
    width: 90%;

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 15%;
    }

    .star {
        color: $star-color;
        font-size: 1.5em;
        transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

        &--filled {
            color: $star-filled-color;
        }

        &:hover,
        &:active {
            color: $star-filled-color;
            transform: scale(1.2);
        }
    }
}
</style>
