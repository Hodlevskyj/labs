import WInput from '../components/Input/WInput.vue';

export default {
  title: 'Components/WInput',
  component: WInput,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: { type: 'select', options: ['text', 'email', 'password'] },
    },
    required: { control: 'boolean' },
    error: { control: 'text' },
    maxlength: { control: 'number' },
  },
};

const Template = (args) => ({
  components: { WInput },
  setup() {
    return { args };
  },
  template: '<WInput v-bind="args" v-model:value="args.value" />',
});

export const Text = Template.bind({});
Text.args = {
  value: '',
  placeholder: 'Enter text',
  type: 'text',
  required: false,
  error: '',
  maxlength: 100,
};

export const Email = Template.bind({});
Email.args = {
  value: '',
  placeholder: 'Enter email',
  type: 'email',
  required: true,
  error: 'Email is required',
  maxlength: 100,
};

export const Password = Template.bind({});
Password.args = {
  value: '',
  placeholder: 'Enter password',
  type: 'password',
  required: true,
  error: 'Password is required',
  maxlength: 100,
};