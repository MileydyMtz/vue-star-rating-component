import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StarRating from '../StarRating.vue' 

describe('StarRating', () => {
    it('renders properly', () => {
        const wrapper = mount(StarRating)
        const stars = wrapper.findAll('.star')
        expect(stars.length).toBe(5)
        stars.forEach((star) => {
            expect(star.classes()).toContain('star')
            expect(star.classes()).not.toContain('star--filled')
        })
    })

    it('fills stars on click', async () => {
        const wrapper = mount(StarRating)
        const stars = wrapper.findAll('.star')

        await stars[2].trigger('click')

        stars.forEach((star, index) => {
        if (index <= 2) {
            expect(star.classes()).toContain('star--filled')
        } else {
            expect(star.classes()).not.toContain('star--filled')
        }
        })
    })

    it('fills stars on hover', async () => {
        const wrapper = mount(StarRating)
        const stars = wrapper.findAll('.star')

        await stars[3].trigger('mouseover')

        stars.forEach((star, index) => {
        if (index <= 3) {
            expect(star.classes()).toContain('star--filled')
        } else {
            expect(star.classes()).not.toContain('star--filled')
        }
        })
    })
})