import { shallowMount } from '@vue/test-utils';

import VueMarked from './VueMarked';

describe('VueMarked', () => {
    it('renders', () => {
        expect(shallowMount(VueMarked)).toBeTruthy();
    });

    it('contains markdown from default slot', () => {
        const markdown = '# Headline';

        const wrapper = shallowMount(VueMarked, {
            slots: {
                default: [
                    markdown,
                ],
            },
        });

        expect(wrapper.vm.source).toBe(markdown);
    });

    it('can contain markdown from multiple slot entries', () => {
        const markdown = [
            '# Headline',
            '## Headline 2',
            'Paragraph',
        ];

        const wrapper = shallowMount(VueMarked, {
            slots: {
                default: markdown,
            },
        });

        expect(wrapper.vm.source).toBe(markdown.join(''));
    });

    it('can render h1', () => {
        const markdown = '# Headline';

        const wrapper = shallowMount(VueMarked, {
            slots: {
                default: [
                    markdown,
                ],
            },
        });

        const element = wrapper.find('h1');

        expect(element).toBeDefined();
        expect(element.text()).toBe('Headline');
    });
});
