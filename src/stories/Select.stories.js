import { defineComponent, ref } from 'vue';
import WSelect from '../components/Select/WSelect.vue';

export default {
  title: 'WSelect',
  component: WSelect,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Мітка для випадаючого списку' },
    options: {
      control: 'object',
      description: 'Список опцій у форматі [{ label: "...", value: "..." }]',
    },
    modelValue: { control: 'text', description: 'Вибране значення (v-model)' },
    multiple: { control: 'boolean', description: 'Увімкнути режим багатоселекту' },
    clearable: { control: 'boolean', description: 'Можливість очищення вибору' },
    disabled: { control: 'boolean', description: 'Заблокувати селект' },
  },
};

const Template = (args) =>
  defineComponent({
    components: { WSelect },
    setup() {
      const modelValue = ref(args.modelValue);
      return { args, modelValue };
    },
    template: '<WSelect v-bind="args" v-model="modelValue" />',
  });

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  modelValue: 'option1',
  multiple: false,
  clearable: true,
  disabled: false,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: '',
  options: [
    { label: 'Option A', value: 'optionA' },
    { label: 'Option B', value: 'optionB' },
    { label: 'Option C', value: 'optionC' },
  ],
  modelValue: 'optionB',
  multiple: false,
  clearable: true,
  disabled: false,
};

export const EmptyOptions = Template.bind({});
EmptyOptions.args = {
  label: 'No options available',
  options: [],
  modelValue: '',
  multiple: false,
  clearable: true,
  disabled: false,
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  label: 'Select multiple options',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  modelValue: [],
  multiple: true,
  clearable: true,
  disabled: false,
};

export const DisabledSelect = Template.bind({});
DisabledSelect.args = {
  label: 'Disabled select',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  modelValue: 'option1',
  multiple: false,
  clearable: false,
  disabled: true,
};